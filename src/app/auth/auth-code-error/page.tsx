import { Metadata } from 'next'
import Link from 'next/link'
import Navigation from '@/components/navigation'

export const metadata: Metadata = {
  title: 'Authentication Error - Aikita',
  description: 'Terjadi kesalahan saat proses autentikasi.',
}

export default function AuthCodeErrorPage() {
  return (
    <div className="min-h-screen bg-slate-900">
      <Navigation />

      {/* Hero Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-32 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-32 w-96 h-96 bg-cyan-600/20 rounded-full blur-3xl"></div>
      </div>

      <div className="relative pt-24 pb-16 px-4">
        <div className="max-w-md mx-auto text-center">
          {/* Error Icon */}
          <div className="inline-flex items-center justify-center w-16 h-16 bg-red-500/10 rounded-2xl mb-6">
            <svg className="w-8 h-8 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.732-.833-2.464 0L4.35 16.5c-.77.833.192 2.5 1.732 2.5z" />
            </svg>
          </div>

          <h1 className="text-3xl font-bold text-white mb-4">
            Authentication Error
          </h1>
          <p className="text-slate-400 mb-8">
            Terjadi kesalahan saat proses login. Ini mungkin karena:
          </p>

          <div className="bg-slate-800/50 backdrop-blur-xl rounded-xl border border-slate-700/50 p-6 mb-8">
            <ul className="text-left text-slate-300 space-y-2 text-sm">
              <li>• OAuth provider belum dikonfigurasi dengan benar</li>
              <li>• Redirect URL tidak sesuai dengan konfigurasi</li>
              <li>• Session timeout atau invalid code</li>
            </ul>
          </div>

          <div className="space-y-4">
            <Link
              href="/auth/signin"
              className="inline-block px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white rounded-lg font-medium transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              Coba Lagi
            </Link>

            <div>
              <Link
                href="/"
                className="text-slate-400 hover:text-white transition-colors"
              >
                Kembali ke Beranda
              </Link>
            </div>
          </div>

          <div className="mt-8 p-4 bg-amber-500/10 border border-amber-500/20 rounded-lg">
            <p className="text-amber-300 text-sm">
              <strong>Development Mode:</strong> Pastikan OAuth providers sudah dikonfigurasi di Supabase Dashboard dan redirect URLs sudah benar.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}