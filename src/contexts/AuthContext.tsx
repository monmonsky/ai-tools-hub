'use client'

import { createContext, useContext, useEffect, useState } from 'react'
import { User, Session } from '@supabase/supabase-js'
import { createClient } from '@/lib/supabase/client'
import { Profile } from '@/lib/supabase'

interface AuthContextType {
  user: User | null
  session: Session | null
  profile: Profile | null
  loading: boolean
  signOut: () => Promise<void>
  refreshProfile: () => Promise<void>
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [session, setSession] = useState<Session | null>(null)
  const [profile, setProfile] = useState<Profile | null>(null)
  const [loading, setLoading] = useState(true)
  const [supabase] = useState(() => {
    try {
      const client = createClient()
      console.log('AuthContext - Supabase client created successfully')
      return client
    } catch (error) {
      console.warn('Supabase client creation failed:', error)
      return null
    }
  })

  const fetchProfile = async (userId: string) => {
    if (!supabase) return

    try {
      const { data, error } = await supabase
        .from('profiles')
        .select('*')
        .eq('id', userId)
        .single()

      if (error && error.code !== 'PGRST116') {
        console.error('Error fetching profile:', error)
        return
      }

      setProfile(data || null)
    } catch (error) {
      console.error('Error fetching profile:', error)
    }
  }

  const refreshProfile = async () => {
    if (user) {
      await fetchProfile(user.id)
    }
  }

  const signOut = async () => {
    if (!supabase) return

    const { error } = await supabase.auth.signOut()
    if (error) {
      console.error('Error signing out:', error)
    }
  }

  useEffect(() => {
    if (!supabase) {
      setLoading(false)
      return
    }

    let mounted = true

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange(async (event, session) => {
      if (!mounted) return

      console.log('AuthContext - Auth state change:', event, 'session:', session)
      setSession(session)
      setUser(session?.user ?? null)

      if (session?.user) {
        console.log('AuthContext - User found, fetching profile for:', session.user.email)
        await fetchProfile(session.user.id)
      } else {
        console.log('AuthContext - No user, clearing profile')
        setProfile(null)
      }

      setLoading(false)
    })

    // Get initial session
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (!mounted) return

      console.log('AuthContext - Initial session:', session)
      setSession(session)
      setUser(session?.user ?? null)

      if (session?.user) {
        console.log('AuthContext - Initial user found:', session.user.email)
        fetchProfile(session.user.id)
      } else {
        console.log('AuthContext - No initial session found')
        setLoading(false)
      }
    }).catch((error) => {
      console.error('AuthContext - Error getting initial session:', error)
      if (mounted) {
        setLoading(false)
      }
    })

    return () => {
      mounted = false
      subscription.unsubscribe()
    }
  }, [supabase])

  const value = {
    user,
    session,
    profile,
    loading,
    signOut,
    refreshProfile,
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}