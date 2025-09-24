'use client'

import { useEffect, useState } from 'react'
import { useAuth } from '@/contexts/AuthContext'
import { createClient } from '@/lib/supabase/client'
import { Heart, Search, Eye, Star } from 'lucide-react'

interface Stats {
  favorites: number
  searches: number
  visits: number
  reviews: number
}

export default function DashboardStats() {
  const { user } = useAuth()
  const [stats, setStats] = useState<Stats>({
    favorites: 0,
    searches: 0,
    visits: 0,
    reviews: 0
  })
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (user) {
      fetchStats()
    }
  }, [user])

  const fetchStats = async () => {
    try {
      const supabase = createClient()

      // Get favorites count
      const { count: favoritesCount } = await supabase
        .from('user_tools')
        .select('*', { count: 'exact', head: true })
        .eq('user_id', user?.id)
        .eq('action_type', 'favorite')

      // Get searches count
      const { count: searchesCount } = await supabase
        .from('search_history')
        .select('*', { count: 'exact', head: true })
        .eq('user_id', user?.id)

      // Get visits count
      const { count: visitsCount } = await supabase
        .from('user_tools')
        .select('*', { count: 'exact', head: true })
        .eq('user_id', user?.id)
        .eq('action_type', 'visited')

      // Get reviews count
      const { count: reviewsCount } = await supabase
        .from('tool_reviews')
        .select('*', { count: 'exact', head: true })
        .eq('user_id', user?.id)

      setStats({
        favorites: favoritesCount || 0,
        searches: searchesCount || 0,
        visits: visitsCount || 0,
        reviews: reviewsCount || 0
      })
    } catch (error) {
      console.error('Error fetching stats:', error)
    } finally {
      setLoading(false)
    }
  }

  const statCards = [
    {
      title: 'Tools Favorit',
      value: stats.favorites,
      icon: Heart,
      color: 'text-red-500',
      bgColor: 'bg-red-50 dark:bg-red-900/20',
      iconBg: 'bg-red-100 dark:bg-red-900/40',
      borderColor: 'border-red-200 dark:border-red-800'
    },
    {
      title: 'Pencarian',
      value: stats.searches,
      icon: Search,
      color: 'text-blue-500',
      bgColor: 'bg-blue-50 dark:bg-blue-900/20',
      iconBg: 'bg-blue-100 dark:bg-blue-900/40',
      borderColor: 'border-blue-200 dark:border-blue-800'
    },
    {
      title: 'Tools Dikunjungi',
      value: stats.visits,
      icon: Eye,
      color: 'text-green-500',
      bgColor: 'bg-green-50 dark:bg-green-900/20',
      iconBg: 'bg-green-100 dark:bg-green-900/40',
      borderColor: 'border-green-200 dark:border-green-800'
    },
    {
      title: 'Review Ditulis',
      value: stats.reviews,
      icon: Star,
      color: 'text-yellow-500',
      bgColor: 'bg-yellow-50 dark:bg-yellow-900/20',
      iconBg: 'bg-yellow-100 dark:bg-yellow-900/40',
      borderColor: 'border-yellow-200 dark:border-yellow-800'
    }
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {statCards.map((stat, index) => (
        <div
          key={index}
          className={`${stat.bgColor} ${stat.borderColor} bg-white dark:bg-slate-800 rounded-xl p-6 border transition-all duration-200 hover:shadow-lg dark:hover:shadow-2xl hover:-translate-y-1`}
        >
          <div className="flex items-center justify-between mb-4">
            <div className={`p-3 rounded-lg ${stat.iconBg}`}>
              <stat.icon className={`w-6 h-6 ${stat.color}`} />
            </div>
            <div className="text-right">
              <div className="text-xs text-gray-500 dark:text-slate-400">
                Bulan ini
              </div>
            </div>
          </div>

          <div className="space-y-1">
            <p className="text-2xl font-bold text-gray-900 dark:text-white">
              {loading ? (
                <div className="h-8 w-12 bg-gray-200 dark:bg-slate-700 rounded animate-pulse"></div>
              ) : (
                stat.value.toLocaleString()
              )}
            </p>
            <p className="text-sm text-gray-600 dark:text-slate-400">{stat.title}</p>

            {/* Progress indicator */}
            <div className="flex items-center gap-1 mt-2">
              <div className="text-xs text-green-600 dark:text-green-400">↗ +12%</div>
              <div className="text-xs text-gray-500 dark:text-slate-500">vs last month</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}