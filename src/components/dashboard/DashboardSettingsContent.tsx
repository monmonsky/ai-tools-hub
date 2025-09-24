'use client'

import { useState } from 'react'
import { useAuth } from '@/contexts/AuthContext'
import { ThemeToggle } from '../theme-toggle'
import {
  User,
  Bell,
  Shield,
  Palette,
  Globe,
  Save,
  Eye,
  EyeOff
} from 'lucide-react'

export default function DashboardSettingsContent() {
  const { user, profile } = useAuth()
  const [activeTab, setActiveTab] = useState('profile')
  const [isLoading, setIsLoading] = useState(false)

  const tabs = [
    { id: 'profile', label: 'Profil', icon: User },
    { id: 'notifications', label: 'Notifikasi', icon: Bell },
    { id: 'privacy', label: 'Privasi', icon: Shield },
    { id: 'appearance', label: 'Tampilan', icon: Palette },
    { id: 'language', label: 'Bahasa', icon: Globe }
  ]

  const handleSave = async () => {
    setIsLoading(true)
    // Simulate save operation
    await new Promise(resolve => setTimeout(resolve, 1000))
    setIsLoading(false)
  }

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Pengaturan</h1>
        <p className="text-gray-600 dark:text-slate-400 mt-2">
          Kelola pengaturan akun dan preferensi Anda
        </p>
      </div>

      <div className="grid lg:grid-cols-4 gap-8">
        {/* Sidebar */}
        <div className="lg:col-span-1">
          <nav className="space-y-2">
            {tabs.map((tab) => {
              const Icon = tab.icon
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`w-full flex items-center gap-3 px-4 py-3 text-left rounded-lg transition-all duration-200 ${
                    activeTab === tab.id
                      ? 'bg-gradient-to-r from-cyan-50 to-purple-50 dark:from-cyan-900/20 dark:to-purple-900/20 text-cyan-600 dark:text-cyan-400 border border-cyan-200 dark:border-cyan-800'
                      : 'text-gray-700 dark:text-slate-300 hover:bg-gray-100 dark:hover:bg-slate-800'
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  {tab.label}
                </button>
              )
            })}
          </nav>
        </div>

        {/* Content */}
        <div className="lg:col-span-3">
          <div className="bg-white dark:bg-slate-800 rounded-xl border border-gray-200 dark:border-slate-700 p-8">
            {activeTab === 'profile' && (
              <div className="space-y-6">
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Informasi Profil</h2>

                <div className="flex items-center gap-4">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-r from-cyan-400 to-purple-600 flex items-center justify-center">
                    <span className="text-white text-2xl font-bold">
                      {profile?.full_name?.charAt(0) || user?.email?.charAt(0) || 'U'}
                    </span>
                  </div>
                  <div>
                    <button className="px-4 py-2 text-sm bg-gray-100 dark:bg-slate-700 text-gray-700 dark:text-slate-300 rounded-lg hover:bg-gray-200 dark:hover:bg-slate-600 transition-colors">
                      Ubah Foto
                    </button>
                  </div>
                </div>

                <div className="grid gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-slate-300 mb-2">
                      Nama Lengkap
                    </label>
                    <input
                      type="text"
                      defaultValue={profile?.full_name || ''}
                      className="w-full px-4 py-3 border border-gray-200 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-slate-300 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      defaultValue={user?.email || ''}
                      disabled
                      className="w-full px-4 py-3 border border-gray-200 dark:border-slate-600 rounded-lg bg-gray-50 dark:bg-slate-600 text-gray-500 dark:text-slate-400"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-slate-300 mb-2">
                      Bio
                    </label>
                    <textarea
                      rows={4}
                      placeholder="Ceritakan sedikit tentang diri Anda..."
                      className="w-full px-4 py-3 border border-gray-200 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                    />
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'appearance' && (
              <div className="space-y-6">
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Pengaturan Tampilan</h2>

                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-medium text-gray-900 dark:text-white">Mode Gelap/Terang</h3>
                      <p className="text-sm text-gray-600 dark:text-slate-400">
                        Pilih tema yang Anda sukai
                      </p>
                    </div>
                    <ThemeToggle />
                  </div>

                  <div className="border-t border-gray-200 dark:border-slate-600 pt-6">
                    <h3 className="font-medium text-gray-900 dark:text-white mb-4">Warna Aksen</h3>
                    <div className="grid grid-cols-6 gap-3">
                      {[
                        'bg-gradient-to-r from-cyan-500 to-blue-500',
                        'bg-gradient-to-r from-purple-500 to-pink-500',
                        'bg-gradient-to-r from-green-500 to-emerald-500',
                        'bg-gradient-to-r from-orange-500 to-red-500',
                        'bg-gradient-to-r from-indigo-500 to-purple-500',
                        'bg-gradient-to-r from-pink-500 to-rose-500'
                      ].map((color, index) => (
                        <button
                          key={index}
                          className={`w-12 h-12 rounded-lg ${color} hover:scale-110 transition-transform duration-200`}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Save Button */}
            <div className="flex justify-end pt-6 border-t border-gray-200 dark:border-slate-600 mt-8">
              <button
                onClick={handleSave}
                disabled={isLoading}
                className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-600 to-purple-600 text-white rounded-lg hover:from-cyan-700 hover:to-purple-700 transition-all duration-200 disabled:opacity-50"
              >
                {isLoading ? (
                  <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                ) : (
                  <Save className="w-4 h-4" />
                )}
                {isLoading ? 'Menyimpan...' : 'Simpan Perubahan'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}