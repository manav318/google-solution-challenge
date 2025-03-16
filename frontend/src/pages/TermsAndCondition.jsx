import React from 'react';
import { Link } from 'react-router-dom';

const TermsAndConditions = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-8 mt-[6vh]">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-sm p-8">
        {/* Header */}
        <div className="text-center mb-12">
          <Link to="/" className="text-3xl font-bold text-blue-600 hover:text-blue-700">
            Genuity
          </Link>
          <h1 className="text-4xl font-bold mt-4 mb-2">Terms and Conditions</h1>
          <p className="text-gray-600">Last Updated: [Date]</p>
        </div>

        {/* Content */}
        <div className="space-y-8 text-gray-700">
          <section>
            <h2 className="text-2xl font-semibold mb-4">1. Introduction</h2>
            <p>
              Welcome to Genuity, a platform dedicated to uplifting underprivileged communities through ethical commerce and social empowerment. By accessing our website and services, you agree to comply with these terms governing our:
            </p>
            <ul className="list-disc pl-8 mt-2 space-y-2">
              <li>Online store featuring handcrafted products</li>
              <li>Community interaction platform</li>
              <li>Social campaign creation and participation system</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">2. Ethical Commerce Principles</h2>
            <div className="space-y-4">
              <p>
                Our marketplace ensures:
              </p>
              <ul className="list-disc pl-8 space-y-2">
                <li>Fair compensation to artisans and producers</li>
                <li>Transparent pricing breakdowns</li>
                <li>Minimum 70% direct contribution to creators</li>
                <li>Prohibition of exploitative practices</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">3. Community Guidelines</h2>
            <div className="space-y-4">
              <p>When participating in our community:</p>
              <ul className="list-disc pl-8 space-y-2">
                <li>Maintain respectful communication</li>
                <li>No discriminatory or harmful content</li>
                <li>Protect personal information of members</li>
                <li>Collaborative spirit towards social causes</li>
              </ul>
              <p>
                We reserve the right to remove content or users violating these principles.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">4. Campaign Participation</h2>
            <div className="space-y-4">
              <p>Creating or joining campaigns requires:</p>
              <ul className="list-disc pl-8 space-y-2">
                <li>Genuine social improvement objectives</li>
                <li>Transparent fund allocation plans</li>
                <li>Regular progress updates</li>
                <li>Compliance with local regulations</li>
              </ul>
              <p>
                Genuity takes 0% administrative fees from campaign donations.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">5. Transactions & Returns</h2>
            <div className="space-y-4">
              <ul className="list-disc pl-8 space-y-2">
                <li>30-day return policy for unused items</li>
                <li>Secure payment processing</li>
                <li>Direct artisan payment protection</li>
                <li>Order tracking transparency</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">6. Liability</h2>
            <p>
              While we vet all participants, Genuity cannot be held responsible for:
            </p>
            <ul className="list-disc pl-8 mt-2 space-y-2">
              <li>Third-party content accuracy</li>
              <li>Campaign implementation outcomes</li>
              <li>Product quality variations in handmade goods</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">7. Changes to Terms</h2>
            <p>
              We may update these terms periodically. Continued use after changes constitutes acceptance.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
            <p>
              For questions regarding these terms:
              <br />
              Email: <a href="mailto:legal@genuity.org" className="text-blue-600 hover:underline">legal@genuity.org</a>
              <br />
              Mail: [Your Physical Address]
            </p>
          </section>
        </div>

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
  );
};

export default TermsAndConditions;