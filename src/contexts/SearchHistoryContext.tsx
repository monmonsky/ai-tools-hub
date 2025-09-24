'use client'

import { createContext, useContext, useEffect, useState } from 'react'
import { useAuth } from './AuthContext'

interface SearchHistoryItem {
  id: string
  query: string
  results_count: number
  created_at: string
  filters?: {
    category?: string
    pricing?: string
  }
}

interface SearchHistoryContextType {
  searchHistory: SearchHistoryItem[]
  loading: boolean
  addSearchToHistory: (query: string, resultsCount: number, filters?: any) => Promise<void>
  clearHistory: () => Promise<void>
  removeFromHistory: (id: string) => Promise<void>
  getPopularQueries: () => string[]
  refreshHistory: () => Promise<void>
}

const SearchHistoryContext = createContext<SearchHistoryContextType | undefined>(undefined)

export function SearchHistoryProvider({ children }: { children: React.ReactNode }) {
  const { user } = useAuth()
  const [searchHistory, setSearchHistory] = useState<SearchHistoryItem[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (user) {
      loadSearchHistory()
    } else {
      setSearchHistory([])
      setLoading(false)
    }
  }, [user])

  const loadSearchHistory = async () => {
    if (!user) return

    try {
      setLoading(true)

      // Load from localStorage for now
      const localHistory = localStorage.getItem(`search_history_${user.id}`)
      if (localHistory) {
        setSearchHistory(JSON.parse(localHistory))
      } else {
        // Initialize with some mock data
        const mockHistory: SearchHistoryItem[] = [
          {
            id: '1',
            query: 'AI Writing Tools',
            results_count: 24,
            created_at: new Date().toISOString(),
            filters: { category: 'Writing' }
          },
          {
            id: '2',
            query: 'Image Generator',
            results_count: 18,
            created_at: new Date(Date.now() - 86400000).toISOString(),
            filters: { category: 'Image Generation' }
          },
          {
            id: '3',
            query: 'Video Editing AI',
            results_count: 12,
            created_at: new Date(Date.now() - 172800000).toISOString(),
            filters: { category: 'Video Generation' }
          },
          {
            id: '4',
            query: 'Chatbot Platforms',
            results_count: 36,
            created_at: new Date(Date.now() - 259200000).toISOString(),
            filters: { category: 'Chatbot' }
          },
          {
            id: '5',
            query: 'Free AI Tools',
            results_count: 42,
            created_at: new Date(Date.now() - 345600000).toISOString(),
            filters: { pricing: 'free' }
          }
        ]
        setSearchHistory(mockHistory)
        localStorage.setItem(`search_history_${user.id}`, JSON.stringify(mockHistory))
      }

      // In real app, fetch from database:
      /*
      const supabase = createClient()
      const { data, error } = await supabase
        .from('search_history')
        .select('*')
        .eq('user_id', user.id)
        .order('created_at', { ascending: false })
        .limit(50)

      if (error) {
        console.error('Error fetching search history:', error)
        return
      }

      setSearchHistory(data || [])
      */
    } catch (error) {
      console.error('Error loading search history:', error)
    } finally {
      setLoading(false)
    }
  }

  const addSearchToHistory = async (query: string, resultsCount: number, filters?: any) => {
    if (!user || !query.trim()) return

    try {
      // Don't add duplicate recent searches
      const recentSearch = searchHistory.find(
        item => item.query.toLowerCase() === query.toLowerCase() &&
        Date.now() - new Date(item.created_at).getTime() < 3600000 // within 1 hour
      )

      if (recentSearch) return

      const newItem: SearchHistoryItem = {
        id: `search_${Date.now()}`,
        query: query.trim(),
        results_count: resultsCount,
        created_at: new Date().toISOString(),
        filters: filters || {}
      }

      const updatedHistory = [newItem, ...searchHistory].slice(0, 50) // Keep last 50 searches
      setSearchHistory(updatedHistory)
      localStorage.setItem(`search_history_${user.id}`, JSON.stringify(updatedHistory))

      // In real app, save to database:
      /*
      const supabase = createClient()
      await supabase
        .from('search_history')
        .insert({
          user_id: user.id,
          query: query.trim(),
          results_count: resultsCount,
          filters: filters || {}
        })
      */
    } catch (error) {
      console.error('Error adding to search history:', error)
    }
  }

  const removeFromHistory = async (id: string) => {
    if (!user) return

    try {
      const updatedHistory = searchHistory.filter(item => item.id !== id)
      setSearchHistory(updatedHistory)
      localStorage.setItem(`search_history_${user.id}`, JSON.stringify(updatedHistory))

      // In real app:
      /*
      const supabase = createClient()
      await supabase
        .from('search_history')
        .delete()
        .eq('id', id)
      */
    } catch (error) {
      console.error('Error removing from history:', error)
    }
  }

  const clearHistory = async () => {
    if (!user) return

    try {
      setSearchHistory([])
      localStorage.removeItem(`search_history_${user.id}`)

      // In real app:
      /*
      const supabase = createClient()
      await supabase
        .from('search_history')
        .delete()
        .eq('user_id', user.id)
      */
    } catch (error) {
      console.error('Error clearing history:', error)
    }
  }

  const getPopularQueries = (): string[] => {
    // Get most frequent queries
    const queryCount: { [key: string]: number } = {}

    searchHistory.forEach(item => {
      const normalizedQuery = item.query.toLowerCase()
      queryCount[normalizedQuery] = (queryCount[normalizedQuery] || 0) + 1
    })

    return Object.entries(queryCount)
      .sort(([, a], [, b]) => b - a)
      .slice(0, 5)
      .map(([query]) => query)
  }

  const refreshHistory = async () => {
    await loadSearchHistory()
  }

  const value = {
    searchHistory,
    loading,
    addSearchToHistory,
    clearHistory,
    removeFromHistory,
    getPopularQueries,
    refreshHistory
  }

  return (
    <SearchHistoryContext.Provider value={value}>
      {children}
    </SearchHistoryContext.Provider>
  )
}

export const useSearchHistory = () => {
  const context = useContext(SearchHistoryContext)
  if (context === undefined) {
    throw new Error('useSearchHistory must be used within a SearchHistoryProvider')
  }
  return context
}