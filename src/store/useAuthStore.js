import { create } from 'zustand'
import { onAuthChange, signInWithGoogle, logOut } from '../services/auth'

export const useAuthStore = create((set) => ({
  user: null,
  loading: true,
  error: null,

  initAuth: () => {
    onAuthChange((user) => {
      set({ user, loading: false })
    })
  },

  signIn: async () => {
    try {
      set({ loading: true })
      const user = await signInWithGoogle()
      set({ user, error: null })
      return user
    } catch (error) {
      set({ error: error.message })
      throw error
    } finally {
      set({ loading: false })
    }
  },

  logout: async () => {
    try {
      set({ loading: true })
      await logOut()
      set({ user: null })
    } catch (error) {
      set({ error: error.message })
      throw error
    } finally {
      set({ loading: false })
    }
  },
}))
