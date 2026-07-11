import { create } from 'zustand'
import { getAllTools, getTrendingTools, getLatestTools } from '../services/firestore'

export const useToolsStore = create((set, get) => ({
  tools: [],
  trendingTools: [],
  latestTools: [],
  loading: false,
  error: null,
  favorites: JSON.parse(localStorage.getItem('favorites')) || [],

  fetchAllTools: async () => {
    try {
      set({ loading: true })
      const tools = await getAllTools()
      set({ tools, error: null })
    } catch (error) {
      set({ error: error.message })
    } finally {
      set({ loading: false })
    }
  },

  fetchTrendingTools: async () => {
    try {
      set({ loading: true })
      const trendingTools = await getTrendingTools()
      set({ trendingTools, error: null })
    } catch (error) {
      set({ error: error.message })
    } finally {
      set({ loading: false })
    }
  },

  fetchLatestTools: async () => {
    try {
      set({ loading: true })
      const latestTools = await getLatestTools()
      set({ latestTools, error: null })
    } catch (error) {
      set({ error: error.message })
    } finally {
      set({ loading: false })
    }
  },

  toggleFavorite: (toolId) => {
    const { favorites } = get()
    const updatedFavorites = favorites.includes(toolId)
      ? favorites.filter(id => id !== toolId)
      : [...favorites, toolId]
    set({ favorites: updatedFavorites })
    localStorage.setItem('favorites', JSON.stringify(updatedFavorites))
  },

  isFavorite: (toolId) => {
    return get().favorites.includes(toolId)
  },
}))
