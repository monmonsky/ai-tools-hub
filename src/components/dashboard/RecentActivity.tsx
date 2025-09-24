'use client'

import { useEffect, useState } from 'react'
import { useAuth } from '@/contexts/AuthContext'
import { createClient } from '@/lib/supabase/client'
import { Heart, Search, Eye, Clock } from 'lucide-react'

interface Activity {
  id: string
  action_type: 'favorite' | 'visited' | 'search'
  tool_name?: string
  query?: string
  created_at: string
}

export default function RecentActivity() {
  const { user } = useAuth()
  const [activities, setActivities] = useState<Activity[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (user) {
      fetchRecentActivity()
    }
  }, [user])

  const fetchRecentActivity = async () => {
    try {
      const supabase = createClient()

      // Get recent user_tools activities
      const { data: userTools } = await supabase
        .from('user_tools')
        .select('id, action_type, created_at, tool_id')
        .eq('user_id', user?.id)
        .order('created_at', { ascending: false })
        .limit(5)

      // Get recent search history
      const { data: searchHistory } = await supabase
        .from('search_history')
        .select('id, query, created_at')
        .eq('user_id', user?.id)
        .order('created_at', { ascending: false })
        .limit(5)

      // Combine and sort by date
      const combined: Activity[] = [
        ...(userTools?.map(item => ({
          id: item.id,
          action_type: item.action_type as 'favorite' | 'visited',
          tool_name: `AI Tool #${item.tool_id}`, // In real app, you'd join with tools table
          created_at: item.created_at
        })) || []),
        ...(searchHistory?.map(item => ({
          id: item.id,
          action_type: 'search' as const,
          query: item.query,
          created_at: item.created_at
        })) || [])
      ]

      // Sort by created_at and take latest 8
      const sorted = combined
        .sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime())
        .slice(0, 8)

      setActivities(sorted)
    } catch (error) {
      console.error('Error fetching recent activity:', error)
    } finally {
      setLoading(false)
    }
  }

  const getActivityIcon = (type: string) => {
    switch (type) {
      case 'favorite':
        return <Heart className="w-4 h-4 text-red-400" />
      case 'visited':
        return <Eye className="w-4 h-4 text-green-400" />
      case 'search':
        return <Search className="w-4 h-4 text-blue-400" />
      default:
        return <Clock className="w-4 h-4 text-slate-400" />
    }
  }

  const getActivityText = (activity: Activity) => {
    switch (activity.action_type) {
      case 'favorite':
        return `Menambahkan ${activity.tool_name} ke favorit`
      case 'visited':
        return `Mengunjungi ${activity.tool_name}`
      case 'search':
        return `Mencari "${activity.query}"`
      default:
        return 'Aktivitas tidak dikenal'
    }
  }

  const getRelativeTime = (dateString: string) => {
    const date = new Date(dateString)
    const now = new Date()
    const diffInMinutes = Math.floor((now.getTime() - date.getTime()) / (1000 * 60))

    if (diffInMinutes < 1) return 'Baru saja'
    if (diffInMinutes < 60) return `${diffInMinutes} menit lalu`

    const diffInHours = Math.floor(diffInMinutes / 60)
    if (diffInHours < 24) return `${diffInHours} jam lalu`

    const diffInDays = Math.floor(diffInHours / 24)
    return `${diffInDays} hari lalu`
  }

  return (
    <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-700/50 p-6">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-2 bg-cyan-500/10 rounded-lg">
          <Clock className="w-5 h-5 text-cyan-400" />
        </div>
        <h2 className="text-xl font-semibold text-white">Aktivitas Terbaru</h2>
      </div>

      <div className="space-y-4">
        {loading ? (
          <div className="space-y-3">
            {[...Array(5)].map((_, i) => (
              <div key={i} className="flex items-center gap-3 p-3 bg-slate-700/30 rounded-lg animate-pulse">
                <div className="w-8 h-8 bg-slate-600 rounded-lg"></div>
                <div className="flex-1">
                  <div className="h-4 bg-slate-600 rounded w-3/4 mb-2"></div>
                  <div className="h-3 bg-slate-600 rounded w-1/2"></div>
                </div>
              </div>
            ))}
          </div>
        ) : activities.length > 0 ? (
          <div className="space-y-3">
            {activities.map((activity) => (
              <div
                key={activity.id}
                className="flex items-center gap-3 p-3 hover:bg-slate-700/30 rounded-lg transition-colors"
              >
                <div className="flex-shrink-0 p-2 bg-slate-700 rounded-lg">
                  {getActivityIcon(activity.action_type)}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-white text-sm font-medium truncate">
                    {getActivityText(activity)}
                  </p>
                  <p className="text-slate-400 text-xs">
                    {getRelativeTime(activity.created_at)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-8">
            <Clock className="w-12 h-12 text-slate-600 mx-auto mb-3" />
            <p className="text-slate-400">Belum ada aktivitas terbaru</p>
            <p className="text-slate-500 text-sm mt-1">
              Mulai jelajahi AI tools untuk melihat aktivitas di sini
            </p>
          </div>
        )}
      </div>
    </div>
  )
}