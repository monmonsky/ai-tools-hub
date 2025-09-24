import { Metadata } from 'next'
import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import AdvancedSearch from '@/components/AdvancedSearch'

export const metadata: Metadata = {
  title: 'Pencarian Lanjutan - Aikita',
  description: 'Temukan AI tools yang sempurna dengan fitur pencarian lanjutan dan filter canggih di Aikita.',
}

export default function SearchPage() {
  return (
    <div className="min-h-screen bg-slate-900">
      <Navigation />
      <main className="pt-24 pb-16">
        <AdvancedSearch />
      </main>
      <Footer />
    </div>
  )
}