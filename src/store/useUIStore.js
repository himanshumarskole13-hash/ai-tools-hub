import { create } from 'zustand'

export const useUIStore = create((set) => ({
  isDarkMode: localStorage.getItem('theme') === 'dark' || false,
  searchQuery: '',
  selectedCategory: 'All',
  selectedPricing: 'All',

  toggleDarkMode: () => {
    set((state) => {
      const newDarkMode = !state.isDarkMode
      localStorage.setItem('theme', newDarkMode ? 'dark' : 'light')
      return { isDarkMode: newDarkMode }
    })
  },

  setSearchQuery: (query) => set({ searchQuery: query }),
  setSelectedCategory: (category) => set({ selectedCategory: category }),
  setSelectedPricing: (pricing) => set({ selectedPricing: pricing }),
}))
