'use client'

import { useState } from 'react'
import { Heart, Loader2 } from 'lucide-react'
import { useFavorites } from '@/contexts/FavoritesContext'
import { useAuth } from '@/contexts/AuthContext'

interface FavoriteButtonProps {
  toolId: string
  size?: 'sm' | 'md' | 'lg'
  showText?: boolean
  className?: string
}

export default function FavoriteButton({
  toolId,
  size = 'md',
  showText = false,
  className = ''
}: FavoriteButtonProps) {
  const { user } = useAuth()
  const { isFavorite, addToFavorites, removeFromFavorites } = useFavorites()
  const [loading, setLoading] = useState(false)

  const isToolFavorite = isFavorite(toolId)

  const toggleFavorite = async (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()

    if (!user) {
      // Redirect to login
      window.location.href = '/auth/signin'
      return
    }

    setLoading(true)

    try {
      if (isToolFavorite) {
        await removeFromFavorites(toolId)
      } else {
        await addToFavorites(toolId)
      }
    } catch (error) {
      console.error('Error toggling favorite:', error)
    } finally {
      setLoading(false)
    }
  }

  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-10 h-10',
    lg: 'w-12 h-12'
  }

  const iconSizes = {
    sm: 'w-4 h-4',
    md: 'w-5 h-5',
    lg: 'w-6 h-6'
  }

  return (
    <button
      onClick={toggleFavorite}
      disabled={loading}
      className={`
        ${sizeClasses[size]}
        ${isToolFavorite
          ? 'bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 border-red-200 dark:border-red-800'
          : 'bg-gray-50 dark:bg-slate-700 text-gray-600 dark:text-slate-400 border-gray-200 dark:border-slate-600 hover:text-red-500 dark:hover:text-red-400'
        }
        border rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110 disabled:opacity-50 disabled:scale-100
        ${className}
      `}
      title={isToolFavorite ? 'Hapus dari favorit' : 'Tambah ke favorit'}
    >
      {loading ? (
        <Loader2 className={`${iconSizes[size]} animate-spin`} />
      ) : (
        <Heart
          className={`${iconSizes[size]} ${isToolFavorite ? 'fill-current' : ''}`}
        />
      )}
      {showText && (
        <span className="ml-2 text-sm font-medium">
          {isToolFavorite ? 'Favorit' : 'Favoritkan'}
        </span>
      )}
    </button>
  )
}