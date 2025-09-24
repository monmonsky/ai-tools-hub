'use client'

import { useState, useEffect } from 'react'
import { useAuth } from '@/contexts/AuthContext'
import { useFavorites } from '@/contexts/FavoritesContext'
import { useSearchHistory } from '@/contexts/SearchHistoryContext'
import { useBookmarks } from '@/contexts/BookmarksContext'
import {
  BarChart3,
  TrendingUp,
  TrendingDown,
  Calendar,
  Clock,
  Heart,
  Search,
  Bookmark,
  Eye,
  Activity,
  Target,
  Award,
  Zap
} from 'lucide-react'

interface ActivityData {
  date: string
  favorites: number
  searches: number
  bookmarks: number
  visits: number
}

interface CategoryStats {
  category: string
  count: number
  percentage: number
  color: string
}

export default function AnalyticsContent() {
  const { user } = useAuth()
  const { favorites } = useFavorites()
  const { searchHistory } = useSearchHistory()
  const { bookmarks } = useBookmarks()

  const [timeRange, setTimeRange] = useState<'7d' | '30d' | '90d' | '1y'>('30d')
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => setLoading(false), 1000)
    return () => clearTimeout(timer)
  }, [])

  // Mock activity data for charts
  const generateActivityData = (): ActivityData[] => {
    const data: ActivityData[] = []
    const days = timeRange === '7d' ? 7 : timeRange === '30d' ? 30 : timeRange === '90d' ? 90 : 365

    for (let i = days - 1; i >= 0; i--) {
      const date = new Date()
      date.setDate(date.getDate() - i)

      data.push({
        date: date.toISOString().split('T')[0],
        favorites: Math.floor(Math.random() * 5),
        searches: Math.floor(Math.random() * 10) + 2,
        bookmarks: Math.floor(Math.random() * 3),
        visits: Math.floor(Math.random() * 15) + 5
      })
    }

    return data
  }

  const activityData = generateActivityData()

  // Calculate category stats
  const categoryStats: CategoryStats[] = [
    { category: 'AI Writing', count: 15, percentage: 35, color: '#3b82f6' },
    { category: 'Image Generation', count: 12, percentage: 28, color: '#8b5cf6' },
    { category: 'Productivity', count: 8, percentage: 19, color: '#10b981' },
    { category: 'Chatbot', count: 5, percentage: 12, color: '#f59e0b' },
    { category: 'Code Generation', count: 3, percentage: 6, color: '#ef4444' }
  ]

  // Calculate totals
  const totalFavorites = favorites.length
  const totalSearches = searchHistory.length
  const totalBookmarks = bookmarks.length
  const totalVisits = activityData.reduce((sum, day) => sum + day.visits, 0)

  // Calculate trends (mock data)
  const trends = {
    favorites: { value: 23, isPositive: true },
    searches: { value: 15, isPositive: true },
    bookmarks: { value: -8, isPositive: false },
    visits: { value: 31, isPositive: true }
  }

  if (loading) {
    return (
      <div className="space-y-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Statistik & Analytics</h1>
          <p className="text-gray-600 dark:text-slate-400 mt-2">Memuat data analytics...</p>
        </div>
        <div className="animate-pulse space-y-6">
          {[1, 2, 3, 4].map(i => (
            <div key={i} className="h-32 bg-gray-200 dark:bg-slate-700 rounded-xl"></div>
          ))}
        </div>
      </div>
    )
  }

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
            Statistik & Analytics
          </h1>
          <p className="text-gray-600 dark:text-slate-400 mt-2">
            Pantau aktivitas dan progres penggunaan AI tools Anda
          </p>
        </div>

        <div className="flex items-center gap-2">
          <select
            value={timeRange}
            onChange={(e) => setTimeRange(e.target.value as any)}
            className="px-4 py-2 bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-600 rounded-lg text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
          >
            <option value="7d">7 Hari Terakhir</option>
            <option value="30d">30 Hari Terakhir</option>
            <option value="90d">90 Hari Terakhir</option>
            <option value="1y">1 Tahun Terakhir</option>
          </select>
        </div>
      </div>

      {/* Overview Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          {
            title: 'Total Favorit',
            value: totalFavorites,
            icon: Heart,
            color: 'text-red-500',
            bgColor: 'bg-red-50 dark:bg-red-900/20',
            iconBg: 'bg-red-100 dark:bg-red-900/40',
            trend: trends.favorites
          },
          {
            title: 'Total Pencarian',
            value: totalSearches,
            icon: Search,
            color: 'text-blue-500',
            bgColor: 'bg-blue-50 dark:bg-blue-900/20',
            iconBg: 'bg-blue-100 dark:bg-blue-900/40',
            trend: trends.searches
          },
          {
            title: 'Total Bookmark',
            value: totalBookmarks,
            icon: Bookmark,
            color: 'text-purple-500',
            bgColor: 'bg-purple-50 dark:bg-purple-900/20',
            iconBg: 'bg-purple-100 dark:bg-purple-900/40',
            trend: trends.bookmarks
          },
          {
            title: 'Total Kunjungan',
            value: totalVisits,
            icon: Eye,
            color: 'text-green-500',
            bgColor: 'bg-green-50 dark:bg-green-900/20',
            iconBg: 'bg-green-100 dark:bg-green-900/40',
            trend: trends.visits
          }
        ].map((stat, index) => (
          <div
            key={index}
            className={`${stat.bgColor} bg-white dark:bg-slate-800 rounded-xl p-6 border border-gray-200 dark:border-slate-700 transition-all duration-200 hover:shadow-lg dark:hover:shadow-2xl`}
          >
            <div className="flex items-center justify-between mb-4">
              <div className={`p-3 rounded-lg ${stat.iconBg}`}>
                <stat.icon className={`w-6 h-6 ${stat.color}`} />
              </div>
              <div className="flex items-center gap-1">
                {stat.trend.isPositive ? (
                  <TrendingUp className="w-4 h-4 text-green-500" />
                ) : (
                  <TrendingDown className="w-4 h-4 text-red-500" />
                )}
                <span
                  className={`text-sm font-medium ${
                    stat.trend.isPositive ? 'text-green-500' : 'text-red-500'
                  }`}
                >
                  {stat.trend.value}%
                </span>
              </div>
            </div>

            <div className="space-y-1">
              <p className="text-2xl font-bold text-gray-900 dark:text-white">
                {stat.value.toLocaleString()}
              </p>
              <p className="text-sm text-gray-600 dark:text-slate-400">{stat.title}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Activity Chart (Mock) */}
      <div className="bg-white dark:bg-slate-800 rounded-xl border border-gray-200 dark:border-slate-700 p-6">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">
          Aktivitas Harian
        </h3>

        <div className="space-y-4">
          {/* Chart Legend */}
          <div className="flex flex-wrap gap-6 text-sm">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              <span className="text-gray-600 dark:text-slate-400">Favorit</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
              <span className="text-gray-600 dark:text-slate-400">Pencarian</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
              <span className="text-gray-600 dark:text-slate-400">Bookmark</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              <span className="text-gray-600 dark:text-slate-400">Kunjungan</span>
            </div>
          </div>

          {/* Simple Bar Chart */}
          <div className="h-64 flex items-end gap-1 overflow-x-auto">
            {activityData.slice(-14).map((day, index) => {
              const maxValue = Math.max(
                ...activityData.map(d => d.favorites + d.searches + d.bookmarks + d.visits)
              )
              const totalHeight = (day.favorites + day.searches + day.bookmarks + day.visits) / maxValue * 200

              return (
                <div key={index} className="flex flex-col items-center gap-2 min-w-[40px]">
                  <div className="flex flex-col-reverse gap-0.5" style={{ height: '200px' }}>
                    <div
                      className="bg-red-500 rounded-t-sm"
                      style={{ height: `${(day.favorites / maxValue) * 200}px` }}
                    />
                    <div
                      className="bg-blue-500"
                      style={{ height: `${(day.searches / maxValue) * 200}px` }}
                    />
                    <div
                      className="bg-purple-500"
                      style={{ height: `${(day.bookmarks / maxValue) * 200}px` }}
                    />
                    <div
                      className="bg-green-500 rounded-b-sm"
                      style={{ height: `${(day.visits / maxValue) * 200}px` }}
                    />
                  </div>
                  <div className="text-xs text-gray-500 dark:text-slate-500 rotate-45 origin-left whitespace-nowrap">
                    {new Date(day.date).toLocaleDateString('id-ID', { month: 'short', day: 'numeric' })}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>

      {/* Categories & Achievements */}
      <div className="grid lg:grid-cols-2 gap-8">
        {/* Category Distribution */}
        <div className="bg-white dark:bg-slate-800 rounded-xl border border-gray-200 dark:border-slate-700 p-6">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">
            Kategori Favorit
          </h3>

          <div className="space-y-4">
            {categoryStats.map((category, index) => (
              <div key={index} className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-700 dark:text-slate-300">{category.category}</span>
                  <span className="text-gray-500 dark:text-slate-500">
                    {category.count} ({category.percentage}%)
                  </span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-slate-700 rounded-full h-2">
                  <div
                    className="h-2 rounded-full transition-all duration-300"
                    style={{
                      width: `${category.percentage}%`,
                      backgroundColor: category.color
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Achievements */}
        <div className="bg-white dark:bg-slate-800 rounded-xl border border-gray-200 dark:border-slate-700 p-6">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">
            Pencapaian
          </h3>

          <div className="space-y-4">
            {[
              {
                title: 'Explorer',
                description: 'Menjelajahi 50+ AI tools',
                icon: Target,
                progress: 100,
                color: 'text-green-500',
                bgColor: 'bg-green-100 dark:bg-green-900/40'
              },
              {
                title: 'Collector',
                description: 'Mengumpulkan 25+ favorit',
                icon: Award,
                progress: 80,
                color: 'text-blue-500',
                bgColor: 'bg-blue-100 dark:bg-blue-900/40'
              },
              {
                title: 'Active User',
                description: 'Aktif selama 30 hari berturut-turut',
                icon: Activity,
                progress: 60,
                color: 'text-purple-500',
                bgColor: 'bg-purple-100 dark:bg-purple-900/40'
              },
              {
                title: 'Power User',
                description: 'Melakukan 100+ pencarian',
                icon: Zap,
                progress: 40,
                color: 'text-yellow-500',
                bgColor: 'bg-yellow-100 dark:bg-yellow-900/40'
              }
            ].map((achievement, index) => (
              <div key={index} className="flex items-center gap-4 p-4 bg-gray-50 dark:bg-slate-700/50 rounded-lg">
                <div className={`p-3 rounded-lg ${achievement.bgColor}`}>
                  <achievement.icon className={`w-6 h-6 ${achievement.color}`} />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-medium text-gray-900 dark:text-white">
                      {achievement.title}
                    </h4>
                    <span className="text-sm text-gray-500 dark:text-slate-500">
                      {achievement.progress}%
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-slate-400 mb-2">
                    {achievement.description}
                  </p>
                  <div className="w-full bg-gray-200 dark:bg-slate-600 rounded-full h-2">
                    <div
                      className="bg-gradient-to-r from-cyan-500 to-purple-600 h-2 rounded-full transition-all duration-300"
                      style={{ width: `${achievement.progress}%` }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="bg-gradient-to-r from-cyan-50 to-purple-50 dark:from-cyan-900/20 dark:to-purple-900/20 rounded-xl border border-cyan-200 dark:border-cyan-800 p-6">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
          Ringkasan Aktivitas Bulan Ini
        </h3>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { label: 'Hari Aktif', value: '23 hari', icon: Calendar },
            { label: 'Rata-rata Sesi', value: '12 menit', icon: Clock },
            { label: 'Tools Terfavorit', value: 'ChatGPT', icon: Heart },
            { label: 'Kategori Populer', value: 'AI Writing', icon: TrendingUp }
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="w-12 h-12 bg-white dark:bg-slate-800 rounded-xl flex items-center justify-center mx-auto mb-3">
                <stat.icon className="w-6 h-6 text-cyan-600 dark:text-cyan-400" />
              </div>
              <div className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
                {stat.value}
              </div>
              <div className="text-sm text-gray-600 dark:text-slate-400">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}