import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ExternalLink, Heart, Star } from 'lucide-react'
import { getToolById } from '../services/firestore'
import { useToolsStore } from '../store/useToolsStore'

const ToolDetail = () => {
  const { id } = useParams()
  const [tool, setTool] = useState(null)
  const [loading, setLoading] = useState(true)
  const { toggleFavorite, isFavorite } = useToolsStore()
  const favorite = isFavorite(id)

  useEffect(() => {
    const fetchTool = async () => {
      try {
        const data = await getToolById(id)
        setTool(data)
      } catch (error) {
        console.error(error)
      } finally {
        setLoading(false)
      }
    }
    fetchTool()
  }, [id])

  if (loading) {
    return <div className="container-custom py-20 text-center">Loading...</div>
  }

  if (!tool) {
    return <div className="container-custom py-20 text-center">Tool not found</div>
  }

  const getPricingColor = (pricing) => {
    switch (pricing) {
      case 'Free':
        return 'text-green-600'
      case 'Paid':
        return 'text-blue-600'
      case 'Freemium':
        return 'text-purple-600'
      default:
        return ''
    }
  }

  return (
    <div className="min-h-screen py-12">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <h1 className="text-4xl font-bold mb-4">{tool.name}</h1>
            <p className="text-gray-600 dark:text-gray-400 mb-4">{tool.description}</p>

            <div className="flex flex-wrap gap-4 items-center mb-6">
              <span className={`badge badge-${tool.pricing?.toLowerCase()} ${getPricingColor(tool.pricing)}`}>
                {tool.pricing}
              </span>
              {tool.isTrending && <span className="badge bg-orange-100 dark:bg-orange-900">🔥 Trending</span>}
              {tool.isLatest && <span className="badge bg-green-100 dark:bg-green-900">✨ Latest</span>}

              <div className="flex items-center gap-2">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={18}
                      className={i < Math.floor(tool.rating || 0) ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}
                    />
                  ))}
                </div>
                <span>{tool.rating || 0} ({tool.reviews || 0} reviews)</span>
              </div>
            </div>

            <div className="flex gap-4">
              <a
                href={tool.officialWebsite}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary flex items-center gap-2"
              >
                Visit Official Website <ExternalLink size={20} />
              </a>
              <button
                onClick={() => toggleFavorite(tool.id)}
                className={`px-6 py-2 rounded-lg font-semibold flex items-center gap-2 ${
                  favorite
                    ? 'bg-red-500 text-white'
                    : 'bg-gray-200 dark:bg-gray-700 hover:bg-gray-300'
                }`}
              >
                <Heart size={20} fill={favorite ? 'currentColor' : 'none'} />
                {favorite ? 'Saved' : 'Save'}
              </button>
            </div>
          </div>

          <div className="card mb-8">
            <h2 className="text-2xl font-bold mb-4">Features</h2>
            <ul className="grid md:grid-cols-2 gap-3">
              {tool.features && tool.features.length > 0 ? (
                tool.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="text-primary font-bold">✓</span>
                    <span>{feature}</span>
                  </li>
                ))
              ) : (
                <p className="text-gray-600 dark:text-gray-400">No features listed</p>
              )}
            </ul>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="card">
              <h3 className="font-semibold mb-2">Category</h3>
              <p className="text-gray-600 dark:text-gray-400">{tool.category}</p>
            </div>
            <div className="card">
              <h3 className="font-semibold mb-2">Pricing Model</h3>
              <p className={`font-bold ${getPricingColor(tool.pricing)}`}>{tool.pricing}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ToolDetail
