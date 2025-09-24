import { Metadata } from 'next'
import DashboardLayout from '@/components/dashboard/DashboardLayout'
import DashboardStats from '@/components/dashboard/DashboardStats'
import RecentActivity from '@/components/dashboard/RecentActivity'
import FavoriteTools from '@/components/dashboard/FavoriteTools'
import PersonalizedRecommendations from '@/components/dashboard/PersonalizedRecommendations'

export const metadata: Metadata = {
  title: 'Dashboard - Aikita',
  description: 'Kelola aktivitas dan preferensi AI tools Anda di dashboard Aikita.',
}

export default function DashboardPage() {
  return (
    <DashboardLayout>
      <div className="space-y-8">
        <div className="bg-gradient-to-r from-cyan-500/10 to-purple-600/10 rounded-2xl p-8 border border-cyan-500/20">
          <h1 className="text-3xl font-bold text-white mb-2">
            Selamat Datang di Dashboard Aikita!
          </h1>
          <p className="text-slate-400">
            Kelola aktivitas AI tools Anda dan temukan rekomendasi yang dipersonalisasi
          </p>
        </div>

        <DashboardStats />

        <div className="grid lg:grid-cols-2 gap-8">
          <RecentActivity />
          <FavoriteTools />
        </div>

        <PersonalizedRecommendations />
      </div>
    </DashboardLayout>
  )
}