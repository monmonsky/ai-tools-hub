import { Metadata } from 'next'
import FavoritesManager from '@/components/dashboard/FavoritesManager'

export const metadata: Metadata = {
  title: 'Tools Favorit - Aikita',
  description: 'Kelola dan akses AI tools favorit Anda dengan mudah di Aikita.',
}

export default function FavoritesPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
          Tools Favorit Saya
        </h1>
        <p className="text-gray-600 dark:text-slate-400 mt-2">
          Koleksi AI tools yang Anda favoritkan untuk akses cepat
        </p>
      </div>

      <FavoritesManager />
    </div>
  )
}