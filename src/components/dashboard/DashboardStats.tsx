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
      color: 'text-red-400',
      bgColor: 'bg-red-500/10',
      borderColor: 'border-red-500/20'
    },
    {
      title: 'Pencarian',
      value: stats.searches,
      icon: Search,
      color: 'text-blue-400',
      bgColor: 'bg-blue-500/10',
      borderColor: 'border-blue-500/20'
    },
    {
      title: 'Tools Dikunjungi',
      value: stats.visits,
      icon: Eye,
      color: 'text-green-400',
      bgColor: 'bg-green-500/10',
      borderColor: 'border-green-500/20'
    },
    {
      title: 'Review Ditulis',
      value: stats.reviews,
      icon: Star,
      color: 'text-yellow-400',
      bgColor: 'bg-yellow-500/10',
      borderColor: 'border-yellow-500/20'
    }
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {statCards.map((stat, index) => (
        <div
          key={index}
          className={`${stat.bgColor} ${stat.borderColor} rounded-xl p-6 border`}
        >
          <div className="flex items-center justify-between mb-4">
            <div className={`p-3 rounded-lg ${stat.bgColor}`}>
              <stat.icon className={`w-6 h-6 ${stat.color}`} />
            </div>
          </div>

          <div className="space-y-1">
            <p className="text-2xl font-bold text-white">
              {loading ? '-' : stat.value.toLocaleString()}
            </p>
            <p className="text-sm text-slate-400">{stat.title}</p>
          </div>
        </div>
      ))}
    </div>
  )
}