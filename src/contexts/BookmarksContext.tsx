'use client'

import { createContext, useContext, useEffect, useState } from 'react'
import { useAuth } from './AuthContext'

interface BookmarkFolder {
  id: string
  name: string
  color: string
  icon: string
  created_at: string
}

interface Bookmark {
  id: string
  user_id: string
  url: string
  title: string
  description: string
  folder_id?: string
  tags: string[]
  favicon?: string
  created_at: string
  updated_at: string
}

interface BookmarksContextType {
  bookmarks: Bookmark[]
  folders: BookmarkFolder[]
  loading: boolean
  addBookmark: (bookmark: Omit<Bookmark, 'id' | 'user_id' | 'created_at' | 'updated_at'>) => Promise<boolean>
  removeBookmark: (id: string) => Promise<boolean>
  updateBookmark: (id: string, updates: Partial<Bookmark>) => Promise<boolean>
  createFolder: (folder: Omit<BookmarkFolder, 'id' | 'created_at'>) => Promise<boolean>
  deleteFolder: (id: string) => Promise<boolean>
  moveBookmarkToFolder: (bookmarkId: string, folderId?: string) => Promise<boolean>
  getBookmarksByFolder: (folderId?: string) => Bookmark[]
  refreshBookmarks: () => Promise<void>
}

const BookmarksContext = createContext<BookmarksContextType | undefined>(undefined)

