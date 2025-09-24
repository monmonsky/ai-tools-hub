import { Metadata } from 'next'
import DashboardLayout from '@/components/dashboard/DashboardLayout'
import ProfileSettings from '@/components/dashboard/ProfileSettings'

export const metadata: Metadata = {
  title: 'Profil Saya - Aikita',
  description: 'Kelola profil dan preferensi akun Aikita Anda.',
}

export default function ProfilePage() {
  return (
    <DashboardLayout>
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-white mb-2">
            Profil Saya
          </h1>
          <p className="text-slate-400">
            Kelola informasi akun dan preferensi Anda
          </p>
        </div>

        <ProfileSettings />
      </div>
    </DashboardLayout>
  )
}