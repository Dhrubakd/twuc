import React from 'react';
import { FaNewspaper, FaCamera, FaBookOpen } from 'react-icons/fa';

const ResourcesPage = () => {
  return (
    <div className="text-center max-w-7xl mx-auto py-16 px-6">
      {/* Hero Title */}
      <h2 className="text-5xl font-extrabold text-blue-700 mb-12">Our Resources</h2>
      <p className="text-xl text-gray-600 leading-relaxed mb-12">
        Explore our latest updates, news, media highlights, and publications. Stay informed about the progress and success stories of our community-driven initiatives.
      </p>

      {/* News and Events Section */}
      <section className="mb-16">
        <h3 className="text-4xl font-extrabold text-green-700 mb-8">News and Events</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-gradient-to-br from-green-600 to-green-400 text-white p-8 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300">
            <h4 className="text-2xl font-bold flex items-center gap-2 mb-4">
              <FaNewspaper className="text-yellow-300" /> Health Awareness Program
            </h4>
            <p className="text-lg leading-relaxed">
              Our recent health awareness event reached over 500 families with essential healthcare education.
            </p>
          </div>
          <div className="bg-gradient-to-br from-blue-600 to-blue-400 text-white p-8 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300">
            <h4 className="text-2xl font-bold flex items-center gap-2 mb-4">
              <FaNewspaper className="text-yellow-300" /> Leadership Workshop
            </h4>
            <p className="text-lg leading-relaxed">
              A leadership workshop for 100 women in Bardiya focused on advocacy and community leadership.
            </p>
          </div>
          <div className="bg-gradient-to-br from-purple-600 to-purple-400 text-white p-8 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300">
            <h4 className="text-2xl font-bold flex items-center gap-2 mb-4">
              <FaNewspaper className="text-yellow-300" /> Financial Literacy Campaign
            </h4>
            <p className="text-lg leading-relaxed">
              Empowering women through a financial literacy program, with 300 women receiving budgeting and savings training.
            </p>
          </div>
        </div>
      </section>

      {/* Media Coverage Section */}
      <section className="mb-16">
        <h3 className="text-4xl font-extrabold text-blue-700 mb-8">Media Coverage</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-blue-100 p-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300">
            <h4 className="text-2xl font-semibold text-blue-700 mb-3 flex items-center gap-2">
              <FaCamera /> Featured on Local News
            </h4>
            <p className="text-gray-700">
              Our programs were recently featured on the Bardiya Community News Channel, highlighting our efforts in rural education.
            </p>
          </div>
          <div className="bg-blue-100 p-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300">
            <h4 className="text-2xl font-semibold text-blue-700 mb-3 flex items-center gap-2">
              <FaCamera /> Radio Interview
            </h4>
            <p className="text-gray-700">
              Our director spoke on Radio Bardiya about the importance of skill development for women in the region.
            </p>
          </div>
          <div className="bg-blue-100 p-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300">
            <h4 className="text-2xl font-semibold text-blue-700 mb-3 flex items-center gap-2">
              <FaCamera /> Feature Article in NGO Journal
            </h4>
            <p className="text-gray-700">
              A feature article in "NGO Progress" magazine praised our organization for innovative community-based programs.
            </p>
          </div>
        </div>
      </section>

      {/* Publications Section */}
      <section className="bg-gray-100 py-12 px-6 rounded-lg shadow-md mb-16">
        <h3 className="text-4xl font-extrabold text-purple-700 mb-8">Our Publications</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300">
            <h4 className="text-2xl font-bold text-purple-700 mb-3 flex items-center gap-2">
              <FaBookOpen /> Annual Report 2024
            </h4>
            <p className="text-gray-700">
              Download our annual report to learn about our achievements, partnerships, and future goals.
            </p>
            <a
              href="/resources/annual-report-2024.pdf"
              className="text-blue-600 hover:underline mt-3 inline-block"
              target="_blank"
              rel="noopener noreferrer"
            >
              Download Report
            </a>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300">
            <h4 className="text-2xl font-bold text-purple-700 mb-3 flex items-center gap-2">
              <FaBookOpen /> Community Impact Stories
            </h4>
            <p className="text-gray-700">
              Read inspiring stories from women who have transformed their lives through our programs.
            </p>
            <a
              href="/resources/community-stories.pdf"
              className="text-blue-600 hover:underline mt-3 inline-block"
              target="_blank"
              rel="noopener noreferrer"
            >
              Read Stories
            </a>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300">
            <h4 className="text-2xl font-bold text-purple-700 mb-3 flex items-center gap-2">
              <FaBookOpen /> Program Highlights
            </h4>
            <p className="text-gray-700">
              Learn about the key highlights and results from our educational and community outreach programs.
            </p>
            <a
              href="/resources/program-highlights.pdf"
              className="text-blue-600 hover:underline mt-3 inline-block"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Highlights
            </a>
          </div>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="text-center bg-green-100 py-12 px-6 rounded-lg shadow-md">
        <h3 className="text-4xl font-extrabold text-green-700 mb-6">Stay Updated</h3>
        <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
          Subscribe to our newsletter to receive the latest news, updates, and upcoming events directly in your inbox.
        </p>
        <div className="flex justify-center">
          <a
            href="/subscribe"
            className="bg-green-600 text-white py-3 px-6 rounded-lg text-lg hover:bg-green-700 transition duration-300"
          >
            Subscribe Now
          </a>
        </div>
      </section>
    </div>
  );
};

export default ResourcesPage;
