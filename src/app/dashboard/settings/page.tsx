import { Metadata } from 'next'
import DashboardSettingsContent from '@/components/dashboard/DashboardSettingsContent'

export const metadata: Metadata = {
  title: 'Pengaturan - Dashboard Aikita',
  description: 'Kelola pengaturan akun dan preferensi Anda di Aikita.',
}

export default function SettingsPage() {
  return <DashboardSettingsContent />
}