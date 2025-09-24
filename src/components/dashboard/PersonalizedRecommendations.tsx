'use client'

import { useEffect, useState } from 'react'
import { useAuth } from '@/contexts/AuthContext'
import Link from 'next/link'
import { Sparkles, Star, TrendingUp, ExternalLink } from 'lucide-react'

interface Recommendation {
  id: string
  name: string
  description: string
  category: string
  rating: number
  reason: string
  image?: string
}

export default function PersonalizedRecommendations() {
  const { user } = useAuth()
  const [recommendations, setRecommendations] = useState<Recommendation[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (user) {
      fetchRecommendations()
    }
  }, [user])

  const fetchRecommendations = async () => {
    try {
      // Mock recommendations based on user activity
      const mockRecommendations: Recommendation[] = [
        {
          id: '1',
          name: 'Stable Diffusion',
          description: 'Generator gambar AI open-source dengan kontrol penuh',
          category: 'Image Generation',
          rating: 4.6,
          reason: 'Berdasarkan minat Anda pada Midjourney'
        },
        {
          id: '2',
          name: 'Notion AI',
          description: 'Asisten AI terintegrasi untuk produktivitas workspace',
          category: 'Productivity',
          rating: 4.4,
          reason: 'Populer di kalangan pengguna ChatGPT'
        },
        {
          id: '3',
          name: 'DeepL Write',
          description: 'AI writing assistant untuk meningkatkan kualitas tulisan',
          category: 'Writing',
          rating: 4.7,
          reason: 'Trending untuk content creator'
        },
        {
          id: '4',
          name: 'Synthesia',
          description: 'Platform AI untuk membuat video dengan avatar virtual',
          category: 'Video Generation',
          rating: 4.3,
          reason: 'Sedang tren untuk business presentation'
        }
      ]

      setRecommendations(mockRecommendations)
    } catch (error) {
      console.error('Error fetching recommendations:', error)
    } finally {
      setLoading(false)
    }
  }

  const getReasonIcon = (reason: string) => {
    if (reason.includes('minat')) return <Star className="w-4 h-4 text-yellow-400" />
    if (reason.includes('populer')) return <TrendingUp className="w-4 h-4 text-green-400" />
    if (reason.includes('trending') || reason.includes('tren')) return <TrendingUp className="w-4 h-4 text-blue-400" />
    return <Sparkles className="w-4 h-4 text-purple-400" />
  }

  return (
    <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-700/50 p-6">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-2 bg-purple-500/10 rounded-lg">
          <Sparkles className="w-5 h-5 text-purple-400" />
        </div>
        <h2 className="text-xl font-semibold text-white">Rekomendasi untuk Anda</h2>
      </div>

      {loading ? (
        <div className="grid md:grid-cols-2 gap-4">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="p-4 bg-slate-700/30 rounded-lg animate-pulse">
              <div className="flex items-start gap-3">
                <div className="w-12 h-12 bg-slate-600 rounded-lg"></div>
                <div className="flex-1">
                  <div className="h-4 bg-slate-600 rounded w-3/4 mb-2"></div>
                  <div className="h-3 bg-slate-600 rounded w-full mb-2"></div>
                  <div className="h-3 bg-slate-600 rounded w-1/2"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="grid md:grid-cols-2 gap-4">
          {recommendations.map((rec) => (
            <div
              key={rec.id}
              className="p-4 bg-slate-700/30 hover:bg-slate-700/50 rounded-lg transition-colors group border border-slate-600/30"
            >
              <div className="flex items-start gap-3">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center text-white font-bold">
                  {rec.name.charAt(0)}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-medium text-white truncate">
                      {rec.name}
                    </h3>
                    <button className="opacity-0 group-hover:opacity-100 transition-opacity text-cyan-400 hover:text-cyan-300">
                      <ExternalLink className="w-4 h-4" />
                    </button>
                  </div>

                  <p className="text-sm text-slate-400 line-clamp-2 mb-3">
                    {rec.description}
                  </p>

                  <div className="flex items-center justify-between mb-3">
                    <span className="px-2 py-1 bg-slate-600/50 text-slate-300 text-xs rounded">
                      {rec.category}
                    </span>
                    <div className="flex items-center gap-1">
                      <Star className="w-3 h-3 text-yellow-400 fill-current" />
                      <span className="text-xs text-slate-400">
                        {rec.rating}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 text-xs text-slate-500">
                    {getReasonIcon(rec.reason)}
                    <span>{rec.reason}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      <div className="mt-6 text-center">
        <Link
          href="/tools?recommended=true"
          className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-500 to-cyan-600 hover:from-purple-600 hover:to-cyan-700 text-white rounded-lg font-medium transition-all duration-200"
        >
          <Sparkles className="w-4 h-4" />
          Lihat Semua Rekomendasi
        </Link>
      </div>
    </div>
  )
}