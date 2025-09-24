'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useAuth } from '@/contexts/AuthContext'
import {
  LayoutDashboard,
  Heart,
  Search,
  Settings,
  LogOut,
  ChevronLeft,
  ChevronRight,
  BarChart3,
  Bookmark,
  Clock,
  User,
  Menu,
  X
} from 'lucide-react'
import { Loader2 } from 'lucide-react'

const sidebarItems = [
  {
    label: 'Dashboard',
    href: '/dashboard',
    icon: LayoutDashboard
  },
  {
    label: 'Favorit',
    href: '/dashboard/favorites',
    icon: Heart
  },
  {
    label: 'Riwayat Pencarian',
    href: '/dashboard/search-history',
    icon: Clock
  },
  {
    label: 'Bookmark',
    href: '/dashboard/bookmarks',
    icon: Bookmark
  },
  {
    label: 'Statistik',
    href: '/dashboard/analytics',
    icon: BarChart3
  }
]

const bottomItems = [
  {
    label: 'Profil',
    href: '/dashboard/profile',
    icon: User
  },
  {
    label: 'Pengaturan',
    href: '/dashboard/settings',
    icon: Settings
  }
]

export default function DashboardSidebar() {
  const [isCollapsed, setIsCollapsed] = useState(false)
  const [isMobileOpen, setIsMobileOpen] = useState(false)
  const pathname = usePathname()
  const { user, profile, signOut } = useAuth()
  const [isSigningOut, setIsSigningOut] = useState(false)

  const handleSignOut = async () => {
    setIsSigningOut(true)
    await signOut()
    setIsSigningOut(false)
  }

  const SidebarContent = () => (
    <div className="flex flex-col h-full">
      {/* Logo & Brand */}
      <div className="flex items-center gap-3 p-6 border-b border-gray-200 dark:border-slate-700">
        <div className="w-8 h-8 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
          <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
          </svg>
        </div>
        {!isCollapsed && (
          <div className="flex flex-col min-w-0">
            <span className="text-lg font-bold bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
              Aikita
            </span>
            <span className="text-xs text-gray-500 dark:text-slate-400">
              Dashboard
            </span>
          </div>
        )}
      </div>

      {/* User Info */}
      {!isCollapsed && user && (
        <div className="p-4 border-b border-gray-200 dark:border-slate-700">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-r from-cyan-400 to-purple-600 flex items-center justify-center">
              <span className="text-white text-sm font-semibold">
                {profile?.full_name?.charAt(0) || user.email?.charAt(0) || 'U'}
              </span>
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-gray-900 dark:text-white truncate">
                {profile?.full_name || 'User'}
              </p>
              <p className="text-xs text-gray-500 dark:text-slate-400 truncate">
                {user.email}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Navigation Items */}
      <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
        {sidebarItems.map((item) => {
          const isActive = pathname === item.href
          const Icon = item.icon

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`
                flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all duration-200
                ${isActive
                  ? 'bg-gradient-to-r from-cyan-500/10 to-purple-600/10 text-cyan-600 dark:text-cyan-400 border border-cyan-200 dark:border-cyan-800'
                  : 'text-gray-700 dark:text-slate-300 hover:text-cyan-600 dark:hover:text-cyan-400 hover:bg-gray-100 dark:hover:bg-slate-800'
                }
              `}
              onClick={() => setIsMobileOpen(false)}
            >
              <Icon className="w-5 h-5 flex-shrink-0" />
              {!isCollapsed && (
                <span className="truncate">{item.label}</span>
              )}
              {isActive && !isCollapsed && (
                <div className="w-2 h-2 bg-cyan-500 rounded-full ml-auto"></div>
              )}
            </Link>
          )
        })}
      </nav>

      {/* Bottom Items */}
      <div className="p-4 border-t border-gray-200 dark:border-slate-700 space-y-2">
        {bottomItems.map((item) => {
          const isActive = pathname === item.href
          const Icon = item.icon

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`
                flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all duration-200
                ${isActive
                  ? 'bg-gradient-to-r from-cyan-500/10 to-purple-600/10 text-cyan-600 dark:text-cyan-400 border border-cyan-200 dark:border-cyan-800'
                  : 'text-gray-700 dark:text-slate-300 hover:text-cyan-600 dark:hover:text-cyan-400 hover:bg-gray-100 dark:hover:bg-slate-800'
                }
              `}
              onClick={() => setIsMobileOpen(false)}
            >
              <Icon className="w-5 h-5 flex-shrink-0" />
              {!isCollapsed && (
                <span className="truncate">{item.label}</span>
              )}
            </Link>
          )
        })}

        {/* Sign Out */}
        <button
          onClick={handleSignOut}
          disabled={isSigningOut}
          className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20 transition-all duration-200 disabled:opacity-50"
        >
          {isSigningOut ? (
            <Loader2 className="w-5 h-5 animate-spin flex-shrink-0" />
          ) : (
            <LogOut className="w-5 h-5 flex-shrink-0" />
          )}
          {!isCollapsed && (
            <span>{isSigningOut ? 'Keluar...' : 'Keluar'}</span>
          )}
        </button>
      </div>

      {/* Collapse Toggle - Desktop Only */}
      <div className="hidden lg:block p-4 border-t border-gray-200 dark:border-slate-700">
        <button
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="w-full flex items-center justify-center gap-2 px-3 py-2 rounded-lg text-sm font-medium text-gray-600 dark:text-slate-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-slate-800 transition-all duration-200"
        >
          {isCollapsed ? (
            <ChevronRight className="w-4 h-4" />
          ) : (
            <>
              <ChevronLeft className="w-4 h-4" />
              <span>Tutup</span>
            </>
          )}
        </button>
      </div>
    </div>
  )

  return (
    <>
      {/* Desktop Sidebar */}
      <aside className={`
        hidden lg:flex flex-col bg-white dark:bg-slate-800 border-r border-gray-200 dark:border-slate-700 transition-all duration-300
        ${isCollapsed ? 'w-20' : 'w-72'}
      `}>
        <SidebarContent />
      </aside>

      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsMobileOpen(true)}
        className="fixed top-4 left-4 z-50 lg:hidden p-2 bg-white dark:bg-slate-800 rounded-lg shadow-lg border border-gray-200 dark:border-slate-700"
      >
        <Menu className="w-5 h-5 text-gray-600 dark:text-slate-400" />
      </button>

      {/* Mobile Sidebar Overlay */}
      {isMobileOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div
            className="absolute inset-0 bg-black/50"
            onClick={() => setIsMobileOpen(false)}
          />
          <aside className="absolute left-0 top-0 h-full w-72 bg-white dark:bg-slate-800 shadow-xl">
            <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-slate-700">
              <span className="text-lg font-semibold text-gray-900 dark:text-white">Menu</span>
              <button
                onClick={() => setIsMobileOpen(false)}
                className="p-1 hover:bg-gray-100 dark:hover:bg-slate-700 rounded"
              >
                <X className="w-5 h-5 text-gray-600 dark:text-slate-400" />
              </button>
            </div>
            <SidebarContent />
          </aside>
        </div>
      )}
    </>
  )
}