export function BookmarksProvider({ children }: { children: React.ReactNode }) {
  const { user } = useAuth()
  const [bookmarks, setBookmarks] = useState<Bookmark[]>([])
  const [folders, setFolders] = useState<BookmarkFolder[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (user) {
      loadBookmarks()
    } else {
      setBookmarks([])
      setFolders([])
      setLoading(false)
    }
  }, [user])

  const loadBookmarks = async () => {
    if (!user) return

    try {
      setLoading(true)

      // Load from localStorage for now
      const localBookmarks = localStorage.getItem(`bookmarks_${user.id}`)
      const localFolders = localStorage.getItem(`bookmark_folders_${user.id}`)

      if (localBookmarks && localFolders) {
        setBookmarks(JSON.parse(localBookmarks))
        setFolders(JSON.parse(localFolders))
      } else {
        // Initialize with mock data
        const mockFolders: BookmarkFolder[] = [
          {
            id: 'folder_1',
            name: 'AI Writing',
            color: '#3b82f6',
            icon: '✍️',
            created_at: new Date().toISOString()
          },
          {
            id: 'folder_2',
            name: 'Image Generation',
            color: '#8b5cf6',
            icon: '🎨',
            created_at: new Date().toISOString()
          },
          {
            id: 'folder_3',
            name: 'Productivity',
            color: '#10b981',
            icon: '⚡',
            created_at: new Date().toISOString()
          }
        ]

        const mockBookmarks: Bookmark[] = [
          {
            id: 'bookmark_1',
            user_id: user.id,
            url: 'https://chatgpt.com',
            title: 'ChatGPT - OpenAI',
            description: 'Advanced AI chatbot for conversations and assistance',
            folder_id: 'folder_1',
            tags: ['chatbot', 'ai', 'writing'],
            favicon: '🤖',
            created_at: new Date().toISOString(),
            updated_at: new Date().toISOString()
          },
          {
            id: 'bookmark_2',
            user_id: user.id,
            url: 'https://midjourney.com',
            title: 'Midjourney',
            description: 'AI art generator creating stunning images from text',
            folder_id: 'folder_2',
            tags: ['art', 'image', 'generator'],
            favicon: '🎨',
            created_at: new Date().toISOString(),
            updated_at: new Date().toISOString()
          },
          {
            id: 'bookmark_3',
            user_id: user.id,
            url: 'https://notion.so',
            title: 'Notion',
            description: 'All-in-one workspace for productivity',
            folder_id: 'folder_3',
            tags: ['productivity', 'workspace', 'notes'],
            favicon: '📝',
            created_at: new Date().toISOString(),
            updated_at: new Date().toISOString()
          },
          {
            id: 'bookmark_4',
            user_id: user.id,
            url: 'https://claude.ai',
            title: 'Claude AI',
            description: 'AI assistant for analysis and tasks',
            tags: ['ai', 'assistant', 'analysis'],
            favicon: '🧠',
            created_at: new Date().toISOString(),
            updated_at: new Date().toISOString()
          }
        ]

        setFolders(mockFolders)
        setBookmarks(mockBookmarks)
        localStorage.setItem(`bookmark_folders_${user.id}`, JSON.stringify(mockFolders))
        localStorage.setItem(`bookmarks_${user.id}`, JSON.stringify(mockBookmarks))
      }
    } catch (error) {
      console.error('Error loading bookmarks:', error)
    } finally {
      setLoading(false)
    }
  }

  const addBookmark = async (bookmarkData: Omit<Bookmark, 'id' | 'user_id' | 'created_at' | 'updated_at'>): Promise<boolean> => {
    if (!user) return false

    try {
      const newBookmark: Bookmark = {
        ...bookmarkData,
        id: `bookmark_${Date.now()}`,
        user_id: user.id,
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString()
      }

      const updatedBookmarks = [newBookmark, ...bookmarks]
      setBookmarks(updatedBookmarks)
      localStorage.setItem(`bookmarks_${user.id}`, JSON.stringify(updatedBookmarks))

      return true
    } catch (error) {
      console.error('Error adding bookmark:', error)
      return false
    }
  }

  const removeBookmark = async (id: string): Promise<boolean> => {
    if (!user) return false

    try {
      const updatedBookmarks = bookmarks.filter(bookmark => bookmark.id !== id)
      setBookmarks(updatedBookmarks)
      localStorage.setItem(`bookmarks_${user.id}`, JSON.stringify(updatedBookmarks))

      return true
    } catch (error) {
      console.error('Error removing bookmark:', error)
      return false
    }
  }

  const updateBookmark = async (id: string, updates: Partial<Bookmark>): Promise<boolean> => {
    if (!user) return false

    try {
      const updatedBookmarks = bookmarks.map(bookmark =>
        bookmark.id === id
          ? { ...bookmark, ...updates, updated_at: new Date().toISOString() }
          : bookmark
      )

      setBookmarks(updatedBookmarks)
      localStorage.setItem(`bookmarks_${user.id}`, JSON.stringify(updatedBookmarks))

      return true
    } catch (error) {
      console.error('Error updating bookmark:', error)
      return false
    }
  }

  const createFolder = async (folderData: Omit<BookmarkFolder, 'id' | 'created_at'>): Promise<boolean> => {
    if (!user) return false

    try {
      const newFolder: BookmarkFolder = {
        ...folderData,
        id: `folder_${Date.now()}`,
        created_at: new Date().toISOString()
      }

      const updatedFolders = [...folders, newFolder]
      setFolders(updatedFolders)
      localStorage.setItem(`bookmark_folders_${user.id}`, JSON.stringify(updatedFolders))

      return true
    } catch (error) {
      console.error('Error creating folder:', error)
      return false
    }
  }

  const deleteFolder = async (id: string): Promise<boolean> => {
    if (!user) return false

    try {
      // Move bookmarks out of folder first
      const updatedBookmarks = bookmarks.map(bookmark =>
        bookmark.folder_id === id
          ? { ...bookmark, folder_id: undefined }
          : bookmark
      )

      const updatedFolders = folders.filter(folder => folder.id !== id)

      setBookmarks(updatedBookmarks)
      setFolders(updatedFolders)
      localStorage.setItem(`bookmarks_${user.id}`, JSON.stringify(updatedBookmarks))
      localStorage.setItem(`bookmark_folders_${user.id}`, JSON.stringify(updatedFolders))

      return true
    } catch (error) {
      console.error('Error deleting folder:', error)
      return false
    }
  }

  const moveBookmarkToFolder = async (bookmarkId: string, folderId?: string): Promise<boolean> => {
    return await updateBookmark(bookmarkId, { folder_id: folderId })
  }

  const getBookmarksByFolder = (folderId?: string): Bookmark[] => {
    if (folderId) {
      return bookmarks.filter(bookmark => bookmark.folder_id === folderId)
    } else {
      return bookmarks.filter(bookmark => !bookmark.folder_id)
    }
  }

  const refreshBookmarks = async () => {
    await loadBookmarks()
  }

  const value = {
    bookmarks,
    folders,
    loading,
    addBookmark,
    removeBookmark,
    updateBookmark,
    createFolder,
    deleteFolder,
    moveBookmarkToFolder,
    getBookmarksByFolder,
    refreshBookmarks
  }

  return (
    <BookmarksContext.Provider value={value}>
      {children}
    </BookmarksContext.Provider>
  )
}

export const useBookmarks = () => {
  const context = useContext(BookmarksContext)
  if (context === undefined) {
    throw new Error('useBookmarks must be used within a BookmarksProvider')
  }
  return context
}