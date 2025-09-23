# 🚀 Install Aikita di Production Server

Panduan lengkap untuk install Aikita.id di server production dengan port 3322.

## 📋 Persiapan Server

### 1. **Koneksi ke Server**
```bash
ssh username@your-server-ip
```

### 2. **Update System**
```bash
sudo apt update && sudo apt upgrade -y
```

### 3. **Install Node.js 18+**
```bash
# Install NodeSource repository
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -

# Install Node.js
sudo apt-get install -y nodejs

# Verify installation
node --version
npm --version
```

### 4. **Install Nginx**
```bash
sudo apt install nginx -y
sudo systemctl enable nginx
sudo systemctl start nginx
```

### 5. **Install Git (jika belum ada)**
```bash
sudo apt install git -y
```

## 📁 Setup Project

### 1. **Masuk ke Directory Project**
```bash
cd /home/teddybear/html/public/ai-tools-hub
```

### 2. **Pastikan Project Sudah di Clone**
```bash
# Jika belum di clone:
# git clone https://github.com/username/ai-tools-directory.git .

# Jika sudah ada, update:
git pull origin main
```

### 3. **Copy Environment File**
```bash
# Pastikan .env.local sudah ada dengan konfigurasi yang benar
ls -la .env.local

# Jika belum ada, copy dari template dan edit:
cp .env.local.example .env.local
nano .env.local
```

### 4. **Set Permissions**
```bash
# Berikan permission untuk script deployment
chmod +x deploy.sh
chmod +x ssl-setup.sh

# Pastikan user punya akses ke directory
sudo chown -R $USER:$USER /home/teddybear/html/public/ai-tools-hub
```

## 🚀 Deploy Aplikasi

### 1. **Jalankan Deployment Script**
```bash
./deploy.sh
```

Script ini akan:
- ✅ Install dependencies dengan `npm install`
- ✅ Build aplikasi dengan `npm run build`
- ✅ Install PM2 globally
- ✅ Buat konfigurasi PM2 dengan port 3322
- ✅ Start aplikasi di background
- ✅ Setup auto-restart

### 2. **Verifikasi Aplikasi Jalan**
```bash
# Cek status PM2
pm2 status

# Cek logs
pm2 logs aikita

# Test aplikasi lokal
curl http://localhost:3322
```

## 🌐 Setup Nginx & Domain

### 1. **Setup SSL Certificate**
```bash
# Jalankan sebagai root
sudo ./ssl-setup.sh
```

Script ini akan:
- ✅ Install Let's Encrypt SSL
- ✅ Konfigurasi Nginx dengan port 3322
- ✅ Setup auto-renewal SSL
- ✅ Enable security headers

### 2. **Manual Nginx Setup (Alternatif)**
```bash
# Copy konfigurasi Nginx
sudo cp nginx.conf /etc/nginx/sites-available/aikita.id

# Enable site
sudo ln -sf /etc/nginx/sites-available/aikita.id /etc/nginx/sites-enabled/

# Remove default site
sudo rm -f /etc/nginx/sites-enabled/default

# Test konfigurasi
sudo nginx -t

# Reload Nginx
sudo systemctl reload nginx
```

## 🔧 Manual Commands

### **Install Dependencies**
```bash
cd /home/teddybear/html/public/ai-tools-hub
npm install
```

### **Build Application**
```bash
npm run build
```

### **Start with PM2**
```bash
# Install PM2 global
sudo npm install -g pm2

# Start aplikasi
pm2 start ecosystem.config.js

# Save PM2 config
pm2 save
pm2 startup
```

### **Test Manual (Development)**
```bash
# Test dengan port 3322
PORT=3322 npm run start
```

## 📊 Monitoring & Management

### **PM2 Commands**
```bash
# Status aplikasi
pm2 status

# Restart aplikasi
pm2 restart aikita

# Stop aplikasi
pm2 stop aikita

# Delete aplikasi
pm2 delete aikita

# View logs
pm2 logs aikita

# Monitor real-time
pm2 monit
```

### **Nginx Commands**
```bash
# Test konfigurasi
sudo nginx -t

# Reload konfigurasi
sudo systemctl reload nginx

# Restart Nginx
sudo systemctl restart nginx

# Status Nginx
sudo systemctl status nginx

# View logs
sudo tail -f /var/log/nginx/aikita.id.access.log
sudo tail -f /var/log/nginx/aikita.id.error.log
```

### **SSL Management**
```bash
# Cek certificate
sudo certbot certificates

# Test renewal
sudo certbot renew --dry-run

# Manual renewal
sudo certbot renew
```

## 🎯 Hasil Akhir

Setelah selesai, aplikasi akan:
- ✅ **Running di**: http://localhost:3322 (internal)
- ✅ **Accessible via**: https://aikita.id (public)
- ✅ **SSL**: Enabled dengan Let's Encrypt
- ✅ **Auto-restart**: PM2 akan restart otomatis jika crash
- ✅ **Background**: Berjalan sebagai daemon

## 🆘 Troubleshooting

### **Port Sudah Digunakan**
```bash
# Cek siapa yang menggunakan port 3322
sudo netstat -tulpn | grep :3322

# Kill process jika perlu
sudo kill -9 PID_NUMBER
```

### **Permission Issues**
```bash
# Fix ownership
sudo chown -R $USER:$USER /home/teddybear/html/public/ai-tools-hub

# Fix permissions
chmod 755 /home/teddybear/html/public/ai-tools-hub
```

### **Build Errors**
```bash
# Clear cache
rm -rf .next
rm -rf node_modules
npm install
npm run build
```

### **Nginx Errors**
```bash
# Check syntax
sudo nginx -t

# Check if port 80/443 available
sudo netstat -tulpn | grep :80
sudo netstat -tulpn | grep :443
```

Aplikasi Aikita siap running di production dengan port 3322! 🎉