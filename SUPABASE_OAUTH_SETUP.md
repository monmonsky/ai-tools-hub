# Setup OAuth Authentication untuk Aikita

Untuk mengaktifkan login Google dan GitHub, Anda perlu mengonfigurasi OAuth providers di Supabase Dashboard.

## 🚀 Langkah-Langkah Setup

### 1. Buka Supabase Dashboard
- Kunjungi: https://supabase.com/dashboard
- Login ke project Anda: `uthgchakkqsterqjjfhr`

### 2. Navigate ke Authentication Settings
- Klik project Aikita
- Pilih "Authentication" di sidebar kiri
- Klik "Providers" tab

### 3. Setup Google OAuth

#### A. Dapatkan Google OAuth Credentials
1. Buka [Google Cloud Console](https://console.cloud.google.com/)
2. Buat project baru atau pilih existing project
3. Enable Google+ API:
   - APIs & Services → Library → Search "Google+ API" → Enable
4. Create OAuth 2.0 Credentials:
   - APIs & Services → Credentials → Create Credentials → OAuth 2.0 Client IDs
   - Application type: Web application
   - Name: "Aikita OAuth"
   - Authorized redirect URIs:
     ```
     https://uthgchakkqsterqjjfhr.supabase.co/auth/v1/callback
     http://localhost:3000/auth/callback (for development)
     http://localhost:3001/auth/callback (for development)
     ```
   - Save dan copy Client ID & Client Secret

#### B. Configure di Supabase
1. Di Supabase Dashboard → Authentication → Providers
2. Find "Google" dan klik "Configure"
3. Toggle "Enable" ke ON
4. Paste:
   - **Client ID**: dari Google Console
   - **Client Secret**: dari Google Console
5. Save

### 4. Setup GitHub OAuth

#### A. Dapatkan GitHub OAuth Credentials
1. Buka [GitHub Settings](https://github.com/settings/applications/new)
2. Register new OAuth App:
   - Application name: "Aikita"
   - Homepage URL: `https://aikita.id`
   - Application description: "AI Tools Directory Indonesia"
   - Authorization callback URL: `https://uthgchakkqsterqjjfhr.supabase.co/auth/v1/callback`
3. Create application
4. Copy Client ID dan generate Client Secret

#### B. Configure di Supabase
1. Di Supabase Dashboard → Authentication → Providers
2. Find "GitHub" dan klik "Configure"
3. Toggle "Enable" ke ON
4. Paste:
   - **Client ID**: dari GitHub OAuth App
   - **Client Secret**: dari GitHub OAuth App
5. Save

### 5. Update Site URL (Penting!)
1. Di Supabase Dashboard → Authentication → URL Configuration
2. Set Site URL: `http://localhost:3000` (development) atau `https://aikita.id` (production)
3. Add Redirect URLs:
   ```
   http://localhost:3000/**
   http://localhost:3001/**
   https://aikita.id/**
   ```

### 6. Test Authentication
1. Restart aplikasi Next.js
2. Kunjungi `/auth/signin`
3. Click tombol "Lanjutkan dengan Google" atau "Lanjutkan dengan GitHub"
4. Pastikan redirect berjalan dengan baik

## 🔧 Troubleshooting

### Error: "provider is not enabled"
- Pastikan OAuth provider sudah di-enable di Supabase Dashboard
- Check Client ID dan Client Secret sudah benar

### Error: "redirect_uri mismatch"
- Pastikan redirect URI di Google/GitHub sama dengan yang di Supabase
- Format: `https://[project-id].supabase.co/auth/v1/callback`

### Error: "Invalid redirect URL"
- Check Site URL dan Redirect URLs di Supabase Auth settings
- Pastikan domain development dan production sudah ditambahkan

## 📝 Environment Variables

Tidak perlu menambahkan environment variables tambahan. Supabase akan handle OAuth flow secara otomatis setelah dikonfigurasi di dashboard.

Current Supabase Config:
```bash
NEXT_PUBLIC_SUPABASE_URL='https://uthgchakkqsterqjjfhr.supabase.co'
NEXT_PUBLIC_SUPABASE_ANON_KEY='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...'
```

## ✅ Next Steps

Setelah OAuth dikonfigurasi:
1. ✅ User bisa login/signup dengan Google & GitHub
2. ✅ Profile otomatis dibuat di database
3. ✅ Session management sudah terintegrasi
4. ✅ Dashboard dan fitur user-specific sudah siap digunakan