export const updatePageTitle = (title) => {
  document.title = `${title} | AI Tools Hub`
}

export const updateMetaTags = (title, description) => {
  let metaTitle = document.querySelector('meta[property="og:title"]')
  if (!metaTitle) {
    metaTitle = document.createElement('meta')
    metaTitle.setAttribute('property', 'og:title')
    document.head.appendChild(metaTitle)
  }
  metaTitle.setAttribute('content', title)

  let metaDesc = document.querySelector('meta[name="description"]')
  if (!metaDesc) {
    metaDesc = document.createElement('meta')
    metaDesc.setAttribute('name', 'description')
    document.head.appendChild(metaDesc)
  }
  metaDesc.setAttribute('content', description)
}

export const generateStructuredData = (data) => {
  const script = document.createElement('script')
  script.type = 'application/ld+json'
  script.innerHTML = JSON.stringify(data)
  document.head.appendChild(script)
}
