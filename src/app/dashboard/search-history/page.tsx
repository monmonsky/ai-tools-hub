import { Metadata } from 'next'
import SearchHistoryContent from '@/components/dashboard/SearchHistoryContent'

export const metadata: Metadata = {
  title: 'Riwayat Pencarian - Dashboard Aikita',
  description: 'Lihat dan kelola riwayat pencarian AI tools Anda.',
}

export default function SearchHistoryPage() {
  return <SearchHistoryContent />
}