#!/bin/bash

# Production build script with ESLint disabled
echo "🚀 Building Aikita for production..."

# Colors for output
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

echo -e "${YELLOW}📦 Installing dependencies...${NC}"
npm install

echo -e "${YELLOW}🔨 Building with ESLint disabled...${NC}"
# Build with ESLint disabled
DISABLE_ESLINT_PLUGIN=true npm run build

if [ $? -eq 0 ]; then
    echo -e "${GREEN}✅ Build successful!${NC}"
    echo -e "${GREEN}🚀 Starting application on port 3322...${NC}"
    PORT=3322 npm run start
else
    echo -e "${RED}❌ Build failed${NC}"
    exit 1
fi