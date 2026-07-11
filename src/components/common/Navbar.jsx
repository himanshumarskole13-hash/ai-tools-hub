import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Menu, X, Moon, Sun } from 'lucide-react'
import { useAuthStore } from '../../store/useAuthStore'
import { useUIStore } from '../../store/useUIStore'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const { user, signIn, logout } = useAuthStore()
  const { isDarkMode, toggleDarkMode } = useUIStore()

  return (
    <nav className="bg-white dark:bg-gray-800 shadow-md sticky top-0 z-50">
      <div className="container-custom py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold text-primary">
            🤖 AI Tools Hub
          </Link>

          <div className="hidden md:flex items-center gap-8">
            <Link to="/" className="hover:text-primary transition">
              Home
            </Link>
            <Link to="/about" className="hover:text-primary transition">
              About
            </Link>
            <Link to="/contact" className="hover:text-primary transition">
              Contact
            </Link>
            {user?.email === 'admin@example.com' && (
              <Link to="/admin" className="text-accent font-semibold">
                Admin
              </Link>
            )}
          </div>

          <div className="hidden md:flex items-center gap-4">
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-lg bg-gray-200 dark:bg-gray-700"
            >
              {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            {user ? (
              <div className="flex items-center gap-3">
                <img
                  src={user.photoURL || 'https://via.placeholder.com/32'}
                  alt={user.displayName}
                  className="w-8 h-8 rounded-full"
                />
                <button
                  onClick={logout}
                  className="btn-secondary text-sm"
                >
                  Logout
                </button>
              </div>
            ) : (
              <button onClick={signIn} className="btn-primary text-sm">
                Sign In
              </button>
            )}
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-3">
            <Link to="/" className="block hover:text-primary">
              Home
            </Link>
            <Link to="/about" className="block hover:text-primary">
              About
            </Link>
            <Link to="/contact" className="block hover:text-primary">
              Contact
            </Link>
            {user?.email === 'admin@example.com' && (
              <Link to="/admin" className="block text-accent font-semibold">
                Admin
              </Link>
            )}
            <button
              onClick={toggleDarkMode}
              className="w-full text-left py-2 hover:text-primary"
            >
              {isDarkMode ? 'Light Mode' : 'Dark Mode'}
            </button>
            {user ? (
              <button
                onClick={logout}
                className="w-full btn-secondary text-sm"
              >
                Logout
              </button>
            ) : (
              <button onClick={signIn} className="w-full btn-primary text-sm">
                Sign In
              </button>
            )}
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar
