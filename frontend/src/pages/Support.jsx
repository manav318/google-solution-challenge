import React from 'react';
import { Link } from 'react-router-dom';

const SupportPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-sm p-8">
        {/* Header */}
        <div className="text-center mb-12">
          <Link to="/" className="text-3xl font-bold text-blue-600 hover:text-blue-700">
            Genuity
          </Link>
          <h1 className="text-4xl font-bold mt-4 mb-2">Support Center</h1>
          <p className="text-gray-600">Technical & Community Assistance</p>
        </div>

        <div className="space-y-8 text-gray-700">
          {/* Technical Support */}
          <section>
            <h2 className="text-2xl font-semibold mb-4">🛠 Technical Support</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-4 border rounded-lg">
                <h3 className="text-lg font-semibold mb-2">Website Help</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Troubleshooting errors</li>
                  <li>Browser compatibility</li>
                  <li>Mobile app support</li>
                </ul>
              </div>
              
              <div className="p-4 border rounded-lg">
                <h3 className="text-lg font-semibold mb-2">Bug Reporting</h3>
                <p className="mb-4">Found an issue? Help us improve:</p>
                <Link 
                  to="/report-issue" 
                  className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                >
                  Report Technical Issue
                </Link>
              </div>
            </div>
          </section>

          {/* Community Support */}
          <section>
            <h2 className="text-2xl font-semibold mb-4">🤝 Community Support</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-4 border rounded-lg">
                <h3 className="text-lg font-semibold mb-2">Forum Assistance</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Content moderation</li>
                  <li>Group management</li>
                  <li>Communication tools</li>
                </ul>
              </div>
              
              <div className="p-4 border rounded-lg">
                <h3 className="text-lg font-semibold mb-2">Safety & Reporting</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Report abuse</li>
                  <li>Privacy concerns</li>
                  <li>Community guidelines</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Campaign Support */}
          <section>
            <h2 className="text-2xl font-semibold mb-4">🌍 Campaign Support</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-4 border rounded-lg">
                <h3 className="text-lg font-semibold mb-2">For Creators</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Campaign setup</li>
                  <li>Fund management</li>
                  <li>Progress tracking</li>
                </ul>
              </div>
              
              <div className="p-4 border rounded-lg">
                <h3 className="text-lg font-semibold mb-2">For Supporters</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Donation tracking</li>
                  <li>Impact reports</li>
                  <li>Tax receipts</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Resource Center */}
          <section>
            <h2 className="text-2xl font-semibold mb-4">📚 Resources</h2>
            <div className="p-4 bg-blue-50 rounded-lg">
              <ul className="list-disc pl-6 space-y-2">
                <li>FAQs Database</li>
                <li>Video Tutorials</li>
                <li>Community Handbook</li>
                <li>Developer Documentation</li>
              </ul>
            </div>
          </section>

          <div className="mt-12 text-center border-t pt-8">
            <Link 
              to="/" 
              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SupportPage;