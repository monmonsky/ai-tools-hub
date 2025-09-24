'use client'

import { useState } from 'react'
import Navigation from '@/components/navigation'

export default function OAuthDebugPage() {
  const [currentOrigin, setCurrentOrigin] = useState('')
  const [envSiteUrl, setEnvSiteUrl] = useState('')

  useState(() => {
    if (typeof window !== 'undefined') {
      setCurrentOrigin(window.location.origin)
      setEnvSiteUrl(process.env.NEXT_PUBLIC_SITE_URL || 'Not set')
    }
  })

  const expectedRedirectURLs = [
    `${envSiteUrl || currentOrigin}/auth/callback`,
    `${currentOrigin}/auth/callback`
  ]

  return (
    <div className="min-h-screen bg-slate-900">
      <Navigation />

      <div className="relative pt-24 pb-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-slate-800/50 backdrop-blur-xl rounded-xl border border-slate-700/50 p-8">
            <h1 className="text-3xl font-bold text-white mb-6">
              OAuth Debug Information
            </h1>

            <div className="space-y-6">
              <div className="p-4 bg-slate-700/30 rounded-lg">
                <h3 className="text-lg font-semibold text-white mb-3">Environment Information</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-slate-400">Current Origin:</span>
                    <span className="text-cyan-400 font-mono">{currentOrigin}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">NEXT_PUBLIC_SITE_URL:</span>
                    <span className="text-cyan-400 font-mono">{envSiteUrl}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Node Environment:</span>
                    <span className="text-cyan-400 font-mono">{process.env.NODE_ENV}</span>
                  </div>
                </div>
              </div>

              <div className="p-4 bg-amber-500/10 border border-amber-500/20 rounded-lg">
                <h3 className="text-lg font-semibold text-amber-300 mb-3">Expected OAuth Redirect URLs</h3>
                <div className="space-y-2">
                  {expectedRedirectURLs.map((url, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-amber-400 rounded-full"></span>
                      <code className="text-amber-200 font-mono text-sm bg-slate-800 px-2 py-1 rounded">
                        {url}
                      </code>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-4 bg-blue-500/10 border border-blue-500/20 rounded-lg">
                <h3 className="text-lg font-semibold text-blue-300 mb-3">Supabase OAuth Configuration</h3>
                <div className="space-y-3 text-sm text-slate-300">
                  <div>
                    <p className="font-medium text-white mb-2">Required Callback URLs in Supabase:</p>
                    <code className="block bg-slate-800 p-2 rounded text-blue-300 font-mono">
                      https://uthgchakkqsterqjjfhr.supabase.co/auth/v1/callback
                    </code>
                  </div>

                  <div>
                    <p className="font-medium text-white mb-2">Site URL in Supabase Authentication Settings:</p>
                    <div className="space-y-1">
                      <code className="block bg-slate-800 p-2 rounded text-blue-300 font-mono">
                        https://aikita.id
                      </code>
                      <code className="block bg-slate-800 p-2 rounded text-blue-300 font-mono">
                        http://localhost:3001
                      </code>
                    </div>
                  </div>

                  <div>
                    <p className="font-medium text-white mb-2">Additional Redirect URLs:</p>
                    <div className="space-y-1">
                      <code className="block bg-slate-800 p-2 rounded text-blue-300 font-mono">
                        https://aikita.id/auth/callback
                      </code>
                      <code className="block bg-slate-800 p-2 rounded text-blue-300 font-mono">
                        http://localhost:3001/auth/callback
                      </code>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-lg">
                <h3 className="text-lg font-semibold text-red-300 mb-3">Common Issues</h3>
                <ul className="space-y-2 text-sm text-slate-300">
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-red-400 rounded-full mt-1.5 flex-shrink-0"></span>
                    <span>OAuth providers redirecting to localhost in production = Site URLs not configured properly in Supabase</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-red-400 rounded-full mt-1.5 flex-shrink-0"></span>
                    <span>Check Supabase Authentication → URL Configuration → Site URL</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-red-400 rounded-full mt-1.5 flex-shrink-0"></span>
                    <span>Check Google/GitHub OAuth app redirect URIs</span>
                  </li>
                </ul>
              </div>

              <div className="pt-4">
                <a
                  href="https://supabase.com/dashboard/project/uthgchakkqsterqjjfhr/auth/url-configuration"
                  target="_blank"
                  className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-lg font-medium transition-all hover:from-cyan-600 hover:to-purple-700"
                >
                  Open Supabase URL Configuration
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}