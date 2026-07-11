import { useEffect } from 'react'
import { useToolsStore } from '../store/useToolsStore'
import SearchBar from '../components/SearchBar'
import CategoryFilter from '../components/CategoryFilter'
import ToolCard from '../components/ToolCard'

const Home = () => {
  const { tools, trendingTools, latestTools, loading, fetchAllTools, fetchTrendingTools, fetchLatestTools } = useToolsStore()
  const { searchQuery, selectedCategory } = useToolsStore()

  useEffect(() => {
    fetchAllTools()
    fetchTrendingTools()
    fetchLatestTools()
  }, [])

  const filteredTools = tools.filter((tool) => {
    const matchesSearch = tool.name.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesCategory = selectedCategory === 'All' || tool.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-r from-primary to-secondary text-white py-20">
        <div className="container-custom text-center">
          <h1 className="text-5xl font-bold mb-4">🤖 AI Tools Hub</h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Discover, compare, and access the best AI tools available. Your ultimate directory for artificial intelligence.
          </p>
          <SearchBar />
        </div>
      </section>

      {trendingTools.length > 0 && (
        <section className="py-16">
          <div className="container-custom">
            <h2 className="text-3xl font-bold mb-8">🔥 Trending AI Tools</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {trendingTools.map((tool) => (
                <ToolCard key={tool.id} tool={tool} />
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="container-custom">
          <div className="grid md:grid-cols-4 gap-8">
            <aside className="md:col-span-1">
              <CategoryFilter />
            </aside>

            <div className="md:col-span-3">
              <h2 className="text-3xl font-bold mb-8">All AI Tools</h2>
              {loading ? (
                <div className="text-center py-12">
                  <p className="text-gray-600 dark:text-gray-400">Loading tools...</p>
                </div>
              ) : filteredTools.length > 0 ? (
                <div className="grid md:grid-cols-2 gap-6">
                  {filteredTools.map((tool) => (
                    <ToolCard key={tool.id} tool={tool} />
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <p className="text-gray-600 dark:text-gray-400">No tools found. Try adjusting your filters.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {latestTools.length > 0 && (
        <section className="py-16">
          <div className="container-custom">
            <h2 className="text-3xl font-bold mb-8">✨ Latest AI Tools</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {latestTools.map((tool) => (
                <ToolCard key={tool.id} tool={tool} />
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  )
}

export default Home
