const PrivacyPolicy = () => {
  return (
    <div className="container-custom py-16">
      <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
      
      <div className="prose dark:prose-invert max-w-4xl space-y-6">
        <section>
          <h2 className="text-2xl font-bold mb-4">1. Introduction</h2>
          <p>
            At AI Tools Hub, we are committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information.
          </p>
        </section>
        
        <section>
          <h2 className="text-2xl font-bold mb-4">2. Information We Collect</h2>
          <p>We may collect information about you in a variety of ways, including:</p>
          <ul className="list-disc list-inside space-y-2">
            <li>Personal Information: name, email address</li>
            <li>Usage Information: pages visited, tools viewed</li>
            <li>Device Information: browser type, IP address</li>
          </ul>
        </section>
        
        <section>
          <h2 className="text-2xl font-bold mb-4">3. How We Use Your Information</h2>
          <p>We use your information to:</p>
          <ul className="list-disc list-inside space-y-2">
            <li>Provide and improve our services</li>
            <li>Respond to your inquiries</li>
            <li>Send promotional updates (with consent)</li>
            <li>Analyze usage patterns</li>
          </ul>
        </section>
        
        <section>
          <h2 className="text-2xl font-bold mb-4">4. Contact Us</h2>
          <p>If you have questions about this Privacy Policy, please contact us at: privacy@aitoolshub.com</p>
        </section>
      </div>
    </div>
  )
}

export default PrivacyPolicy
