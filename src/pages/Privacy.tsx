import React from 'react';

const Privacy = () => {
  return (
    <div className="pt-24 pb-16 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
        <div className="bg-white rounded-lg shadow-md p-8 space-y-6">
          <section>
            <h2 className="text-2xl font-semibold mb-4">1. Introduction</h2>
            <p className="text-gray-600 mb-4">
              This Privacy Policy explains how Negus Group Inc. ("we," "our," or "us") collects, uses, and protects your personal information. This policy applies to all services provided by Negus Group Inc. and its subsidiaries.
            </p>
            <p className="text-gray-600">Last updated: {new Date().toLocaleDateString()}</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">2. Information We Collect</h2>
            <h3 className="text-xl font-medium mb-3">2.1 Personal Information</h3>
            <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-4">
              <li>Contact information (name, email, phone number)</li>
              <li>Account credentials</li>
              <li>Business information</li>
              <li>Payment information</li>
            </ul>

            <h3 className="text-xl font-medium mb-3">2.2 Automatically Collected Information</h3>
            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              <li>Device information</li>
              <li>Usage data</li>
              <li>IP address</li>
              <li>Cookies and similar technologies</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">3. How We Use Your Information</h2>
            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              <li>Provide and improve our services</li>
              <li>Process transactions</li>
              <li>Send administrative information</li>
              <li>Communicate about products and services</li>
              <li>Ensure security and prevent fraud</li>
              <li>Comply with legal obligations</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">4. Your Rights</h2>
            <p className="text-gray-600 mb-4">You have the right to:</p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              <li>Access your personal data</li>
              <li>Correct inaccurate data</li>
              <li>Request deletion of your data</li>
              <li>Object to processing</li>
              <li>Data portability</li>
              <li>Withdraw consent</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">5. Contact Us</h2>
            <p className="text-gray-600">
              For any privacy-related questions or concerns, please contact our Data Protection Officer at:{' '}
              <a href="mailto:privacy@negusgroupinc.com" className="text-blue-600 hover:text-blue-800">
                privacy@negusgroupinc.com
              </a>
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Privacy;