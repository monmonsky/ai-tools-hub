#!/bin/bash

# SSL Certificate Setup for Aikita.id
# This script installs and configures SSL certificate using Let's Encrypt

echo "🔒 Setting up SSL certificate for aikita.id..."

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

DOMAIN="aikita.id"
EMAIL="hello@aikita.id"  # Update with your email

# Check if running as root
if [ "$EUID" -ne 0 ]; then
    echo -e "${RED}❌ Please run this script as root (use sudo)${NC}"
    exit 1
fi

# Step 1: Install Certbot
echo -e "\n${YELLOW}📦 Installing Certbot...${NC}"
apt update
apt install -y certbot python3-certbot-nginx

# Step 2: Stop Nginx temporarily
echo -e "\n${YELLOW}⏸️ Stopping Nginx temporarily...${NC}"
systemctl stop nginx

# Step 3: Obtain SSL certificate
echo -e "\n${YELLOW}🔐 Obtaining SSL certificate for ${DOMAIN}...${NC}"
certbot certonly --standalone \
    --email $EMAIL \
    --agree-tos \
    --no-eff-email \
    -d $DOMAIN \
    -d www.$DOMAIN

# Check if certificate was obtained successfully
if [ $? -eq 0 ]; then
    echo -e "${GREEN}✅ SSL certificate obtained successfully!${NC}"
else
    echo -e "${RED}❌ Failed to obtain SSL certificate${NC}"
    echo -e "${YELLOW}💡 Make sure:${NC}"
    echo -e "   - Domain ${DOMAIN} points to this server"
    echo -e "   - Port 80 and 443 are open"
    echo -e "   - No other service is using port 80"
    exit 1
fi

# Step 4: Setup automatic renewal
echo -e "\n${YELLOW}🔄 Setting up automatic renewal...${NC}"
crontab -l 2>/dev/null | { cat; echo "0 12 * * * /usr/bin/certbot renew --quiet"; } | crontab -

# Step 5: Create Nginx configuration
echo -e "\n${YELLOW}⚙️ Configuring Nginx...${NC}"

# Copy the nginx configuration
cp /home/teddybear/html/public/aikita/nginx.conf /etc/nginx/sites-available/$DOMAIN

# Remove default site if exists
rm -f /etc/nginx/sites-enabled/default

# Enable the site
ln -sf /etc/nginx/sites-available/$DOMAIN /etc/nginx/sites-enabled/

# Add rate limiting to main nginx config if not exists
if ! grep -q "limit_req_zone" /etc/nginx/nginx.conf; then
    echo -e "\n${YELLOW}🛡️ Adding rate limiting configuration...${NC}"
    sed -i '/http {/a\\tlimit_req_zone $binary_remote_addr zone=api:10m rate=1r/s;' /etc/nginx/nginx.conf
fi

# Step 6: Test Nginx configuration
echo -e "\n${YELLOW}🧪 Testing Nginx configuration...${NC}"
nginx -t

if [ $? -eq 0 ]; then
    echo -e "${GREEN}✅ Nginx configuration is valid${NC}"

    # Start Nginx
    echo -e "\n${YELLOW}🚀 Starting Nginx...${NC}"
    systemctl start nginx
    systemctl enable nginx

    echo -e "${GREEN}✅ SSL setup completed successfully!${NC}"
    echo -e "${GREEN}🌐 Your site is now available at: https://${DOMAIN}${NC}"
else
    echo -e "${RED}❌ Nginx configuration test failed${NC}"
    echo -e "${YELLOW}💡 Please check the configuration file${NC}"
    exit 1
fi

# Step 7: Display certificate information
echo -e "\n${BLUE}📋 Certificate Information:${NC}"
certbot certificates

echo -e "\n${GREEN}🎉 Deployment completed successfully!${NC}"
echo -e "${BLUE}📋 Summary:${NC}"
echo -e "   🔒 SSL Certificate: ✅ Installed"
echo -e "   🌐 Domain: https://${DOMAIN}"
echo -e "   🔄 Auto-renewal: ✅ Configured"
echo -e "   🛡️ Security headers: ✅ Enabled"

echo -e "\n${YELLOW}🔧 Useful commands:${NC}"
echo -e "   📊 Check certificate: certbot certificates"
echo -e "   🔄 Renew certificate: certbot renew"
echo -e "   📝 Check Nginx: nginx -t"
echo -e "   🔄 Reload Nginx: systemctl reload nginx"
echo -e "   📊 Check status: systemctl status nginx"