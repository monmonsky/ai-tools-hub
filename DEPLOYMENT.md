# 🚀 Aikita Deployment Guide

Complete deployment guide for Aikita.id on your server.

## 📋 Prerequisites

- Server with Ubuntu/Debian
- Node.js 18+ installed
- Nginx installed
- Domain `aikita.id` pointing to your server
- SSH access to the server

## 🚀 Quick Deployment

### 1. Upload Files to Server

```bash
# On your server, navigate to project directory
cd /home/teddybear/html/public/ai-tools-hub

# Make deployment script executable
chmod +x deploy.sh
chmod +x ssl-setup.sh
```

### 2. Deploy Application

```bash
# Run the deployment script
./deploy.sh
```

This script will:
- ✅ Install dependencies
- ✅ Build the application
- ✅ Setup PM2 process manager
- ✅ Start the application in background
- ✅ Configure auto-restart

### 3. Setup SSL Certificate

```bash
# Run as root/sudo
sudo ./ssl-setup.sh
```

This script will:
- ✅ Install Let's Encrypt SSL certificate
- ✅ Configure Nginx with SSL
- ✅ Setup automatic renewal
- ✅ Enable security headers

## 🔧 Manual Steps

### Environment Variables

Update `.env.local` with your production values:

```bash
# Edit environment file
nano .env.local

# Update these values:
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-LVVL872DZ1
NEXT_PUBLIC_SITE_URL=https://aikita.id
```

### PM2 Management

```bash
# Check application status
pm2 status

# View logs
pm2 logs aikita

# Restart application
pm2 restart aikita

# Stop application
pm2 stop aikita

# Monitor in real-time
pm2 monit
```

### Nginx Management

```bash
# Test configuration
sudo nginx -t

# Reload configuration
sudo systemctl reload nginx

# Check status
sudo systemctl status nginx

# View error logs
sudo tail -f /var/log/nginx/aikita.id.error.log

# View access logs
sudo tail -f /var/log/nginx/aikita.id.access.log
```

## 📊 Monitoring & Maintenance

### SSL Certificate

```bash
# Check certificate status
sudo certbot certificates

# Test renewal
sudo certbot renew --dry-run

# Manual renewal if needed
sudo certbot renew
```

### Application Updates

```bash
# Navigate to project directory
cd /home/teddybear/html/public/ai-tools-hub

# Pull latest changes
git pull origin main

# Rebuild and restart
npm run build
pm2 restart aikita
```

### Performance Monitoring

```bash
# PM2 monitoring
pm2 monit

# Server resources
htop

# Disk usage
df -h

# Memory usage
free -h
```

## 🛡️ Security Features

- ✅ **SSL/TLS Encryption** - Let's Encrypt certificate
- ✅ **Security Headers** - HSTS, CSP, X-Frame-Options
- ✅ **Rate Limiting** - API endpoint protection
- ✅ **Gzip Compression** - Optimized file delivery
- ✅ **Static File Caching** - Improved performance

## 📈 Analytics Setup

1. **Google Analytics**: Already configured with your measurement ID
2. **Server Logs**: Available in `/var/log/nginx/`
3. **Application Logs**: Available via `pm2 logs aikita`

## 🆘 Troubleshooting

### Application Not Starting

```bash
# Check PM2 status
pm2 status

# Check application logs
pm2 logs aikita --lines 50

# Restart application
pm2 restart aikita
```

### SSL Issues

```bash
# Check certificate
sudo certbot certificates

# Check Nginx configuration
sudo nginx -t

# Check if ports are open
sudo netstat -tlnp | grep :443
```

### Domain Not Resolving

```bash
# Check DNS
nslookup aikita.id

# Check if Nginx is listening
sudo netstat -tlnp | grep :80
sudo netstat -tlnp | grep :443
```

### High Memory Usage

```bash
# Restart PM2 processes
pm2 restart all

# Check memory usage
free -h
pm2 monit
```

## 📞 Support

- **Application Logs**: `pm2 logs aikita`
- **Nginx Logs**: `/var/log/nginx/aikita.id.error.log`
- **SSL Logs**: `/var/log/letsencrypt/letsencrypt.log`

## 🎉 Success!

Your Aikita platform should now be running at:
- 🌐 **https://aikita.id**
- 📊 **Analytics**: Tracking with Google Analytics
- 🔒 **Security**: SSL enabled with security headers
- 🚀 **Performance**: Optimized with caching and compression

Monitor your deployment and enjoy your AI tools directory platform!