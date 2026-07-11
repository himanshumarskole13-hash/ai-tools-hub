export const initializeAnalytics = () => {
  if (import.meta.env.VITE_GOOGLE_ANALYTICS_ID) {
    window.dataLayer = window.dataLayer || []
    function gtag() {
      dataLayer.push(arguments)
    }
    gtag('js', new Date())
    gtag('config', import.meta.env.VITE_GOOGLE_ANALYTICS_ID)
  }
}

export const trackEvent = (eventName, eventData = {}) => {
  if (window.gtag) {
    window.gtag('event', eventName, eventData)
  }
}
