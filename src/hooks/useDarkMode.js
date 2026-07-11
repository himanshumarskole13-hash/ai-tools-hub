import { useUIStore } from '../store/useUIStore'

export const useDarkMode = () => {
  const { isDarkMode, toggleDarkMode } = useUIStore()
  return { isDarkMode, toggleDarkMode }
}
