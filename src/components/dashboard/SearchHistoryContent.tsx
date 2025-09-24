'use client'

import { useState, useEffect } from 'react'
import { useAuth } from '@/contexts/AuthContext'
import { createClient } from '@/lib/supabase/client'
import {
  Search,
  Clock,
  Trash2,
  Filter,
  Calendar,
  TrendingUp,
  ExternalLink
} from 'lucide-react'

interface SearchHistory {
  id: string
  query: string
  results_count: number
  created_at: string
}

export default function SearchHistoryContent() {
  const { user } = useAuth()
  const [searchHistory, setSearchHistory] = useState<SearchHistory[]>([])
  const [loading, setLoading] = useState(true)
  const [filter, setFilter] = useState('all')
  const [searchQuery, setSearchQuery] = useState('')

  useEffect(() => {
    if (user) {
      fetchSearchHistory()
    }
  }, [user])

  const fetchSearchHistory = async () => {
    try {
      const supabase = createClient()
      const { data, error } = await supabase
        .from('search_history')
        .select('*')
        .eq('user_id', user?.id)
        .order('created_at', { ascending: false })
        .limit(50)

      if (error) {
        console.error('Error fetching search history:', error)
        return
      }

      // Mock data for now since we don't have the table set up
      const mockData: SearchHistory[] = [
        {
          id: '1',
          query: 'AI Writing Tools',
          results_count: 24,
          created_at: new Date().toISOString()
        },
        {
          id: '2',
          query: 'Image Generator',
          results_count: 18,
          created_at: new Date(Date.now() - 86400000).toISOString()
        },
        {
          id: '3',
          query: 'Video Editing AI',
          results_count: 12,
          created_at: new Date(Date.now() - 172800000).toISOString()
        },
        {
          id: '4',
          query: 'Chatbot Platforms',
          results_count: 36,
          created_at: new Date(Date.now() - 259200000).toISOString()
        }
      ]

      setSearchHistory(data || mockData)
    } catch (error) {
      console.error('Error:', error)
    } finally {
      setLoading(false)
    }
  }

  const clearHistory = async () => {
    if (!confirm('Hapus semua riwayat pencarian?')) return

    try {
      const supabase = createClient()
      const { error } = await supabase
        .from('search_history')
        .delete()
        .eq('user_id', user?.id)

      if (!error) {
        setSearchHistory([])
      }
    } catch (error) {
      console.error('Error clearing history:', error)
    }
  }

  const filteredHistory = searchHistory.filter(item => {
    if (searchQuery && !item.query.toLowerCase().includes(searchQuery.toLowerCase())) {
      return false
    }
    return true
  })

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    const now = new Date()
    const diffTime = now.getTime() - date.getTime()
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24))

    if (diffDays === 0) return 'Hari ini'
    if (diffDays === 1) return 'Kemarin'
    if (diffDays < 7) return `${diffDays} hari lalu`
    return date.toLocaleDateString('id-ID')
  }

  if (loading) {
    return (
      <div className="space-y-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Riwayat Pencarian</h1>
          <p className="text-gray-600 dark:text-slate-400 mt-2">Memuat riwayat pencarian Anda...</p>
        </div>

        <div className="space-y-4">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="bg-white dark:bg-slate-800 rounded-xl border border-gray-200 dark:border-slate-700 p-6 animate-pulse">
              <div className="h-4 bg-gray-200 dark:bg-slate-700 rounded w-1/3 mb-2"></div>
              <div className="h-3 bg-gray-200 dark:bg-slate-700 rounded w-1/4"></div>
            </div>
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
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Riwayat Pencarian</h1>
          <p className="text-gray-600 dark:text-slate-400 mt-2">
            Lihat dan kelola riwayat pencarian AI tools Anda
          </p>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={clearHistory}
            className="flex items-center gap-2 px-4 py-2 text-red-600 dark:text-red-400 border border-red-200 dark:border-red-800 rounded-lg hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors"
          >
            <Trash2 className="w-4 h-4" />
            Hapus Semua
          </button>
        </div>
      </div>

      {/* Search and Filters */}
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
          <input
            type="text"
            placeholder="Cari dalam riwayat..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2 bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-600 rounded-lg text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
          />
        </div>

        <div className="flex items-center gap-2">
          <Filter className="w-4 h-4 text-gray-500 dark:text-slate-400" />
          <select
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="px-3 py-2 bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-600 rounded-lg text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
          >
            <option value="all">Semua</option>
            <option value="today">Hari ini</option>
            <option value="week">Minggu ini</option>
            <option value="month">Bulan ini</option>
          </select>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-gradient-to-r from-cyan-50 to-blue-50 dark:from-cyan-900/20 dark:to-blue-900/20 rounded-xl p-6 border border-cyan-200 dark:border-cyan-800">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-cyan-500 rounded-lg flex items-center justify-center">
              <Search className="w-6 h-6 text-white" />
            </div>
            <div>
              <div className="text-2xl font-bold text-gray-900 dark:text-white">{searchHistory.length}</div>
              <div className="text-sm text-gray-600 dark:text-slate-400">Total Pencarian</div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-xl p-6 border border-purple-200 dark:border-purple-800">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center">
              <TrendingUp className="w-6 h-6 text-white" />
            </div>
            <div>
              <div className="text-2xl font-bold text-gray-900 dark:text-white">
                {searchHistory.reduce((acc, item) => acc + item.results_count, 0)}
              </div>
              <div className="text-sm text-gray-600 dark:text-slate-400">Total Hasil</div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-xl p-6 border border-green-200 dark:border-green-800">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center">
              <Calendar className="w-6 h-6 text-white" />
            </div>
            <div>
              <div className="text-2xl font-bold text-gray-900 dark:text-white">7</div>
              <div className="text-sm text-gray-600 dark:text-slate-400">Hari Aktif</div>
            </div>
          </div>
        </div>
      </div>

      {/* History List */}
      <div className="space-y-4">
        {filteredHistory.length === 0 ? (
          <div className="bg-white dark:bg-slate-800 rounded-xl border border-gray-200 dark:border-slate-700 p-8 text-center">
            <Search className="w-12 h-12 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
              Belum ada riwayat pencarian
            </h3>
            <p className="text-gray-600 dark:text-slate-400 mb-4">
              Mulai jelajahi AI tools untuk melihat riwayat pencarian Anda di sini
            </p>
            <a
              href="/tools"
              className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-600 to-purple-600 text-white rounded-lg hover:from-cyan-700 hover:to-purple-700 transition-all duration-200"
            >
              Jelajahi Tools
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        ) : (
          filteredHistory.map((item) => (
            <div key={item.id} className="bg-white dark:bg-slate-800 rounded-xl border border-gray-200 dark:border-slate-700 p-6 hover:shadow-lg dark:hover:shadow-2xl transition-all duration-200">
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <Search className="w-5 h-5 text-gray-400" />
                    <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                      {item.query}
                    </h3>
                  </div>

                  <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-slate-400">
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {formatDate(item.created_at)}
                    </div>
                    <div className="flex items-center gap-1">
                      <TrendingUp className="w-4 h-4" />
                      {item.results_count} hasil
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <a
                    href={`/tools?search=${encodeURIComponent(item.query)}`}
                    className="px-3 py-1.5 text-sm bg-cyan-50 dark:bg-cyan-900/20 text-cyan-600 dark:text-cyan-400 rounded-lg hover:bg-cyan-100 dark:hover:bg-cyan-900/40 transition-colors"
                  >
                    Cari Lagi
                  </a>
                  <button className="p-2 text-gray-400 hover:text-red-500 transition-colors">
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  )
}