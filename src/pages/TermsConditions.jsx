const TermsConditions = () => {
  return (
    <div className="container-custom py-16">
      <h1 className="text-4xl font-bold mb-8">Terms & Conditions</h1>
      
      <div className="prose dark:prose-invert max-w-4xl space-y-6">
        <section>
          <h2 className="text-2xl font-bold mb-4">1. Agreement to Terms</h2>
          <p>
            By accessing and using AI Tools Hub, you accept and agree to be bound by the terms and provision of this agreement.
          </p>
        </section>
        
        <section>
          <h2 className="text-2xl font-bold mb-4">2. Use License</h2>
          <p>
            Permission is granted to temporarily download one copy of the materials (information or software) on AI Tools Hub for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li>Modify or copy the materials</li>
            <li>Use the materials for any commercial purpose</li>
            <li>Attempt to decompile or reverse engineer any software</li>
            <li>Remove any copyright or other proprietary notations</li>
            <li>Transfer the materials to another person or "mirror" the materials on any other server</li>
          </ul>
        </section>
        
        <section>
          <h2 className="text-2xl font-bold mb-4">3. Disclaimer</h2>
          <p>
            The materials on AI Tools Hub are provided on an 'as is' basis. AI Tools Hub makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
          </p>
        </section>
        
        <section>
          <h2 className="text-2xl font-bold mb-4">4. Limitations</h2>
          <p>
            In no event shall AI Tools Hub or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on AI Tools Hub.
          </p>
        </section>
        
        <section>
          <h2 className="text-2xl font-bold mb-4">5. Contact</h2>
          <p>For any inquiries regarding these terms, please contact: terms@aitoolshub.com</p>
        </section>
      </div>
    </div>
  )
}

export default TermsConditions
