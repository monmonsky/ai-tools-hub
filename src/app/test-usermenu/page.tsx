'use client'

import { useState } from 'react'
import Link from 'next/link'
import { LogOut, User, Settings, Heart, Search, Loader2 } from 'lucide-react'

// Mock UserMenu for testing
function TestUserMenu({ mockUser }: { mockUser: boolean }) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)

  if (!mockUser) {
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
          <span className="text-white text-sm font-semibold">T</span>
        </div>
        <div className="hidden md:block text-left">
          <div className="text-white text-sm font-medium">Test User</div>
          <div className="text-slate-400 text-xs">test@example.com</div>
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
              <div className="text-white font-medium">Test User</div>
              <div className="text-slate-400 text-sm">test@example.com</div>
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
                onClick={() => alert('Sign out clicked!')}
                className="flex items-center gap-3 px-4 py-2 text-red-400 hover:text-red-300 hover:bg-slate-700/50 transition-colors w-full text-left"
              >
                <LogOut className="w-4 h-4" />
                Keluar
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  )
}

export default function TestUserMenuPage() {
  const [mockUser, setMockUser] = useState(false)

  return (
    <div className="min-h-screen bg-slate-900 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-white mb-8">Test UserMenu Component</h1>

        <div className="bg-slate-800 rounded-lg p-6 mb-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold text-white">UserMenu Test</h2>
            <button
              onClick={() => setMockUser(!mockUser)}
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
            >
              Toggle User State: {mockUser ? 'Logged In' : 'Logged Out'}
            </button>
          </div>

          <div className="flex justify-end">
            <TestUserMenu mockUser={mockUser} />
          </div>
        </div>

        <div className="text-slate-400">
          <p>Current state: <span className="text-white">{mockUser ? 'User logged in' : 'User logged out'}</span></p>
          <p className="mt-2">This page tests the UserMenu component behavior with different auth states.</p>
        </div>
      </div>
    </div>
  )
}