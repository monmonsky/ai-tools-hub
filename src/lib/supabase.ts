import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Types for our database tables
export type Profile = {
  id: string
  email: string
  full_name: string | null
  avatar_url: string | null
  created_at: string
  updated_at: string
  preferences: {
    favorite_categories: string[]
    theme: 'light' | 'dark' | 'system'
    newsletter: boolean
  } | null
}

export type UserTool = {
  id: string
  user_id: string
  tool_id: string
  action_type: 'favorite' | 'visited' | 'compared'
  created_at: string
  metadata: Record<string, any> | null
}

export type ToolReview = {
  id: string
  user_id: string
  tool_id: string
  rating: number
  review_text: string | null
  pros: string[] | null
  cons: string[] | null
  use_case: string | null
  created_at: string
  updated_at: string
  helpful_count: number
}

export type SearchHistory = {
  id: string
  user_id: string
  query: string
  filters: Record<string, any> | null
  results_count: number
  created_at: string
}