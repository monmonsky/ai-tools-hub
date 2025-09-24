'use client'

import { createContext, useContext, useEffect, useState } from 'react'
import { useAuth } from './AuthContext'
import { createClient } from '@/lib/supabase/client'

interface Tool {
  id: string
  name: string
  description: string
  category: string
  website: string
  logo?: string
  pricing: 'free' | 'freemium' | 'paid'
  featured: boolean
}

interface Favorite {
  id: string
  user_id: string
  tool_id: string
  created_at: string
  tool?: Tool
}

interface FavoritesContextType {
  favorites: Favorite[]
  loading: boolean
  addToFavorites: (toolId: string) => Promise<boolean>
  removeFromFavorites: (toolId: string) => Promise<boolean>
  isFavorite: (toolId: string) => boolean
  refreshFavorites: () => Promise<void>
}

const FavoritesContext = createContext<FavoritesContextType | undefined>(undefined)

export function FavoritesProvider({ children }: { children: React.ReactNode }) {
  const { user } = useAuth()
  const [favorites, setFavorites] = useState<Favorite[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (user) {
      fetchFavorites()
    } else {
      setFavorites([])
      setLoading(false)
    }
  }, [user])

  const fetchFavorites = async () => {
    if (!user) return

    try {
      setLoading(true)
      const supabase = createClient()

      // For now, we'll use localStorage as a fallback until the database is set up
      const localFavorites = localStorage.getItem(`favorites_${user.id}`)
      if (localFavorites) {
        setFavorites(JSON.parse(localFavorites))
      }

      // Uncomment when database is ready:
      /*
      const { data, error } = await supabase
        .from('user_favorites')
        .select(`
          id,
          user_id,
          tool_id,
          created_at,
          tools (
            id,
            name,
            description,
            category,
            website,
            logo,
            pricing,
            featured
          )
        `)
        .eq('user_id', user.id)
        .order('created_at', { ascending: false })

      if (error) {
        console.error('Error fetching favorites:', error)
        return
      }

      setFavorites(data || [])
      */
    } catch (error) {
      console.error('Error fetching favorites:', error)
    } finally {
      setLoading(false)
    }
  }

  const addToFavorites = async (toolId: string): Promise<boolean> => {
    if (!user) return false

    try {
      const supabase = createClient()

      // Mock tool data for now
      const mockTool: Tool = {
        id: toolId,
        name: `AI Tool ${toolId}`,
        description: 'Advanced AI tool for productivity',
        category: 'AI Writing',
        website: `https://example.com/${toolId}`,
        pricing: 'freemium',
        featured: false
      }

      const newFavorite: Favorite = {
        id: `fav_${Date.now()}`,
        user_id: user.id,
        tool_id: toolId,
        created_at: new Date().toISOString(),
        tool: mockTool
      }

      // Update local state immediately
      const updatedFavorites = [newFavorite, ...favorites]
      setFavorites(updatedFavorites)

      // Save to localStorage
      localStorage.setItem(`favorites_${user.id}`, JSON.stringify(updatedFavorites))

      // Uncomment when database is ready:
      /*
      const { error } = await supabase
        .from('user_favorites')
        .insert({
          user_id: user.id,
          tool_id: toolId
        })

      if (error) {
        console.error('Error adding to favorites:', error)
        // Revert local state
        setFavorites(favorites)
        return false
      }
      */

      return true
    } catch (error) {
      console.error('Error adding to favorites:', error)
      return false
    }
  }

  const removeFromFavorites = async (toolId: string): Promise<boolean> => {
    if (!user) return false

    try {
      const supabase = createClient()

      // Update local state immediately
      const updatedFavorites = favorites.filter(fav => fav.tool_id !== toolId)
      setFavorites(updatedFavorites)

      // Save to localStorage
      localStorage.setItem(`favorites_${user.id}`, JSON.stringify(updatedFavorites))

      // Uncomment when database is ready:
      /*
      const { error } = await supabase
        .from('user_favorites')
        .delete()
        .eq('user_id', user.id)
        .eq('tool_id', toolId)

      if (error) {
        console.error('Error removing from favorites:', error)
        // Revert local state
        setFavorites(favorites)
        return false
      }
      */

      return true
    } catch (error) {
      console.error('Error removing from favorites:', error)
      return false
    }
  }

  const isFavorite = (toolId: string): boolean => {
    return favorites.some(fav => fav.tool_id === toolId)
  }

  const refreshFavorites = async () => {
    await fetchFavorites()
  }

  const value = {
    favorites,
    loading,
    addToFavorites,
    removeFromFavorites,
    isFavorite,
    refreshFavorites
  }

  return (
    <FavoritesContext.Provider value={value}>
      {children}
    </FavoritesContext.Provider>
  )
}

export const useFavorites = () => {
  const context = useContext(FavoritesContext)
  if (context === undefined) {
    throw new Error('useFavorites must be used within a FavoritesProvider')
  }
  return context
}