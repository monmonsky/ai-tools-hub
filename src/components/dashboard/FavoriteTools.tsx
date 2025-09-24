'use client'

import { useEffect, useState } from 'react'
import { useAuth } from '@/contexts/AuthContext'
import { createClient } from '@/lib/supabase/client'
import Link from 'next/link'
import { Heart, ExternalLink, Star } from 'lucide-react'

interface FavoriteTool {
  id: string
  tool_id: string
  created_at: string
  // Mock tool data - in real app you'd join with tools table
  tool_name: string
  tool_description: string
  tool_category: string
  tool_rating: number
}

export default function FavoriteTools() {
  const { user } = useAuth()
  const [favorites, setFavorites] = useState<FavoriteTool[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (user) {
      fetchFavoriteTools()
    }
  }, [user])

  const fetchFavoriteTools = async () => {
    try {
      const supabase = createClient()

      const { data } = await supabase
        .from('user_tools')
        .select('id, tool_id, created_at')
        .eq('user_id', user?.id)
        .eq('action_type', 'favorite')
        .order('created_at', { ascending: false })
        .limit(6)

      // Mock tool data - in real app you'd join with tools table
      const mockFavorites: FavoriteTool[] = data?.map((item, index) => ({
        id: item.id,
        tool_id: item.tool_id,
        created_at: item.created_at,
        tool_name: [
          'ChatGPT',
          'Midjourney',
          'Claude AI',
          'Jasper AI',
          'Copy.ai',
          'Runway ML'
        ][index % 6],
        tool_description: [
          'AI chatbot canggih untuk percakapan dan bantuan',
          'AI generator gambar dengan kualitas tinggi',
          'Asisten AI yang membantu dalam berbagai tugas',
          'Platform AI untuk copywriting dan content',
          'Tool AI untuk membuat copy marketing',
          'Platform AI untuk video generation'
        ][index % 6],
        tool_category: [
          'Chatbot',
          'Image Generation',
          'AI Assistant',
          'Copywriting',
          'Marketing',
          'Video Generation'
        ][index % 6],
        tool_rating: 4.5 + (index % 3) * 0.2
      })) || []

      setFavorites(mockFavorites)
    } catch (error) {
      console.error('Error fetching favorite tools:', error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-700/50 p-6">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-red-500/10 rounded-lg">
            <Heart className="w-5 h-5 text-red-400" />
          </div>
          <h2 className="text-xl font-semibold text-white">Tools Favorit</h2>
        </div>
        <Link
          href="/dashboard/favorites"
          className="text-cyan-400 hover:text-cyan-300 text-sm font-medium transition-colors"
        >
          Lihat Semua
        </Link>
      </div>

      <div className="space-y-4">
        {loading ? (
          <div className="space-y-3">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="p-4 bg-slate-700/30 rounded-lg animate-pulse">
                <div className="flex items-start gap-3">
                  <div className="w-12 h-12 bg-slate-600 rounded-lg"></div>
                  <div className="flex-1">
                    <div className="h-4 bg-slate-600 rounded w-3/4 mb-2"></div>
                    <div className="h-3 bg-slate-600 rounded w-full mb-2"></div>
                    <div className="h-3 bg-slate-600 rounded w-1/2"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : favorites.length > 0 ? (
          <div className="space-y-3">
            {favorites.map((favorite) => (
              <div
                key={favorite.id}
                className="p-4 bg-slate-700/30 hover:bg-slate-700/50 rounded-lg transition-colors group"
              >
                <div className="flex items-start gap-3">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center text-white font-bold">
                    {favorite.tool_name.charAt(0)}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="font-medium text-white truncate">
                        {favorite.tool_name}
                      </h3>
                      <div className="flex items-center gap-1">
                        <Star className="w-3 h-3 text-yellow-400 fill-current" />
                        <span className="text-xs text-slate-400">
                          {favorite.tool_rating}
                        </span>
                      </div>
                    </div>
                    <p className="text-sm text-slate-400 line-clamp-2 mb-2">
                      {favorite.tool_description}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="px-2 py-1 bg-cyan-500/10 text-cyan-400 text-xs rounded">
                        {favorite.tool_category}
                      </span>
                      <button className="opacity-0 group-hover:opacity-100 transition-opacity text-cyan-400 hover:text-cyan-300">
                        <ExternalLink className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-8">
            <Heart className="w-12 h-12 text-slate-600 mx-auto mb-3" />
            <p className="text-slate-400 mb-2">Belum ada tools favorit</p>
            <p className="text-slate-500 text-sm">
              Tambahkan tools ke favorit untuk akses cepat
            </p>
            <Link
              href="/tools"
              className="inline-block mt-3 px-4 py-2 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-lg text-sm font-medium hover:from-cyan-600 hover:to-purple-700 transition-all"
            >
              Jelajahi Tools
            </Link>
          </div>
        )}
      </div>
    </div>
  )
}