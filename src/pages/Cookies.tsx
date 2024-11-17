import React from 'react';

const Cookies = () => {
  return (
    <div className="pt-24 pb-16 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold mb-8">Cookie Policy</h1>
        <div className="bg-white rounded-lg shadow-md p-8 space-y-6">
          <section>
            <h2 className="text-2xl font-semibold mb-4">1. What Are Cookies</h2>
            <p className="text-gray-600">
              Cookies are small text files that are placed on your device when you visit our website. They help us provide you with a better experience and allow certain features to function properly.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">2. Types of Cookies We Use</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-medium mb-2">2.1 Essential Cookies</h3>
                <p className="text-gray-600">
                  Required for basic website functionality. These cannot be disabled.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-medium mb-2">2.2 Performance Cookies</h3>
                <p className="text-gray-600">
                  Help us understand how visitors interact with our website by collecting anonymous information.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-medium mb-2">2.3 Functional Cookies</h3>
                <p className="text-gray-600">
                  Enable enhanced functionality and personalization.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-medium mb-2">2.4 Marketing Cookies</h3>
                <p className="text-gray-600">
                  Used to track visitors across websites to enable targeted advertising.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">3. Cookie Management</h2>
            <div className="text-gray-600 space-y-4">
              <p>You can control cookies through your browser settings. Please note that disabling certain cookies may affect website functionality.</p>
              <p>Common browser cookie settings:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <a href="https://support.google.com/chrome/answer/95647" className="text-blue-600 hover:text-blue-800" target="_blank" rel="noopener noreferrer">
                    Google Chrome
                  </a>
                </li>
                <li>
                  <a href="https://support.mozilla.org/en-US/kb/enhanced-tracking-protection-firefox-desktop" className="text-blue-600 hover:text-blue-800" target="_blank" rel="noopener noreferrer">
                    Mozilla Firefox
                  </a>
                </li>
                <li>
                  <a href="https://support.apple.com/guide/safari/manage-cookies-sfri11471" className="text-blue-600 hover:text-blue-800" target="_blank" rel="noopener noreferrer">
                    Safari
                  </a>
                </li>
                <li>
                  <a href="https://support.microsoft.com/en-us/windows/microsoft-edge-browsing-data-and-privacy-bb8174ba-9d73-dcf2-9b4a-c582b4e640dd" className="text-blue-600 hover:text-blue-800" target="_blank" rel="noopener noreferrer">
                    Microsoft Edge
                  </a>
                </li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">4. Updates to This Policy</h2>
            <p className="text-gray-600">
              We may update this Cookie Policy to reflect changes in our practices or for operational, legal, or regulatory reasons. The date at the top of this policy indicates when it was last updated.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">5. Contact Us</h2>
            <p className="text-gray-600">
              If you have questions about our use of cookies, please contact us at:{' '}
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

export default Cookies;