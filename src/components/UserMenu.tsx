'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useAuth } from '@/contexts/AuthContext'
import { LogOut, User, Settings, Heart, Search, Loader2 } from 'lucide-react'

export default function UserMenu() {
  const { user, profile, loading, signOut } = useAuth()
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const [isSigningOut, setIsSigningOut] = useState(false)

  const handleSignOut = async () => {
    setIsSigningOut(true)
    await signOut()
    setIsSigningOut(false)
    setIsDropdownOpen(false)
  }

  if (loading) {
    return (
      <div className="flex items-center gap-2">
        <Loader2 className="w-4 h-4 animate-spin text-slate-400" />
      </div>
    )
  }

  if (!user) {
    return (
      <div className="flex items-center">
        <Link
          href="/auth/signin"
          className="px-6 py-2 bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white rounded-lg font-medium transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
        >
          Masuk / Daftar
        </Link>
      </div>
    )
  }

  return (
    <div className="relative">
      <button
        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        className="flex items-center gap-2 p-2 rounded-full hover:bg-slate-700/50 transition-colors"
      >
        <div className="w-8 h-8 rounded-full bg-gradient-to-r from-cyan-400 to-purple-600 flex items-center justify-center">
          <span className="text-white text-sm font-semibold">
            {profile?.full_name?.charAt(0) || user.email?.charAt(0) || 'U'}
          </span>
        </div>
        <div className="hidden md:block text-left">
          <div className="text-white text-sm font-medium">
            {profile?.full_name || 'User'}
          </div>
          <div className="text-slate-400 text-xs">
            {user.email}
          </div>
        </div>
      </button>

      {isDropdownOpen && (
        <>
          <div
            className="fixed inset-0 z-10"
            onClick={() => setIsDropdownOpen(false)}
          />
          <div className="absolute right-0 mt-2 w-56 bg-slate-800 border border-slate-700 rounded-lg shadow-xl z-20">
            <div className="p-4 border-b border-slate-700">
              <div className="text-white font-medium">
                {profile?.full_name || 'User'}
              </div>
              <div className="text-slate-400 text-sm">
                {user.email}
              </div>
            </div>

            <div className="py-2">
              <Link
                href="/dashboard"
                className="flex items-center gap-3 px-4 py-2 text-slate-300 hover:text-white hover:bg-slate-700/50 transition-colors"
                onClick={() => setIsDropdownOpen(false)}
              >
                <User className="w-4 h-4" />
                Dashboard
              </Link>

              <Link
                href="/dashboard/profile"
                className="flex items-center gap-3 px-4 py-2 text-slate-300 hover:text-white hover:bg-slate-700/50 transition-colors"
                onClick={() => setIsDropdownOpen(false)}
              >
                <Settings className="w-4 h-4" />
                Profil
              </Link>

              <Link
                href="/dashboard/favorites"
                className="flex items-center gap-3 px-4 py-2 text-slate-300 hover:text-white hover:bg-slate-700/50 transition-colors"
                onClick={() => setIsDropdownOpen(false)}
              >
                <Heart className="w-4 h-4" />
                Favorit
              </Link>

              <Link
                href="/dashboard/search-history"
                className="flex items-center gap-3 px-4 py-2 text-slate-300 hover:text-white hover:bg-slate-700/50 transition-colors"
                onClick={() => setIsDropdownOpen(false)}
              >
                <Search className="w-4 h-4" />
                Riwayat Pencarian
              </Link>
            </div>

            <div className="border-t border-slate-700 py-2">
              <button
                onClick={handleSignOut}
                disabled={isSigningOut}
                className="flex items-center gap-3 px-4 py-2 text-red-400 hover:text-red-300 hover:bg-slate-700/50 transition-colors w-full text-left disabled:opacity-50"
              >
                {isSigningOut ? (
                  <Loader2 className="w-4 h-4 animate-spin" />
                ) : (
                  <LogOut className="w-4 h-4" />
                )}
                {isSigningOut ? 'Keluar...' : 'Keluar'}
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  )
}