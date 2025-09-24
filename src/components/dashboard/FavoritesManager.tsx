'use client'

import { useEffect, useState } from 'react'
import { useAuth } from '@/contexts/AuthContext'
import { createClient } from '@/lib/supabase/client'
import Link from 'next/link'
import { Heart, Star, ExternalLink, Trash2, Grid, List, Search } from 'lucide-react'

interface FavoriteTool {
  id: string
  tool_id: string
  created_at: string
  tool_name: string
  tool_description: string
  tool_category: string
  tool_rating: number
  tool_pricing: string
  tool_website: string
}

export default function FavoritesManager() {
  const { user } = useAuth()
  const [favorites, setFavorites] = useState<FavoriteTool[]>([])
  const [loading, setLoading] = useState(true)
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('')

  const categories = [
    'Semua', 'Chatbot', 'Image Generation', 'Writing', 'Video Generation',
    'Code Generation', 'Voice/Audio', 'Data Analysis', 'Productivity'
  ]

  useEffect(() => {
    if (user) {
      fetchFavorites()
    }
  }, [user])

  const fetchFavorites = async () => {
    try {
      const supabase = createClient()

      const { data } = await supabase
        .from('user_tools')
        .select('id, tool_id, created_at')
        .eq('user_id', user?.id)
        .eq('action_type', 'favorite')
        .order('created_at', { ascending: false })

      // Mock tool data - in real app you'd join with tools table
      const mockFavorites: FavoriteTool[] = data?.map((item, index) => {
        const toolNames = [
          'ChatGPT', 'Midjourney', 'Claude AI', 'Jasper AI', 'Copy.ai', 'Runway ML',
          'Stable Diffusion', 'Notion AI', 'GitHub Copilot', 'DeepL Write'
        ]
        const toolDescriptions = [
          'AI chatbot canggih untuk percakapan dan bantuan dalam berbagai tugas',
          'AI generator gambar dengan kualitas tinggi dan gaya artistik yang beragam',
          'Asisten AI yang membantu dalam analisis, penulisan, dan berbagai tugas kognitif',
          'Platform AI untuk copywriting dan content creation yang profesional',
          'Tool AI untuk membuat copy marketing dan content yang menarik',
          'Platform AI untuk video generation dengan fitur editing canggih',
          'Generator gambar AI open-source dengan kontrol penuh',
          'Asisten AI terintegrasi untuk produktivitas workspace',
          'AI code assistant untuk meningkatkan produktivitas coding',
          'AI writing assistant untuk meningkatkan kualitas tulisan'
        ]
        const toolCategories = [
          'Chatbot', 'Image Generation', 'Writing', 'Writing', 'Writing', 'Video Generation',
          'Image Generation', 'Productivity', 'Code Generation', 'Writing'
        ]
        const toolPricing = ['Freemium', 'Paid', 'Free', 'Paid', 'Freemium', 'Paid', 'Free', 'Freemium', 'Paid', 'Freemium']

        return {
          id: item.id,
          tool_id: item.tool_id,
          created_at: item.created_at,
          tool_name: toolNames[index % toolNames.length],
          tool_description: toolDescriptions[index % toolDescriptions.length],
          tool_category: toolCategories[index % toolCategories.length],
          tool_rating: 4.2 + (index % 8) * 0.1,
          tool_pricing: toolPricing[index % toolPricing.length],
          tool_website: `https://${toolNames[index % toolNames.length].toLowerCase().replace(' ', '')}.com`
        }
      }) || []

      setFavorites(mockFavorites)
    } catch (error) {
      console.error('Error fetching favorites:', error)
    } finally {
      setLoading(false)
    }
  }

  const removeFavorite = async (favoriteId: string, toolName: string) => {
    if (!confirm(`Hapus ${toolName} dari favorit?`)) return

    try {
      const supabase = createClient()

      const { error } = await supabase
        .from('user_tools')
        .delete()
        .eq('id', favoriteId)

      if (error) throw error

      setFavorites(prev => prev.filter(fav => fav.id !== favoriteId))
    } catch (error) {
      console.error('Error removing favorite:', error)
    }
  }

  const filteredFavorites = favorites.filter(fav => {
    const matchesSearch = fav.tool_name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         fav.tool_description.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesCategory = selectedCategory === '' || selectedCategory === 'Semua' ||
                           fav.tool_category === selectedCategory

    return matchesSearch && matchesCategory
  })

  const getRelativeTime = (dateString: string) => {
    const date = new Date(dateString)
    const now = new Date()
    const diffInDays = Math.floor((now.getTime() - date.getTime()) / (1000 * 60 * 60 * 24))

    if (diffInDays === 0) return 'Hari ini'
    if (diffInDays === 1) return 'Kemarin'
    if (diffInDays < 7) return `${diffInDays} hari lalu`
    if (diffInDays < 30) return `${Math.floor(diffInDays / 7)} minggu lalu`
    return `${Math.floor(diffInDays / 30)} bulan lalu`
  }

  return (
    <div className="space-y-6">
      {/* Controls */}
      <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-700/50 p-6">
        <div className="flex flex-col md:flex-row gap-4">
          {/* Search */}
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Cari tools favorit..."
              className="w-full pl-10 pr-4 py-2 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent"
            />
          </div>

          {/* Category Filter */}
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="px-4 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-400"
          >
            {categories.map(cat => (
              <option key={cat} value={cat === 'Semua' ? '' : cat}>{cat}</option>
            ))}
          </select>

          {/* View Mode Toggle */}
          <div className="flex bg-slate-700 rounded-lg p-1">
            <button
              onClick={() => setViewMode('grid')}
              className={`p-2 rounded-md transition-colors ${
                viewMode === 'grid' ? 'bg-cyan-500 text-white' : 'text-slate-400 hover:text-white'
              }`}
            >
              <Grid className="w-4 h-4" />
            </button>
            <button
              onClick={() => setViewMode('list')}
              className={`p-2 rounded-md transition-colors ${
                viewMode === 'list' ? 'bg-cyan-500 text-white' : 'text-slate-400 hover:text-white'
              }`}
            >
              <List className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-4 flex items-center gap-4 text-sm text-slate-400">
          <span>{filteredFavorites.length} dari {favorites.length} tools</span>
          {searchQuery && (
            <span>• Hasil pencarian untuk "{searchQuery}"</span>
          )}
        </div>
      </div>

      {/* Favorites List */}
      {loading ? (
        <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-700/50 p-8">
          <div className={viewMode === 'grid' ? 'grid md:grid-cols-2 lg:grid-cols-3 gap-6' : 'space-y-4'}>
            {[...Array(6)].map((_, i) => (
              <div key={i} className="animate-pulse">
                <div className="bg-slate-700/30 rounded-lg p-4">
                  <div className="flex items-start gap-3">
                    <div className="w-12 h-12 bg-slate-600 rounded-lg"></div>
                    <div className="flex-1">
                      <div className="h-4 bg-slate-600 rounded w-3/4 mb-2"></div>
                      <div className="h-3 bg-slate-600 rounded w-full mb-2"></div>
                      <div className="h-3 bg-slate-600 rounded w-1/2"></div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : filteredFavorites.length > 0 ? (
        <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-700/50 p-6">
          <div className={viewMode === 'grid' ? 'grid md:grid-cols-2 lg:grid-cols-3 gap-6' : 'space-y-4'}>
            {filteredFavorites.map((favorite) => (
              <div
                key={favorite.id}
                className={`bg-slate-700/30 hover:bg-slate-700/50 rounded-lg transition-colors group ${
                  viewMode === 'list' ? 'p-4' : 'p-6'
                }`}
              >
                <div className={`flex gap-4 ${viewMode === 'grid' ? 'flex-col' : 'items-start'}`}>
                  <div className={`flex ${viewMode === 'grid' ? 'items-center justify-between' : 'items-start gap-4 flex-1'}`}>
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center text-white font-bold">
                        {favorite.tool_name.charAt(0)}
                      </div>
                      {viewMode === 'list' && (
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            <h3 className="font-semibold text-white">{favorite.tool_name}</h3>
                            <div className="flex items-center gap-1">
                              <Star className="w-3 h-3 text-yellow-400 fill-current" />
                              <span className="text-xs text-slate-400">{favorite.tool_rating}</span>
                            </div>
                          </div>
                          <p className="text-sm text-slate-400 line-clamp-2">
                            {favorite.tool_description}
                          </p>
                        </div>
                      )}
                    </div>

                    <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <a
                        href={favorite.tool_website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 text-cyan-400 hover:text-cyan-300 hover:bg-cyan-500/10 rounded-lg transition-colors"
                        title="Kunjungi website"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                      <button
                        onClick={() => removeFavorite(favorite.id, favorite.tool_name)}
                        className="p-2 text-red-400 hover:text-red-300 hover:bg-red-500/10 rounded-lg transition-colors"
                        title="Hapus dari favorit"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>

                  {viewMode === 'grid' && (
                    <div className="space-y-3">
                      <div className="flex items-center gap-2">
                        <h3 className="font-semibold text-white flex-1">{favorite.tool_name}</h3>
                        <div className="flex items-center gap-1">
                          <Star className="w-3 h-3 text-yellow-400 fill-current" />
                          <span className="text-xs text-slate-400">{favorite.tool_rating}</span>
                        </div>
                      </div>

                      <p className="text-sm text-slate-400 line-clamp-3">
                        {favorite.tool_description}
                      </p>

                      <div className="flex items-center justify-between text-xs">
                        <span className="px-2 py-1 bg-cyan-500/10 text-cyan-400 rounded">
                          {favorite.tool_category}
                        </span>
                        <span className="text-slate-500">
                          Ditambahkan {getRelativeTime(favorite.created_at)}
                        </span>
                      </div>

                      <div className="flex items-center justify-between">
                        <span className="text-sm text-slate-400">{favorite.tool_pricing}</span>
                        <Heart className="w-4 h-4 text-red-400 fill-current" />
                      </div>
                    </div>
                  )}

                  {viewMode === 'list' && (
                    <div className="flex items-center gap-4 text-xs text-slate-500">
                      <span className="px-2 py-1 bg-slate-600/50 text-slate-300 rounded">
                        {favorite.tool_category}
                      </span>
                      <span>{favorite.tool_pricing}</span>
                      <span>•</span>
                      <span>{getRelativeTime(favorite.created_at)}</span>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-700/50 p-12 text-center">
          <Heart className="w-16 h-16 text-slate-600 mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-white mb-2">
            {searchQuery || selectedCategory ? 'Tidak ada hasil yang ditemukan' : 'Belum ada tools favorit'}
          </h3>
          <p className="text-slate-400 mb-6">
            {searchQuery || selectedCategory
              ? 'Coba ubah filter atau kata kunci pencarian'
              : 'Tambahkan AI tools ke favorit untuk akses cepat'
            }
          </p>
          {!(searchQuery || selectedCategory) && (
            <Link
              href="/search"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white rounded-lg font-medium transition-all"
            >
              <Search className="w-4 h-4" />
              Jelajahi AI Tools
            </Link>
          )}
        </div>
      )}
    </div>
  )
}