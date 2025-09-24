'use client'

import { useState, useEffect } from 'react'
import { useAuth } from '@/contexts/AuthContext'
import { createClient } from '@/lib/supabase/client'
import { Search, Filter, X, Star, Heart, Eye, SlidersHorizontal } from 'lucide-react'

interface SearchFilters {
  category: string
  pricing: string
  rating: number
  features: string[]
  sortBy: string
}

interface SearchResult {
  id: string
  name: string
  description: string
  category: string
  rating: number
  pricing: string
  features: string[]
  image?: string
  isFavorite: boolean
}

export default function AdvancedSearch() {
  const { user } = useAuth()
  const [query, setQuery] = useState('')
  const [showFilters, setShowFilters] = useState(false)
  const [filters, setFilters] = useState<SearchFilters>({
    category: '',
    pricing: '',
    rating: 0,
    features: [],
    sortBy: 'relevance'
  })
  const [results, setResults] = useState<SearchResult[]>([])
  const [loading, setLoading] = useState(false)
  const [searchHistory, setSearchHistory] = useState<string[]>([])

  const categories = [
    'Chatbot', 'Image Generation', 'Writing', 'Video Generation',
    'Code Generation', 'Voice/Audio', 'Data Analysis', 'Productivity'
  ]

  const pricingOptions = ['Free', 'Freemium', 'Paid', 'Enterprise']

  const featureOptions = [
    'API Access', 'Custom Training', 'Batch Processing',
    'Multi-language', 'Real-time', 'Cloud-based'
  ]

  const sortOptions = [
    { value: 'relevance', label: 'Relevansi' },
    { value: 'rating', label: 'Rating Tertinggi' },
    { value: 'popularity', label: 'Popularitas' },
    { value: 'newest', label: 'Terbaru' },
    { value: 'price_low', label: 'Harga Terendah' }
  ]

  useEffect(() => {
    if (user) {
      fetchSearchHistory()
    }
  }, [user])

  const fetchSearchHistory = async () => {
    try {
      const supabase = createClient()
      const { data } = await supabase
        .from('search_history')
        .select('query')
        .eq('user_id', user?.id)
        .order('created_at', { ascending: false })
        .limit(5)

      setSearchHistory(data?.map(item => item.query) || [])
    } catch (error) {
      console.error('Error fetching search history:', error)
    }
  }

  const saveSearch = async (searchQuery: string, resultsCount: number) => {
    if (!user) return

    try {
      const supabase = createClient()
      await supabase.from('search_history').insert({
        user_id: user.id,
        query: searchQuery,
        filters: filters,
        results_count: resultsCount
      })
    } catch (error) {
      console.error('Error saving search:', error)
    }
  }

  const handleSearch = async () => {
    setLoading(true)

    // Mock search results
    const mockResults: SearchResult[] = [
      {
        id: '1',
        name: 'ChatGPT',
        description: 'AI chatbot canggih untuk percakapan dan berbagai tugas',
        category: 'Chatbot',
        rating: 4.8,
        pricing: 'Freemium',
        features: ['API Access', 'Multi-language', 'Real-time'],
        isFavorite: true
      },
      {
        id: '2',
        name: 'Midjourney',
        description: 'Generator gambar AI dengan kualitas tinggi dan gaya artistik',
        category: 'Image Generation',
        rating: 4.7,
        pricing: 'Paid',
        features: ['Batch Processing', 'Custom Training'],
        isFavorite: false
      },
      {
        id: '3',
        name: 'Claude AI',
        description: 'Asisten AI yang membantu dalam analisis dan penulisan',
        category: 'Writing',
        rating: 4.6,
        pricing: 'Free',
        features: ['API Access', 'Multi-language'],
        isFavorite: false
      },
      {
        id: '4',
        name: 'GitHub Copilot',
        description: 'AI code assistant untuk meningkatkan produktivitas coding',
        category: 'Code Generation',
        rating: 4.5,
        pricing: 'Paid',
        features: ['API Access', 'Real-time'],
        isFavorite: true
      }
    ]

    // Apply filters
    let filteredResults = mockResults.filter(result => {
      if (query && !result.name.toLowerCase().includes(query.toLowerCase()) &&
          !result.description.toLowerCase().includes(query.toLowerCase())) {
        return false
      }
      if (filters.category && result.category !== filters.category) {
        return false
      }
      if (filters.pricing && result.pricing !== filters.pricing) {
        return false
      }
      if (filters.rating && result.rating < filters.rating) {
        return false
      }
      if (filters.features.length > 0) {
        const hasFeature = filters.features.some(feature =>
          result.features.includes(feature)
        )
        if (!hasFeature) return false
      }
      return true
    })

    // Apply sorting
    switch (filters.sortBy) {
      case 'rating':
        filteredResults.sort((a, b) => b.rating - a.rating)
        break
      case 'popularity':
        filteredResults.sort((a, b) => b.rating - a.rating) // Mock: use rating as popularity
        break
      default:
        break
    }

    setResults(filteredResults)

    if (query) {
      await saveSearch(query, filteredResults.length)
      await fetchSearchHistory()
    }

    setTimeout(() => setLoading(false), 500)
  }

  const toggleFavorite = async (toolId: string) => {
    if (!user) return

    try {
      const supabase = createClient()
      const result = results.find(r => r.id === toolId)

      if (result?.isFavorite) {
        // Remove from favorites
        await supabase
          .from('user_tools')
          .delete()
          .eq('user_id', user.id)
          .eq('tool_id', toolId)
          .eq('action_type', 'favorite')
      } else {
        // Add to favorites
        await supabase.from('user_tools').insert({
          user_id: user.id,
          tool_id: toolId,
          action_type: 'favorite'
        })
      }

      setResults(prev => prev.map(result =>
        result.id === toolId
          ? { ...result, isFavorite: !result.isFavorite }
          : result
      ))
    } catch (error) {
      console.error('Error toggling favorite:', error)
    }
  }

  const clearFilters = () => {
    setFilters({
      category: '',
      pricing: '',
      rating: 0,
      features: [],
      sortBy: 'relevance'
    })
  }

  return (
    <div className="max-w-6xl mx-auto p-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white mb-2">
          Pencarian Lanjutan AI Tools
        </h1>
        <p className="text-slate-400">
          Temukan AI tools yang sempurna dengan filter dan pencarian canggih
        </p>
      </div>

      {/* Search Bar */}
      <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-700/50 p-6 mb-6">
        <div className="flex gap-4 mb-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Cari AI tools (contoh: chatbot, image generator)..."
              className="w-full pl-10 pr-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent"
              onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
            />
          </div>
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="px-4 py-3 bg-slate-700 hover:bg-slate-600 text-white rounded-lg flex items-center gap-2 transition-colors"
          >
            <SlidersHorizontal className="w-5 h-5" />
            Filter
          </button>
          <button
            onClick={handleSearch}
            disabled={loading}
            className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white rounded-lg font-medium transition-all disabled:opacity-50"
          >
            {loading ? 'Mencari...' : 'Cari'}
          </button>
        </div>

        {/* Search History */}
        {searchHistory.length > 0 && (
          <div className="mb-4">
            <p className="text-sm text-slate-400 mb-2">Pencarian terakhir:</p>
            <div className="flex flex-wrap gap-2">
              {searchHistory.map((historyQuery, index) => (
                <button
                  key={index}
                  onClick={() => setQuery(historyQuery)}
                  className="px-3 py-1 bg-slate-700 hover:bg-slate-600 text-slate-300 text-sm rounded-full transition-colors"
                >
                  {historyQuery}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Advanced Filters */}
        {showFilters && (
          <div className="border-t border-slate-600 pt-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {/* Category Filter */}
              <div>
                <label className="block text-sm font-medium text-slate-200 mb-2">
                  Kategori
                </label>
                <select
                  value={filters.category}
                  onChange={(e) => setFilters(prev => ({ ...prev, category: e.target.value }))}
                  className="w-full p-2 bg-slate-700 border border-slate-600 rounded-lg text-white"
                >
                  <option value="">Semua Kategori</option>
                  {categories.map(cat => (
                    <option key={cat} value={cat}>{cat}</option>
                  ))}
                </select>
              </div>

              {/* Pricing Filter */}
              <div>
                <label className="block text-sm font-medium text-slate-200 mb-2">
                  Harga
                </label>
                <select
                  value={filters.pricing}
                  onChange={(e) => setFilters(prev => ({ ...prev, pricing: e.target.value }))}
                  className="w-full p-2 bg-slate-700 border border-slate-600 rounded-lg text-white"
                >
                  <option value="">Semua Harga</option>
                  {pricingOptions.map(price => (
                    <option key={price} value={price}>{price}</option>
                  ))}
                </select>
              </div>

              {/* Rating Filter */}
              <div>
                <label className="block text-sm font-medium text-slate-200 mb-2">
                  Rating Minimum
                </label>
                <select
                  value={filters.rating}
                  onChange={(e) => setFilters(prev => ({ ...prev, rating: Number(e.target.value) }))}
                  className="w-full p-2 bg-slate-700 border border-slate-600 rounded-lg text-white"
                >
                  <option value={0}>Semua Rating</option>
                  <option value={4}>4+ Bintang</option>
                  <option value={4.5}>4.5+ Bintang</option>
                </select>
              </div>

              {/* Sort By */}
              <div>
                <label className="block text-sm font-medium text-slate-200 mb-2">
                  Urutkan
                </label>
                <select
                  value={filters.sortBy}
                  onChange={(e) => setFilters(prev => ({ ...prev, sortBy: e.target.value }))}
                  className="w-full p-2 bg-slate-700 border border-slate-600 rounded-lg text-white"
                >
                  {sortOptions.map(option => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Features Filter */}
            <div className="mt-4">
              <label className="block text-sm font-medium text-slate-200 mb-2">
                Fitur
              </label>
              <div className="flex flex-wrap gap-2">
                {featureOptions.map(feature => (
                  <button
                    key={feature}
                    onClick={() => {
                      setFilters(prev => ({
                        ...prev,
                        features: prev.features.includes(feature)
                          ? prev.features.filter(f => f !== feature)
                          : [...prev.features, feature]
                      }))
                    }}
                    className={`px-3 py-1 rounded-full text-sm transition-colors ${
                      filters.features.includes(feature)
                        ? 'bg-cyan-500 text-white'
                        : 'bg-slate-700 text-slate-300 hover:bg-slate-600'
                    }`}
                  >
                    {feature}
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-4 flex justify-end">
              <button
                onClick={clearFilters}
                className="px-4 py-2 text-slate-400 hover:text-white transition-colors"
              >
                Reset Filter
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Search Results */}
      {results.length > 0 && (
        <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-700/50 p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold text-white">
              Hasil Pencarian ({results.length})
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {results.map(result => (
              <div
                key={result.id}
                className="p-6 bg-slate-700/30 hover:bg-slate-700/50 rounded-xl border border-slate-600/30 transition-colors group"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center text-white font-bold">
                    {result.name.charAt(0)}
                  </div>
                  <button
                    onClick={() => toggleFavorite(result.id)}
                    className={`p-2 rounded-lg transition-colors ${
                      result.isFavorite
                        ? 'text-red-400 bg-red-500/10'
                        : 'text-slate-400 hover:text-red-400 hover:bg-red-500/10'
                    }`}
                  >
                    <Heart className={`w-5 h-5 ${result.isFavorite ? 'fill-current' : ''}`} />
                  </button>
                </div>

                <h3 className="font-semibold text-white mb-2">{result.name}</h3>
                <p className="text-sm text-slate-400 mb-4 line-clamp-2">
                  {result.description}
                </p>

                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="px-2 py-1 bg-cyan-500/10 text-cyan-400 text-xs rounded">
                      {result.category}
                    </span>
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="text-sm text-slate-300">{result.rating}</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-sm text-slate-400">{result.pricing}</span>
                    <button className="px-3 py-1 bg-gradient-to-r from-cyan-500 to-purple-600 text-white text-sm rounded hover:from-cyan-600 hover:to-purple-700 transition-all">
                      Lihat Detail
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* No Results */}
      {!loading && query && results.length === 0 && (
        <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-700/50 p-12 text-center">
          <Search className="w-16 h-16 text-slate-600 mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-white mb-2">
            Tidak ada hasil ditemukan
          </h3>
          <p className="text-slate-400 mb-4">
            Coba ubah kata kunci atau filter pencarian Anda
          </p>
          <button
            onClick={clearFilters}
            className="px-4 py-2 bg-cyan-500 hover:bg-cyan-600 text-white rounded-lg transition-colors"
          >
            Reset Filter
          </button>
        </div>
      )}
    </div>
  )
}