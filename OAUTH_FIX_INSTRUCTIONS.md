# Fix OAuth Redirect Issues - Step by Step

## Problem
OAuth masih redirect ke `localhost:3322` di production dan mengalami "Flow state not found" error.

## Root Cause
1. Supabase Site URL configuration belum include production domain
2. Google/GitHub OAuth apps masih punya redirect URIs yang salah
3. Environment variables tidak konsisten

## Solution Steps

### 1. Update Supabase Authentication Settings

Buka **Supabase Dashboard** → Project: `uthgchakkqsterqjjfhr` → **Authentication** → **URL Configuration**:

**Site URL:**
```
https://aikita.id
```

**Additional Redirect URLs:**
```
https://aikita.id/auth/callback
http://localhost:3001/auth/callback
```

### 2. Update Google OAuth Configuration

Buka **Google Cloud Console** → **APIs & Services** → **Credentials** → OAuth 2.0 Client:

**Authorized JavaScript origins:**
```
https://aikita.id
http://localhost:3001
https://uthgchakkqsterqjjfhr.supabase.co
```

**Authorized redirect URIs:**
```
https://uthgchakkqsterqjjfhr.supabase.co/auth/v1/callback
```

### 3. Update GitHub OAuth Configuration

Buka **GitHub** → **Settings** → **Developer settings** → **OAuth Apps**:

**Homepage URL:**
```
https://aikita.id
```

**Authorization callback URL:**
```
https://uthgchakkqsterqjjfhr.supabase.co/auth/v1/callback
```

### 4. Production Server Configuration

Pastikan Next.js app running di port 3322:

```bash
# SSH ke production server
ssh user@your-server

# Navigate to project directory
cd /path/to/aikita/project

# Ensure production environment file exists
cat > .env.production << 'EOF'
NODE_ENV=production
NEXT_PUBLIC_SITE_URL=https://aikita.id
NEXT_PUBLIC_SUPABASE_URL=https://uthgchakkqsterqjjfhr.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InV0aGdjaGFra3FzdGVycWpqZmhyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTg2OTEwNTMsImV4cCI6MjA3NDI2NzA1M30.hC_u6hDse_sn5NiWsMzChUlS08LvGvCsNHPn3v2YBQA
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-LVVL872DZ1
NEXT_PUBLIC_AFFILIATE_TRACKING=true
NEXT_PUBLIC_GA_DEBUG=false
NEXT_PUBLIC_DEBUG_ANALYTICS=false
EOF

# Build and start
npm run build
PORT=3322 NODE_ENV=production npm start

# Or use PM2 for production
npm install -g pm2
PORT=3322 NODE_ENV=production pm2 start npm --name "aikita" -- start
pm2 save
pm2 startup
```

### 5. Testing Steps

1. **Clear browser cache** and cookies for both `localhost` and `aikita.id`
2. **Test locally first:** `http://localhost:3001/oauth-debug`
3. **Test production:** `https://aikita.id/oauth-debug`
4. **Check console logs** for "OAuth Redirect URL" output
5. **Test OAuth login** pada production

### 6. Debug URLs

- **Local debug:** http://localhost:3001/oauth-debug
- **Production debug:** https://aikita.id/oauth-debug
- **Supabase URL config:** https://supabase.com/dashboard/project/uthgchakkqsterqjjfhr/auth/url-configuration

## Expected Results

After fixing:
- ✅ OAuth redirect akan ke `https://aikita.id/auth/callback` (bukan localhost)
- ✅ No more "Flow state not found" errors
- ✅ Successful authentication dengan redirect ke dashboard
- ✅ UserMenu menampilkan user profile (bukan "Masuk / Daftar")

## Most Critical Fix

**Supabase Site URL** HARUS diubah dari `localhost:3322` ke `https://aikita.id` di dashboard!