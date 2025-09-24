import { Metadata } from 'next'
import ProfileSettings from '@/components/dashboard/ProfileSettings'

export const metadata: Metadata = {
  title: 'Profil Saya - Aikita',
  description: 'Kelola profil dan preferensi akun Aikita Anda.',
}

export default function ProfilePage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
          Profil Saya
        </h1>
        <p className="text-gray-600 dark:text-slate-400 mt-2">
          Kelola informasi akun dan preferensi Anda
        </p>
      </div>

      <ProfileSettings />
    </div>
  )
}