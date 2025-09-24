'use client'

import { useState, useEffect } from 'react'
import { useAuth } from '@/contexts/AuthContext'
import { createClient } from '@/lib/supabase/client'
import { User, Settings, Bell, Shield, Palette, Save, Loader2 } from 'lucide-react'

interface UserPreferences {
  favorite_categories: string[]
  theme: 'light' | 'dark' | 'system'
  newsletter: boolean
  email_notifications: boolean
  push_notifications: boolean
  weekly_digest: boolean
  personalized_recommendations: boolean
}

export default function ProfileSettings() {
  const { user, profile, refreshProfile } = useAuth()
  const [activeTab, setActiveTab] = useState('profile')
  const [loading, setLoading] = useState(false)
  const [saving, setSaving] = useState(false)
  const [message, setMessage] = useState('')

  // Profile form state
  const [profileData, setProfileData] = useState({
    full_name: profile?.full_name || '',
    email: user?.email || ''
  })

  // Preferences state
  const [preferences, setPreferences] = useState<UserPreferences>({
    favorite_categories: profile?.preferences?.favorite_categories || [],
    theme: profile?.preferences?.theme || 'system',
    newsletter: profile?.preferences?.newsletter || false,
    email_notifications: true,
    push_notifications: false,
    weekly_digest: true,
    personalized_recommendations: true
  })

  const categories = [
    'Chatbot', 'Image Generation', 'Writing', 'Video Generation',
    'Code Generation', 'Voice/Audio', 'Data Analysis', 'Productivity'
  ]

  const tabs = [
    { id: 'profile', label: 'Profil', icon: User },
    { id: 'preferences', label: 'Preferensi', icon: Settings },
    { id: 'notifications', label: 'Notifikasi', icon: Bell },
    { id: 'privacy', label: 'Privasi', icon: Shield }
  ]

  useEffect(() => {
    if (profile) {
      setProfileData({
        full_name: profile.full_name || '',
        email: user?.email || ''
      })
      setPreferences({
        favorite_categories: profile.preferences?.favorite_categories || [],
        theme: profile.preferences?.theme || 'system',
        newsletter: profile.preferences?.newsletter || false,
        email_notifications: true,
        push_notifications: false,
        weekly_digest: true,
        personalized_recommendations: true
      })
    }
  }, [profile, user])

  const saveProfile = async () => {
    setSaving(true)
    try {
      const supabase = createClient()

      const { error } = await supabase
        .from('profiles')
        .upsert({
          id: user?.id,
          email: user?.email,
          full_name: profileData.full_name,
          updated_at: new Date().toISOString(),
          preferences: {
            favorite_categories: preferences.favorite_categories,
            theme: preferences.theme,
            newsletter: preferences.newsletter
          }
        })

      if (error) throw error

      await refreshProfile()
      setMessage('Profil berhasil disimpan!')
      setTimeout(() => setMessage(''), 3000)
    } catch (error: any) {
      setMessage(`Error: ${error.message}`)
    } finally {
      setSaving(false)
    }
  }

  const toggleCategory = (category: string) => {
    setPreferences(prev => ({
      ...prev,
      favorite_categories: prev.favorite_categories.includes(category)
        ? prev.favorite_categories.filter(c => c !== category)
        : [...prev.favorite_categories, category]
    }))
  }

  return (
    <div className="space-y-6">
      {message && (
        <div className={`p-4 rounded-lg ${
          message.includes('Error')
            ? 'bg-red-500/10 border border-red-500/20 text-red-400'
            : 'bg-green-500/10 border border-green-500/20 text-green-400'
        }`}>
          {message}
        </div>
      )}

      <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-700/50">
        {/* Tabs */}
        <div className="border-b border-slate-700/50">
          <div className="flex overflow-x-auto">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-6 py-4 font-medium transition-colors ${
                  activeTab === tab.id
                    ? 'text-cyan-400 border-b-2 border-cyan-400'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <tab.icon className="w-4 h-4" />
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        <div className="p-6">
          {/* Profile Tab */}
          {activeTab === 'profile' && (
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-white mb-4">
                  Informasi Profil
                </h3>

                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-200 mb-2">
                      Nama Lengkap
                    </label>
                    <input
                      type="text"
                      value={profileData.full_name}
                      onChange={(e) => setProfileData(prev => ({ ...prev, full_name: e.target.value }))}
                      className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent"
                      placeholder="Masukkan nama lengkap"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-200 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      value={profileData.email}
                      disabled
                      className="w-full px-4 py-3 bg-slate-700/30 border border-slate-600/50 rounded-lg text-slate-400"
                    />
                    <p className="text-xs text-slate-500 mt-1">
                      Email tidak dapat diubah
                    </p>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-200 mb-2">
                      Avatar
                    </label>
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 rounded-full bg-gradient-to-r from-cyan-400 to-purple-600 flex items-center justify-center text-white text-xl font-semibold">
                        {profileData.full_name?.charAt(0) || user?.email?.charAt(0) || 'U'}
                      </div>
                      <div className="text-sm text-slate-400">
                        Avatar dibuat otomatis dari inisial nama Anda
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Preferences Tab */}
          {activeTab === 'preferences' && (
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-white mb-4">
                  Kategori Favorit
                </h3>
                <p className="text-slate-400 mb-4">
                  Pilih kategori AI tools yang paling Anda minati untuk mendapatkan rekomendasi yang lebih personal
                </p>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {categories.map((category) => (
                    <button
                      key={category}
                      onClick={() => toggleCategory(category)}
                      className={`p-3 rounded-lg text-sm font-medium transition-colors ${
                        preferences.favorite_categories.includes(category)
                          ? 'bg-cyan-500 text-white'
                          : 'bg-slate-700 text-slate-300 hover:bg-slate-600'
                      }`}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-4">
                  Tema Aplikasi
                </h3>

                <div className="space-y-3">
                  {[
                    { value: 'light', label: 'Terang' },
                    { value: 'dark', label: 'Gelap' },
                    { value: 'system', label: 'Mengikuti Sistem' }
                  ].map((theme) => (
                    <label key={theme.value} className="flex items-center gap-3">
                      <input
                        type="radio"
                        name="theme"
                        value={theme.value}
                        checked={preferences.theme === theme.value}
                        onChange={(e) => setPreferences(prev => ({ ...prev, theme: e.target.value as any }))}
                        className="w-4 h-4 text-cyan-500 bg-slate-700 border-slate-600 focus:ring-cyan-500"
                      />
                      <span className="text-slate-300">{theme.label}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-4">
                  Personalisasi
                </h3>

                <div className="space-y-3">
                  <label className="flex items-center justify-between">
                    <div>
                      <span className="text-slate-300">Rekomendasi Personal</span>
                      <p className="text-sm text-slate-500">Dapatkan rekomendasi AI tools berdasarkan aktivitas Anda</p>
                    </div>
                    <input
                      type="checkbox"
                      checked={preferences.personalized_recommendations}
                      onChange={(e) => setPreferences(prev => ({ ...prev, personalized_recommendations: e.target.checked }))}
                      className="w-4 h-4 text-cyan-500 bg-slate-700 border-slate-600 rounded focus:ring-cyan-500"
                    />
                  </label>
                </div>
              </div>
            </div>
          )}

          {/* Notifications Tab */}
          {activeTab === 'notifications' && (
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-white mb-4">
                  Pengaturan Notifikasi
                </h3>

                <div className="space-y-4">
                  <label className="flex items-center justify-between">
                    <div>
                      <span className="text-slate-300">Newsletter</span>
                      <p className="text-sm text-slate-500">Terima update mingguan tentang AI tools terbaru</p>
                    </div>
                    <input
                      type="checkbox"
                      checked={preferences.newsletter}
                      onChange={(e) => setPreferences(prev => ({ ...prev, newsletter: e.target.checked }))}
                      className="w-4 h-4 text-cyan-500 bg-slate-700 border-slate-600 rounded focus:ring-cyan-500"
                    />
                  </label>

                  <label className="flex items-center justify-between">
                    <div>
                      <span className="text-slate-300">Notifikasi Email</span>
                      <p className="text-sm text-slate-500">Terima notifikasi penting melalui email</p>
                    </div>
                    <input
                      type="checkbox"
                      checked={preferences.email_notifications}
                      onChange={(e) => setPreferences(prev => ({ ...prev, email_notifications: e.target.checked }))}
                      className="w-4 h-4 text-cyan-500 bg-slate-700 border-slate-600 rounded focus:ring-cyan-500"
                    />
                  </label>

                  <label className="flex items-center justify-between">
                    <div>
                      <span className="text-slate-300">Ringkasan Mingguan</span>
                      <p className="text-sm text-slate-500">Terima ringkasan aktivitas dan trending tools</p>
                    </div>
                    <input
                      type="checkbox"
                      checked={preferences.weekly_digest}
                      onChange={(e) => setPreferences(prev => ({ ...prev, weekly_digest: e.target.checked }))}
                      className="w-4 h-4 text-cyan-500 bg-slate-700 border-slate-600 rounded focus:ring-cyan-500"
                    />
                  </label>
                </div>
              </div>
            </div>
          )}

          {/* Privacy Tab */}
          {activeTab === 'privacy' && (
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-white mb-4">
                  Pengaturan Privasi
                </h3>

                <div className="space-y-4">
                  <div className="p-4 bg-slate-700/30 rounded-lg">
                    <h4 className="font-medium text-white mb-2">Data Akun</h4>
                    <p className="text-sm text-slate-400 mb-3">
                      Kelola data akun dan preferensi Anda
                    </p>
                    <button className="px-4 py-2 bg-cyan-500 hover:bg-cyan-600 text-white rounded-lg text-sm transition-colors">
                      Download Data Saya
                    </button>
                  </div>

                  <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-lg">
                    <h4 className="font-medium text-red-400 mb-2">Zona Bahaya</h4>
                    <p className="text-sm text-slate-400 mb-3">
                      Tindakan ini tidak dapat dibatalkan
                    </p>
                    <button className="px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-lg text-sm transition-colors">
                      Hapus Akun
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Save Button */}
          <div className="flex justify-end pt-6 border-t border-slate-700/50">
            <button
              onClick={saveProfile}
              disabled={saving}
              className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white rounded-lg font-medium transition-all disabled:opacity-50"
            >
              {saving ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  Menyimpan...
                </>
              ) : (
                <>
                  <Save className="w-4 h-4" />
                  Simpan Perubahan
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}