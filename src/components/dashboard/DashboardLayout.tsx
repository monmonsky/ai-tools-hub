'use client'

import { useAuth } from '@/contexts/AuthContext'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import { Loader2 } from 'lucide-react'

interface DashboardLayoutProps {
  children: React.ReactNode
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  const { user, loading } = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (!loading && !user) {
      router.push('/auth/signin?redirectTo=/dashboard')
    }
  }, [user, loading, router])

  if (loading) {
    return (
      <div className="min-h-screen bg-slate-900 flex items-center justify-center">
        <div className="text-center">
          <Loader2 className="w-8 h-8 animate-spin text-cyan-400 mx-auto mb-4" />
          <p className="text-slate-400">Memuat dashboard...</p>
        </div>
      </div>
    )
  }

  if (!user) {
    return null // Will redirect to sign in
  }

  return (
    <div className="min-h-screen bg-slate-900">
      <Navigation />
      <main className="pt-24 pb-16 px-4 max-w-7xl mx-auto">
        {children}
      </main>
      <Footer />
    </div>
  )
}