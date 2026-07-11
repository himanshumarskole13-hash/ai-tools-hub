import { Link } from 'react-router-dom'
import { Heart, ExternalLink, Star } from 'lucide-react'
import { useToolsStore } from '../store/useToolsStore'

const ToolCard = ({ tool }) => {
  const { toggleFavorite, isFavorite } = useToolsStore()
  const favorite = isFavorite(tool.id)

  const getPricingBadgeClass = (pricing) => {
    switch (pricing) {
      case 'Free':
        return 'badge-free'
      case 'Paid':
        return 'badge-paid'
      case 'Freemium':
        return 'badge-freemium'
      default:
        return ''
    }
  }

  return (
    <div className="card hover:shadow-xl">
      <div className="flex justify-between items-start mb-3">
        <div>
          <h3 className="text-lg font-bold text-gray-900 dark:text-white">{tool.name}</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">{tool.category}</p>
        </div>
        <button
          onClick={() => toggleFavorite(tool.id)}
          className={`p-2 rounded-lg transition ${
            favorite
              ? 'bg-red-100 dark:bg-red-900 text-red-500'
              : 'bg-gray-100 dark:bg-gray-700 text-gray-500 hover:bg-gray-200'
          }`}
        >
          <Heart size={20} fill={favorite ? 'currentColor' : 'none'} />
        </button>
      </div>

      <p className="text-sm text-gray-700 dark:text-gray-300 mb-4 line-clamp-2">
        {tool.description}
      </p>

      <div className="flex gap-2 mb-4 flex-wrap">
        <span className={`${getPricingBadgeClass(tool.pricing)}`}>
          {tool.pricing}
        </span>
        {tool.isTrending && (
          <span className="badge bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-100">
            🔥 Trending
          </span>
        )}
      </div>

      <div className="flex items-center gap-2 mb-4">
        <div className="flex items-center">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              size={16}
              className={i < Math.floor(tool.rating || 0) ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}
            />
          ))}
        </div>
        <span className="text-sm text-gray-600 dark:text-gray-400">
          {tool.rating || 0} ({tool.reviews || 0} reviews)
        </span>
      </div>

      <div className="flex gap-3">
        <Link
          to={`/tool/${tool.id}`}
          className="flex-1 text-center py-2 bg-primary text-white rounded-lg hover:bg-secondary transition"
        >
          Learn More
        </Link>
        <a
          href={tool.officialWebsite}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center gap-2 py-2 bg-gray-200 dark:bg-gray-700 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition"
        >
          Visit <ExternalLink size={16} />
        </a>
      </div>
    </div>
  )
}

export default ToolCard
