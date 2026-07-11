const About = () => {
  return (
    <div className="container-custom py-16">
      <h1 className="text-4xl font-bold mb-8">About AI Tools Hub</h1>
      
      <div className="prose dark:prose-invert max-w-4xl">
        <p className="text-lg mb-6">
          AI Tools Hub is your ultimate directory for discovering and comparing the best artificial intelligence tools available. We believe that AI should be accessible to everyone, regardless of technical expertise.
        </p>
        
        <h2 className="text-2xl font-bold mt-8 mb-4">Our Mission</h2>
        <p className="mb-6">
          To provide a comprehensive, user-friendly platform where individuals and businesses can discover, compare, and leverage cutting-edge AI tools to enhance their productivity and creativity.
        </p>
        
        <h2 className="text-2xl font-bold mt-8 mb-4">What We Offer</h2>
        <ul className="list-disc list-inside mb-6 space-y-2">
          <li>Curated directory of 1000+ AI tools</li>
          <li>Detailed tool descriptions and features</li>
          <li>User ratings and reviews</li>
          <li>Pricing information (Free, Paid, Freemium)</li>
          <li>Category-based filtering</li>
          <li>Trending and latest AI tools</li>
        </ul>
        
        <h2 className="text-2xl font-bold mt-8 mb-4">Why Choose Us?</h2>
        <ul className="list-disc list-inside mb-6 space-y-2">
          <li>Regularly updated database</li>
          <li>User-friendly interface</li>
          <li>Mobile responsive design</li>
          <li>Dark mode support</li>
          <li>Fast and reliable</li>
          <li>Community-driven ratings</li>
        </ul>
      </div>
    </div>
  )
}

export default About
