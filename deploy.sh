#!/bin/bash

# Aikita Deployment Script
# Usage: ./deploy.sh

echo "🚀 Starting Aikita deployment..."

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Configuration
PROJECT_PATH="/home/teddybear/html/public/ai-tools-hub"
DOMAIN="aikita.id"
PM2_APP_NAME="aikita"

echo -e "${BLUE}📁 Project Path: ${PROJECT_PATH}${NC}"
echo -e "${BLUE}🌐 Domain: ${DOMAIN}${NC}"

# Step 1: Navigate to project directory
echo -e "\n${YELLOW}📂 Navigating to project directory...${NC}"
cd $PROJECT_PATH || {
    echo -e "${RED}❌ Error: Project directory not found at $PROJECT_PATH${NC}"
    exit 1
}

# Step 2: Install dependencies
echo -e "\n${YELLOW}📦 Installing dependencies...${NC}"
npm install || {
    echo -e "${RED}❌ Error: Failed to install dependencies${NC}"
    exit 1
}

# Step 3: Build the application
echo -e "\n${YELLOW}🔨 Building the application...${NC}"
npm run build || {
    echo -e "${RED}❌ Error: Build failed${NC}"
    exit 1
}

# Step 4: Copy environment variables
echo -e "\n${YELLOW}⚙️ Setting up environment variables...${NC}"
if [ ! -f .env.local ]; then
    echo -e "${YELLOW}📝 Creating .env.local from template...${NC}"
    cp .env.local.example .env.local 2>/dev/null || echo "# Environment variables" > .env.local
    echo -e "${YELLOW}⚠️ Please update .env.local with your actual values${NC}"
fi

# Step 5: Install PM2 globally if not exists
echo -e "\n${YELLOW}🔄 Checking PM2 installation...${NC}"
if ! command -v pm2 &> /dev/null; then
    echo -e "${YELLOW}📦 Installing PM2...${NC}"
    npm install -g pm2
fi

# Step 6: Create PM2 ecosystem file
echo -e "\n${YELLOW}📝 Creating PM2 configuration...${NC}"
cat > ecosystem.config.js << 'EOF'
module.exports = {
  apps: [
    {
      name: 'aikita',
      script: 'npm',
      args: 'start',
      cwd: '/home/teddybear/html/public/ai-tools-hub',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production',
        PORT: 3000
      },
      error_file: './logs/err.log',
      out_file: './logs/out.log',
      log_file: './logs/combined.log',
      time: true
    }
  ]
};
EOF

# Step 7: Create logs directory
mkdir -p logs

# Step 8: Start application with PM2
echo -e "\n${YELLOW}🚀 Starting application with PM2...${NC}"
pm2 delete $PM2_APP_NAME 2>/dev/null || true
pm2 start ecosystem.config.js

# Step 9: Save PM2 configuration
echo -e "\n${YELLOW}💾 Saving PM2 configuration...${NC}"
pm2 save
pm2 startup

echo -e "\n${GREEN}✅ Deployment completed successfully!${NC}"
echo -e "${GREEN}🌐 Application is running on http://localhost:3000${NC}"
echo -e "${GREEN}📊 Check status: pm2 status${NC}"
echo -e "${GREEN}📝 Check logs: pm2 logs aikita${NC}"
echo -e "${GREEN}🔄 Restart app: pm2 restart aikita${NC}"

echo -e "\n${BLUE}📋 Next steps:${NC}"
echo -e "1. Configure Nginx (see nginx.conf)"
echo -e "2. Setup SSL certificate"
echo -e "3. Update DNS records for ${DOMAIN}"
echo -e "4. Update .env.local with production values"