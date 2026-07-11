import { useState, useEffect } from 'react'
import { useAuthStore } from '../store/useAuthStore'
import { getAllTools, addTool, updateTool, deleteTool } from '../services/firestore'
import { Plus, Trash2, Edit } from 'lucide-react'

const Admin = () => {
  const { user } = useAuthStore()
  const [tools, setTools] = useState([])
  const [loading, setLoading] = useState(true)
  const [isFormOpen, setIsFormOpen] = useState(false)
  const [editingTool, setEditingTool] = useState(null)
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    category: 'Chatbot',
    pricing: 'Free',
    officialWebsite: '',
    features: [],
    rating: 5,
    reviews: 0,
    isTrending: false,
    isLatest: false,
  })

  useEffect(() => {
    if (user?.email !== 'admin@example.com') {
      return
    }
    fetchTools()
  }, [user])

  const fetchTools = async () => {
    try {
      setLoading(true)
      const data = await getAllTools()
      setTools(data)
    } catch (error) {
      console.error(error)
    } finally {
      setLoading(false)
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      if (editingTool) {
        await updateTool(editingTool.id, formData)
      } else {
        await addTool(formData)
      }
      fetchTools()
      resetForm()
    } catch (error) {
      console.error(error)
    }
  }

  const handleDelete = async (toolId) => {
    if (window.confirm('Are you sure?')) {
      try {
        await deleteTool(toolId)
        fetchTools()
      } catch (error) {
        console.error(error)
      }
    }
  }

  const resetForm = () => {
    setFormData({
      name: '',
      description: '',
      category: 'Chatbot',
      pricing: 'Free',
      officialWebsite: '',
      features: [],
      rating: 5,
      reviews: 0,
      isTrending: false,
      isLatest: false,
    })
    setEditingTool(null)
    setIsFormOpen(false)
  }

  if (user?.email !== 'admin@example.com') {
    return (
      <div className="container-custom py-20 text-center">
        <p className="text-red-600">Access Denied. Admin only.</p>
      </div>
    )
  }

  return (
    <div className="container-custom py-12">
      <h1 className="text-4xl font-bold mb-8">Admin Panel</h1>

      <button
        onClick={() => setIsFormOpen(!isFormOpen)}
        className="btn-primary mb-8 flex items-center gap-2"
      >
        <Plus size={20} /> Add New Tool
      </button>

      {isFormOpen && (
        <form onSubmit={handleSubmit} className="card mb-8 space-y-4">
          <input
            type="text"
            placeholder="Tool Name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            required
            className="w-full p-2 border rounded-lg dark:bg-gray-700 dark:border-gray-600"
          />
          <textarea
            placeholder="Description"
            value={formData.description}
            onChange={(e) => setFormData({ ...formData, description: e.target.value })}
            required
            className="w-full p-2 border rounded-lg dark:bg-gray-700 dark:border-gray-600"
          />
          <input
            type="text"
            placeholder="Official Website"
            value={formData.officialWebsite}
            onChange={(e) => setFormData({ ...formData, officialWebsite: e.target.value })}
            required
            className="w-full p-2 border rounded-lg dark:bg-gray-700 dark:border-gray-600"
          />
          <select
            value={formData.category}
            onChange={(e) => setFormData({ ...formData, category: e.target.value })}
            className="w-full p-2 border rounded-lg dark:bg-gray-700 dark:border-gray-600"
          >
            <option>Chatbot</option>
            <option>Image Generation</option>
            <option>Code</option>
            <option>Writing</option>
            <option>Video</option>
            <option>Music</option>
            <option>Other</option>
          </select>
          <select
            value={formData.pricing}
            onChange={(e) => setFormData({ ...formData, pricing: e.target.value })}
            className="w-full p-2 border rounded-lg dark:bg-gray-700 dark:border-gray-600"
          >
            <option>Free</option>
            <option>Paid</option>
            <option>Freemium</option>
          </select>
          <div className="flex gap-4">
            <button type="submit" className="btn-primary">
              {editingTool ? 'Update' : 'Add'} Tool
            </button>
            <button type="button" onClick={resetForm} className="btn-secondary">
              Cancel
            </button>
          </div>
        </form>
      )}

      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="space-y-4">
          {tools.map((tool) => (
            <div key={tool.id} className="card flex justify-between items-center">
              <div>
                <h3 className="font-bold">{tool.name}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">{tool.category} - {tool.pricing}</p>
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() => {
                    setEditingTool(tool)
                    setFormData(tool)
                    setIsFormOpen(true)
                  }}
                  className="p-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
                >
                  <Edit size={18} />
                </button>
                <button
                  onClick={() => handleDelete(tool.id)}
                  className="p-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
                >
                  <Trash2 size={18} />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default Admin
