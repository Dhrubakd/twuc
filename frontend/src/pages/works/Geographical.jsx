import React from 'react';
import { FaMapMarkerAlt, FaUsers, FaGlobeAsia, FaHandsHelping } from 'react-icons/fa';

const Geographical = () => {
  return (
    <div className="container mx-auto py-16 px-6">
      {/* Title Section */}
      <h2 className="text-5xl font-extrabold text-blue-700 text-center mb-12">Our Geographical Reach</h2>
      <p className="text-xl text-gray-600 text-center leading-relaxed mb-12">
        We proudly serve communities in rural areas with a focus on empowering women, providing education, and fostering sustainable development. Our reach spans multiple regions to make a lasting impact.
      </p>

      {/* Key Focus Regions Section */}
      <section className="mb-16">
        <h3 className="text-4xl font-extrabold text-green-700 mb-8 text-center">Focus Regions</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-blue-100 p-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300">
            <h4 className="text-2xl font-semibold text-blue-700 mb-3 flex items-center gap-2">
              <FaMapMarkerAlt className="text-yellow-500" /> Bardiya Region
            </h4>
            <p className="text-gray-700">
              Providing skill development workshops and leadership training in Bardiya’s rural areas.
            </p>
          </div>
          <div className="bg-blue-100 p-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300">
            <h4 className="text-2xl font-semibold text-blue-700 mb-3 flex items-center gap-2">
              <FaGlobeAsia className="text-yellow-500" /> Surrounding Villages
            </h4>
            <p className="text-gray-700">
              Expanding educational outreach to neighboring villages, ensuring inclusive growth and learning.
            </p>
          </div>
          <div className="bg-blue-100 p-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300">
            <h4 className="text-2xl font-semibold text-blue-700 mb-3 flex items-center gap-2">
              <FaHandsHelping className="text-yellow-500" /> Partnerships Across Nepal
            </h4>
            <p className="text-gray-700">
              Collaborating with organizations to promote sustainable programs and resource sharing throughout Nepal.
            </p>
          </div>
        </div>
      </section>

      {/* Key Impact Section */}
      <section className="bg-gray-100 py-12 px-6 rounded-lg shadow-md mb-16">
        <h3 className="text-4xl font-extrabold text-blue-700 mb-8 text-center">Our Impact</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <FaUsers className="text-green-600 text-6xl mx-auto mb-4" />
            <h4 className="text-3xl font-bold text-blue-700">5,000+</h4>
            <p className="text-gray-700">Women Empowered</p>
          </div>
          <div className="text-center">
            <FaMapMarkerAlt className="text-blue-600 text-6xl mx-auto mb-4" />
            <h4 className="text-3xl font-bold text-blue-700">50+</h4>
            <p className="text-gray-700">Communities Reached</p>
          </div>
          <div className="text-center">
            <FaHandsHelping className="text-yellow-600 text-6xl mx-auto mb-4" />
            <h4 className="text-3xl font-bold text-blue-700">200+</h4>
            <p className="text-gray-700">Health and Awareness Programs</p>
          </div>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="text-center">
        <h3 className="text-4xl font-extrabold text-green-700 mb-6">Get Involved in Our Work</h3>
        <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
          Be part of our journey to reach more communities and uplift women’s lives. Your support helps us expand our reach and create lasting change.
        </p>
        <div className="flex justify-center gap-6">
          <a
            href="/donate-us"
            className="bg-green-600 text-white py-3 px-6 rounded-lg text-lg hover:bg-green-700 transition duration-300"
          >
            Donate Now
          </a>
          <a
            href="/opportunities"
            className="bg-blue-600 text-white py-3 px-6 rounded-lg text-lg hover:bg-blue-700 transition duration-300"
          >
            Join Our Team
          </a>
        </div>
      </section>
    </div>
  );
};

export default Geographical;
