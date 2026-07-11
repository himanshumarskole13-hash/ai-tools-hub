import { useUIStore } from '../store/useUIStore'

const CATEGORIES = ['All', 'Chatbot', 'Image Generation', 'Code', 'Writing', 'Video', 'Music', 'Other']
const PRICING = ['All', 'Free', 'Paid', 'Freemium']

const CategoryFilter = () => {
  const { selectedCategory, setSelectedCategory, selectedPricing, setSelectedPricing } = useUIStore()

  return (
    <div className="space-y-4">
      <div>
        <h3 className="font-semibold mb-3">Category</h3>
        <div className="space-y-2">
          {CATEGORIES.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`block w-full text-left px-4 py-2 rounded-lg transition ${
                selectedCategory === category
                  ? 'bg-primary text-white'
                  : 'bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      <div>
        <h3 className="font-semibold mb-3">Pricing</h3>
        <div className="space-y-2">
          {PRICING.map((pricing) => (
            <button
              key={pricing}
              onClick={() => setSelectedPricing(pricing)}
              className={`block w-full text-left px-4 py-2 rounded-lg transition ${
                selectedPricing === pricing
                  ? 'bg-secondary text-white'
                  : 'bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600'
              }`}
            >
              {pricing}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}

export default CategoryFilter
