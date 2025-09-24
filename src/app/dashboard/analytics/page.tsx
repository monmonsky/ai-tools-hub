import { Metadata } from 'next'
import AnalyticsContent from '@/components/dashboard/AnalyticsContent'

export const metadata: Metadata = {
  title: 'Statistik & Analytics - Dashboard Aikita',
  description: 'Lihat statistik penggunaan dan analytics aktivitas Anda di Aikita.',
}

export default function AnalyticsPage() {
  return <AnalyticsContent />
}