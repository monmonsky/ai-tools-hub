import { Metadata } from 'next'
import DashboardStats from '@/components/dashboard/DashboardStats'
import RecentActivity from '@/components/dashboard/RecentActivity'
import FavoriteTools from '@/components/dashboard/FavoriteTools'
import PersonalizedRecommendations from '@/components/dashboard/PersonalizedRecommendations'
import DashboardWelcome from '@/components/dashboard/DashboardWelcome'

export const metadata: Metadata = {
  title: 'Dashboard - Aikita',
  description: 'Kelola aktivitas dan preferensi AI tools Anda di dashboard Aikita.',
}

export default function DashboardPage() {
  return (
    <div className="space-y-8">
      {/* Welcome Section */}
      <DashboardWelcome />

      {/* Stats Section */}
      <DashboardStats />

      {/* Main Content Grid */}
      <div className="grid lg:grid-cols-2 gap-8">
        <RecentActivity />
        <FavoriteTools />
      </div>

      {/* Recommendations */}
      <PersonalizedRecommendations />
    </div>
  )
}