import { Metadata } from 'next'
import BookmarksContent from '@/components/dashboard/BookmarksContent'

export const metadata: Metadata = {
  title: 'Bookmark - Dashboard Aikita',
  description: 'Kelola bookmark link dan resource favorit Anda.',
}

export default function BookmarksPage() {
  return <BookmarksContent />
}