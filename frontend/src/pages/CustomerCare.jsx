import React from 'react';
import { Link } from 'react-router-dom';

const CustomerCarePage = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-sm p-8">
        {/* Header */}
        <div className="text-center mb-12">
          <Link to="/" className="text-3xl font-bold text-blue-600 hover:text-blue-700">
            Genuity
          </Link>
          <h1 className="text-4xl font-bold mt-4 mb-2">Customer Care</h1>
          <p className="text-gray-600">Personalized Assistance & Service</p>
        </div>

        <div className="space-y-8 text-gray-700">
          {/* Order Support */}
          <section>
            <h2 className="text-2xl font-semibold mb-4">📦 Order Management</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-4 border rounded-lg">
                <h3 className="text-lg font-semibold mb-2">Purchases</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Track orders</li>
                  <li>Return requests</li>
                  <li>Payment issues</li>
                </ul>
              </div>
              
              <div className="p-4 border rounded-lg">
                <h3 className="text-lg font-semibold mb-2">Direct Help</h3>
                <div className="space-y-2">
                  <p>📞 [Customer Care Phone]</p>
                  <p>✉️ <a href="mailto:care@genuity.org" className="text-blue-600 hover:underline">care@genuity.org</a></p>
                  <p>🕒 Mon-Sat: 8AM-8PM (Your Timezone)</p>
                </div>
              </div>
            </div>
          </section>

          {/* Account Help */}
          <section>
            <h2 className="text-2xl font-semibold mb-4">🔐 Account Assistance</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-4 border rounded-lg">
                <h3 className="text-lg font-semibold mb-2">Security</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Password reset</li>
                  <li>Two-factor authentication</li>
                  <li>Suspicious activity</li>
                </ul>
              </div>
              
              <div className="p-4 border rounded-lg">
                <h3 className="text-lg font-semibold mb-2">Preferences</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Update information</li>
                  <li>Communication settings</li>
                  <li>Account deletion</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Product Support */}
          <section>
            <h2 className="text-2xl font-semibold mb-4">🎁 Product Support</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-4 border rounded-lg">
                <h3 className="text-lg font-semibold mb-2">Quality Assurance</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Defective products</li>
                  <li>Size exchanges</li>
                  <li>Material queries</li>
                </ul>
              </div>
              
              <div className="p-4 border rounded-lg">
                <h3 className="text-lg font-semibold mb-2">Artisan Connect</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Maker stories</li>
                  <li>Custom requests</li>
                  <li>Collaboration</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Quick Help Form */}
          <section>
            <h2 className="text-2xl font-semibold mb-4">✉️ Quick Assistance</h2>
            <div className="p-4 border rounded-lg">
              <form className="space-y-4">
                <div>
                  <label className="block mb-2">Order/Account Number</label>
                  <input type="text" className="w-full p-2 border rounded" />
                </div>
                
                <div>
                  <label className="block mb-2">Issue Type</label>
                  <select className="w-full p-2 border rounded">
                    <option>Order Issue</option>
                    <option>Account Problem</option>
                    <option>Product Concern</option>
                    <option>Other</option>
                  </select>
                </div>
                
                <button 
                  type="submit" 
                  className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
                >
                  Request Callback
                </button>
              </form>
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

export default CustomerCarePage;