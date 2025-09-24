import { Metadata } from 'next'
import SignInForm from '@/components/auth/SignInForm'
import Link from 'next/link'
import Navigation from '@/components/navigation'

export const metadata: Metadata = {
  title: 'Masuk - Aikita',
  description: 'Masuk ke akun Aikita Anda untuk mengakses fitur lengkap platform AI tools terbaik Indonesia.',
}

export default function SignInPage() {
  return (
    <div className="min-h-screen bg-slate-900">
      <Navigation />

      {/* Hero Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-32 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-32 w-96 h-96 bg-cyan-600/20 rounded-full blur-3xl"></div>
      </div>

      <div className="relative pt-24 pb-16 px-4">
        <div className="max-w-md mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-2xl mb-6">
              <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
              </svg>
            </div>

            <h1 className="text-4xl font-bold text-white mb-3">
              Selamat Datang di Aikita
            </h1>
            <p className="text-xl text-slate-400 mb-2">
              Masuk atau daftar untuk memulai
            </p>
            <p className="text-slate-500">
              Platform terlengkap untuk AI tools Indonesia
            </p>
          </div>

          {/* Auth Card */}
          <div className="bg-slate-800/50 backdrop-blur-xl rounded-2xl border border-slate-700/50 shadow-2xl p-8 relative">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-purple-600/5 rounded-2xl"></div>
            <div className="relative">
              <SignInForm />
            </div>
          </div>

          {/* Benefits */}
          <div className="mt-8">
            <h3 className="text-center text-lg font-semibold text-white mb-4">
              Mengapa bergabung dengan Aikita?
            </h3>
            <div className="grid gap-3">
              <div className="flex items-center gap-3 p-3 bg-slate-800/30 rounded-lg">
                <div className="w-8 h-8 bg-cyan-500/10 rounded-lg flex items-center justify-center">
                  <svg className="w-4 h-4 text-cyan-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-slate-300 text-sm">Dashboard personal untuk tracking aktivitas</span>
              </div>
              <div className="flex items-center gap-3 p-3 bg-slate-800/30 rounded-lg">
                <div className="w-8 h-8 bg-purple-500/10 rounded-lg flex items-center justify-center">
                  <svg className="w-4 h-4 text-purple-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-slate-300 text-sm">Simpan dan kelola AI tools favorit</span>
              </div>
              <div className="flex items-center gap-3 p-3 bg-slate-800/30 rounded-lg">
                <div className="w-8 h-8 bg-cyan-500/10 rounded-lg flex items-center justify-center">
                  <svg className="w-4 h-4 text-cyan-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-slate-300 text-sm">Rekomendasi AI tools yang dipersonalisasi</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}