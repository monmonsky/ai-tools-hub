# 🔧 Setup Google Search Console & MXrouting Email

Panduan lengkap untuk setup Google Search Console verification dan email service MXrouting.

## 📋 Prerequisites

- Domain aikita.id sudah terdaftar
- Account Google Search Console
- Account MXrouting dengan email hosting
- Access ke DNS domain

## 🔍 Google Search Console Setup

### 1. **Daftar ke Google Search Console**
1. Go to [Google Search Console](https://search.google.com/search-console)
2. Click "Add property"
3. Choose "URL prefix"
4. Enter: `https://aikita.id`

### 2. **Get Verification Code**
1. Choose verification method: **HTML tag**
2. Copy verification code (contoh: `abc123def456...`)
3. Update `.env.local`:

```bash
# Update file .env.local
NEXT_PUBLIC_GOOGLE_VERIFICATION=abc123def456ghi789jkl012
```

### 3. **Verify & Deploy**
```bash
# Build & deploy
npm run build
npm run start

# Atau deploy ke server
./deploy.sh
```

### 4. **Complete Verification**
1. Go back to Google Search Console
2. Click "Verify"
3. Should show ✅ "Ownership verified"

## 📧 MXrouting Email Setup

### 1. **Get MXrouting SMTP Details**
Login ke MXrouting cPanel dan dapatkan:
- **SMTP Server**: (contoh: `server123.mxrouting.net`)
- **Port**: `587` (recommended) atau `465`
- **Email**: `admin@aikita.id`
- **Password**: password email Anda

### 2. **Update Environment Variables**
```bash
# Update .env.local dengan detail MXrouting Anda
SMTP_HOST=server123.mxrouting.net
SMTP_PORT=587
SMTP_USER=admin@aikita.id
SMTP_PASS=your-strong-password
SMTP_FROM=admin@aikita.id
SMTP_FROM_NAME=Aikita Team
```

### 3. **Install Dependencies**
```bash
# Install nodemailer untuk email
npm install nodemailer
npm install --save-dev @types/nodemailer
```

### 4. **Test Email Configuration**
```bash
# Test di development
npm run dev

# Test API endpoint
curl -X POST http://localhost:3000/api/contact \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Test User",
    "email": "test@example.com",
    "message": "Test message"
  }'
```

## 🧪 Testing & Verification

### **Google Search Console Test**
1. View page source di browser
2. Cari meta tag:
```html
<meta name="google-site-verification" content="your-code" />
```

### **Email Service Test**
1. Check server logs untuk SMTP connection
2. Send test email via API
3. Check email delivery di inbox

### **Production Testing**
```bash
# Deploy ke server
cd /home/teddybear/html/public/aikita
git pull origin main
npm install
npm run build
pm2 restart aikita
```

## 📊 Monitoring & Analytics

### **Google Search Console Features**
- **Performance**: Track search impressions & clicks
- **Coverage**: Monitor indexed pages
- **Sitemaps**: Submit sitemap.xml
- **Core Web Vitals**: Monitor page performance

### **Email Analytics**
- Monitor email delivery rates
- Track newsletter subscriptions
- Check bounce rates

## 🔧 API Endpoints Created

### **1. Contact Form**
```javascript
POST /api/contact
{
  "name": "John Doe",
  "email": "john@example.com",
  "message": "Hello Aikita team!"
}
```

### **2. Newsletter Subscription**
```javascript
POST /api/newsletter
{
  "email": "subscriber@example.com"
}
```

## 🛡️ Security Best Practices

### **Environment Variables**
- ✅ Never commit .env.local to git
- ✅ Use strong email passwords
- ✅ Enable 2FA di MXrouting
- ✅ Regular password rotation

### **Email Security**
- ✅ Use STARTTLS (port 587)
- ✅ Validate email formats
- ✅ Rate limiting untuk forms
- ✅ SPAM protection

## 🆘 Troubleshooting

### **Google Verification Failed**
```bash
# Check if meta tag exists
curl -s https://aikita.id | grep "google-site-verification"

# Check Next.js environment
echo $NEXT_PUBLIC_GOOGLE_VERIFICATION
```

### **Email Not Sending**
```bash
# Check SMTP connection
telnet your-server.mxrouting.net 587

# Check MXrouting logs
# Login ke cPanel > Email > Mail Logs
```

### **Common MXrouting Settings**
```bash
# Alternative ports to try
SMTP_PORT=587  # STARTTLS (recommended)
SMTP_PORT=465  # SSL/TLS
SMTP_PORT=25   # Plain (not recommended)

# Authentication methods
AUTH_METHOD=PLAIN
AUTH_METHOD=LOGIN
```

## ✅ Success Checklist

- [ ] Google Search Console property added
- [ ] Verification meta tag di website
- [ ] Domain ownership verified
- [ ] MXrouting SMTP credentials configured
- [ ] Email API endpoints working
- [ ] Test emails delivered successfully
- [ ] Production deployment completed

Setelah setup lengkap, Aikita siap dengan SEO tracking dan email notifications! 🎉