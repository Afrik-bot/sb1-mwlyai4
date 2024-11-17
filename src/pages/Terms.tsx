import React from 'react';

const Terms = () => {
  return (
    <div className="pt-24 pb-16 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold mb-8">Terms of Service</h1>
        <div className="bg-white rounded-lg shadow-md p-8 space-y-6">
          <section>
            <h2 className="text-2xl font-semibold mb-4">1. Agreement to Terms</h2>
            <p className="text-gray-600">
              By accessing or using Negus Group Inc.'s services, you agree to be bound by these Terms of Service and all applicable laws and regulations.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">2. Use License</h2>
            <div className="text-gray-600 space-y-4">
              <p>Permission is granted to temporarily access our services for personal, non-commercial use subject to the following conditions:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>You must not modify or copy the materials</li>
                <li>You must not use the materials for commercial purposes</li>
                <li>You must not attempt to reverse engineer any software</li>
                <li>You must not remove any copyright or proprietary notations</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">3. User Responsibilities</h2>
            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              <li>Maintain accurate account information</li>
              <li>Protect account credentials</li>
              <li>Comply with all applicable laws</li>
              <li>Not engage in unauthorized activities</li>
              <li>Report security violations</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">4. Service Modifications</h2>
            <p className="text-gray-600">
              We reserve the right to modify or discontinue any part of our services without notice. We shall not be liable to you or any third party for any modification, suspension, or discontinuance of the service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">5. Limitation of Liability</h2>
            <p className="text-gray-600">
              Negus Group Inc. shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use or inability to use the service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">6. Governing Law</h2>
            <p className="text-gray-600">
              These terms shall be governed by and construed in accordance with the laws of the State of California, without regard to its conflict of law provisions.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">7. Contact Information</h2>
            <p className="text-gray-600">
              For any questions regarding these Terms, please contact us at:{' '}
              <a href="mailto:legal@negusgroupinc.com" className="text-blue-600 hover:text-blue-800">
                legal@negusgroupinc.com
              </a>
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Terms;