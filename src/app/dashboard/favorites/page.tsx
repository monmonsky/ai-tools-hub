import { Metadata } from 'next'
import DashboardLayout from '@/components/dashboard/DashboardLayout'
import FavoritesManager from '@/components/dashboard/FavoritesManager'

export const metadata: Metadata = {
  title: 'Tools Favorit - Aikita',
  description: 'Kelola dan akses AI tools favorit Anda dengan mudah di Aikita.',
}

export default function FavoritesPage() {
  return (
    <DashboardLayout>
      <div className="max-w-6xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-white mb-2">
            Tools Favorit Saya
          </h1>
          <p className="text-slate-400">
            Koleksi AI tools yang Anda favoritkan untuk akses cepat
          </p>
        </div>

        <FavoritesManager />
      </div>
    </DashboardLayout>
  )
}