'use client'

import { useAuth } from '@/contexts/AuthContext'
import { Calendar, Clock, TrendingUp } from 'lucide-react'

export default function DashboardWelcome() {
  const { user, profile } = useAuth()

  const currentHour = new Date().getHours()
  const greeting =
    currentHour < 12 ? 'Selamat Pagi' :
    currentHour < 17 ? 'Selamat Siang' :
    currentHour < 21 ? 'Selamat Sore' : 'Selamat Malam'

  const currentDate = new Date().toLocaleDateString('id-ID', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })

  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-cyan-50 to-purple-50 dark:from-slate-800 dark:to-slate-900 rounded-2xl p-8 border border-cyan-100 dark:border-slate-700">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <defs>
            <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
              <path d="M 10 0 L 0 0 0 10" fill="none" stroke="currentColor" strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect width="100" height="100" fill="url(#grid)" className="text-cyan-500"/>
        </svg>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-4 right-4 w-20 h-20 bg-gradient-to-br from-cyan-400/20 to-purple-600/20 rounded-full blur-xl"></div>
      <div className="absolute bottom-4 left-4 w-16 h-16 bg-gradient-to-br from-purple-400/20 to-cyan-600/20 rounded-full blur-xl"></div>

      <div className="relative">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
          {/* Welcome Text */}
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-2">
              <Clock className="w-5 h-5 text-cyan-600 dark:text-cyan-400" />
              <span className="text-sm text-gray-600 dark:text-slate-400">{currentDate}</span>
            </div>

            <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-2">
              {greeting}, {profile?.full_name || user?.email?.split('@')[0] || 'User'}! 👋
            </h1>

            <p className="text-gray-600 dark:text-slate-400 text-lg">
              Selamat datang kembali di dashboard Aikita. Mari eksplorasi tools AI terbaru hari ini.
            </p>
          </div>

          {/* Quick Stats Cards */}
          <div className="flex gap-4">
            <div className="bg-white/60 dark:bg-slate-800/60 backdrop-blur-sm rounded-xl p-4 border border-white/20 dark:border-slate-700/20">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-lg flex items-center justify-center">
                  <TrendingUp className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-gray-900 dark:text-white">24</div>
                  <div className="text-sm text-gray-600 dark:text-slate-400">Tools Dicoba</div>
                </div>
              </div>
            </div>

            <div className="bg-white/60 dark:bg-slate-800/60 backdrop-blur-sm rounded-xl p-4 border border-white/20 dark:border-slate-700/20">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg flex items-center justify-center">
                  <Calendar className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-gray-900 dark:text-white">7</div>
                  <div className="text-sm text-gray-600 dark:text-slate-400">Hari Aktif</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="mt-6 flex flex-wrap gap-3">
          <a
            href="/tools"
            className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-cyan-600 to-purple-600 text-white text-sm font-medium rounded-lg hover:from-cyan-700 hover:to-purple-700 transition-all duration-200 shadow-sm hover:shadow-md"
          >
            Jelajahi Tools
          </a>
          <a
            href="/dashboard/favorites"
            className="inline-flex items-center px-4 py-2 bg-white dark:bg-slate-800 text-gray-700 dark:text-slate-300 text-sm font-medium rounded-lg border border-gray-200 dark:border-slate-700 hover:bg-gray-50 dark:hover:bg-slate-700 transition-all duration-200"
          >
            Lihat Favorit
          </a>
          <a
            href="/categories"
            className="inline-flex items-center px-4 py-2 bg-white dark:bg-slate-800 text-gray-700 dark:text-slate-300 text-sm font-medium rounded-lg border border-gray-200 dark:border-slate-700 hover:bg-gray-50 dark:hover:bg-slate-700 transition-all duration-200"
          >
            Kategori
          </a>
        </div>
      </div>
    </div>
  )
}