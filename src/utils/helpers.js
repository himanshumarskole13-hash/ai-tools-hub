export const formatDate = (date) => {
  return new Date(date).toLocaleDateString()
}

export const truncateText = (text, length = 100) => {
  return text.length > length ? text.substring(0, length) + '...' : text
}

export const generateId = () => {
  return Math.random().toString(36).substr(2, 9)
}

export const getPricingColor = (pricing) => {
  switch (pricing) {
    case 'Free':
      return 'text-green-600'
    case 'Paid':
      return 'text-blue-600'
    case 'Freemium':
      return 'text-purple-600'
    default:
      return 'text-gray-600'
  }
}

export const getPricingBgColor = (pricing) => {
  switch (pricing) {
    case 'Free':
      return 'bg-green-100 text-green-800'
    case 'Paid':
      return 'bg-blue-100 text-blue-800'
    case 'Freemium':
      return 'bg-purple-100 text-purple-800'
    default:
      return 'bg-gray-100 text-gray-800'
  }
}
