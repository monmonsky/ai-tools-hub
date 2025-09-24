import { Metadata } from 'next'
import Link from 'next/link'
import Navigation from '@/components/navigation'

export const metadata: Metadata = {
  title: 'Test Auth - Aikita',
  description: 'Test authentication status without OAuth.',
}

export default function TestAuthPage() {
  return (
    <div className="min-h-screen bg-slate-900">
      <Navigation />

      <div className="relative pt-24 pb-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-slate-800/50 backdrop-blur-xl rounded-xl border border-slate-700/50 p-8">
            <h1 className="text-3xl font-bold text-white mb-6">
              Authentication Setup Status
            </h1>

            <div className="space-y-6">
              <div className="p-4 bg-amber-500/10 border border-amber-500/20 rounded-lg">
                <h3 className="text-amber-300 font-semibold mb-2">
                  🚧 OAuth Setup Required
                </h3>
                <p className="text-amber-200 text-sm">
                  Untuk menggunakan fitur login, silakan setup OAuth providers di Supabase Dashboard terlebih dahulu.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-white font-semibold">Setup Steps:</h3>

                <div className="space-y-3 text-slate-300">
                  <div className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-6 h-6 bg-cyan-500 text-white rounded-full text-xs flex items-center justify-center font-semibold">1</span>
                    <p>Buka <a href="https://supabase.com/dashboard" target="_blank" className="text-cyan-400 hover:text-cyan-300">Supabase Dashboard</a></p>
                  </div>

                  <div className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-6 h-6 bg-cyan-500 text-white rounded-full text-xs flex items-center justify-center font-semibold">2</span>
                    <p>Pilih project: <code className="bg-slate-700 px-2 py-1 rounded text-xs">uthgchakkqsterqjjfhr</code></p>
                  </div>

                  <div className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-6 h-6 bg-cyan-500 text-white rounded-full text-xs flex items-center justify-center font-semibold">3</span>
                    <p>Navigate: Authentication → Providers</p>
                  </div>

                  <div className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-6 h-6 bg-cyan-500 text-white rounded-full text-xs flex items-center justify-center font-semibold">4</span>
                    <div>
                      <p>Enable Google OAuth:</p>
                      <ul className="text-sm text-slate-400 mt-1 ml-4 space-y-1">
                        <li>• Get credentials from <a href="https://console.cloud.google.com" target="_blank" className="text-cyan-400">Google Cloud Console</a></li>
                        <li>• Authorized redirect URI: <code className="bg-slate-700 px-1 rounded">https://uthgchakkqsterqjjfhr.supabase.co/auth/v1/callback</code></li>
                        <li>• JavaScript origins: <code className="bg-slate-700 px-1 rounded">http://localhost:3001</code>, <code className="bg-slate-700 px-1 rounded">https://aikita.id</code></li>
                      </ul>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-6 h-6 bg-cyan-500 text-white rounded-full text-xs flex items-center justify-center font-semibold">5</span>
                    <div>
                      <p>Enable GitHub OAuth:</p>
                      <ul className="text-sm text-slate-400 mt-1 ml-4 space-y-1">
                        <li>• Create OAuth App di <a href="https://github.com/settings/developers" target="_blank" className="text-cyan-400">GitHub Developer Settings</a></li>
                        <li>• Callback URL: <code className="bg-slate-700 px-1 rounded">https://uthgchakkqsterqjjfhr.supabase.co/auth/v1/callback</code></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-slate-600">
                <div className="flex gap-4">
                  <Link
                    href="/auth/signin"
                    className="px-4 py-2 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-lg font-medium transition-all hover:from-cyan-600 hover:to-purple-700"
                  >
                    Test Login
                  </Link>

                  <Link
                    href="/"
                    className="px-4 py-2 bg-slate-700 text-white rounded-lg font-medium transition-all hover:bg-slate-600"
                  >
                    Back to Home
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}