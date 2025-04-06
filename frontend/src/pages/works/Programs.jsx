import React from 'react';
import { FaChalkboardTeacher, FaHandsHelping, FaSeedling, FaHeartbeat, FaLaptopCode, FaBookReader } from 'react-icons/fa';

const Programs = () => {
  return (
    <div className="container mx-auto py-16 px-6">
      {/* Page Title */}
      <h2 className="text-5xl font-extrabold text-blue-700 text-center mb-12">Our Programs</h2>
      <p className="text-xl text-gray-600 text-center leading-relaxed mb-12">
        Our programs focus on empowering women and fostering community growth through education, leadership, and skill-building initiatives.
      </p>

      {/* Program Cards Section */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        <div className="bg-gradient-to-br from-green-600 to-green-400 text-white p-8 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300">
          <h3 className="text-3xl font-semibold mb-4 flex items-center gap-2">
            <FaChalkboardTeacher className="text-yellow-300" /> Educational Workshops
          </h3>
          <p className="text-lg leading-relaxed">
            Providing workshops on literacy, leadership, and self-development to equip women with knowledge and confidence.
          </p>
        </div>
        <div className="bg-gradient-to-br from-blue-600 to-blue-400 text-white p-8 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300">
          <h3 className="text-3xl font-semibold mb-4 flex items-center gap-2">
            <FaHandsHelping className="text-yellow-300" /> Leadership & Advocacy
          </h3>
          <p className="text-lg leading-relaxed">
            Training women to become advocates and community leaders who can inspire and drive positive change.
          </p>
        </div>
        <div className="bg-gradient-to-br from-purple-600 to-purple-400 text-white p-8 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300">
          <h3 className="text-3xl font-semibold mb-4 flex items-center gap-2">
            <FaHeartbeat className="text-yellow-300" /> Health & Wellness Programs
          </h3>
          <p className="text-lg leading-relaxed">
            Organizing health campaigns and wellness drives to promote hygiene, maternal health, and overall well-being.
          </p>
        </div>
        <div className="bg-gradient-to-br from-orange-600 to-orange-400 text-white p-8 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300">
          <h3 className="text-3xl font-semibold mb-4 flex items-center gap-2">
            <FaLaptopCode className="text-yellow-300" /> Digital Literacy Training
          </h3>
          <p className="text-lg leading-relaxed">
            Offering courses in basic computer skills, internet usage, and digital literacy to bridge the digital divide.
          </p>
        </div>
        <div className="bg-gradient-to-br from-pink-600 to-pink-400 text-white p-8 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300">
          <h3 className="text-3xl font-semibold mb-4 flex items-center gap-2">
            <FaSeedling className="text-yellow-300" /> Sustainable Livelihood Support
          </h3>
          <p className="text-lg leading-relaxed">
            Providing skill-based training in agriculture, craft-making, and small business management for sustainable growth.
          </p>
        </div>
        <div className="bg-gradient-to-br from-teal-600 to-teal-400 text-white p-8 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300">
          <h3 className="text-3xl font-semibold mb-4 flex items-center gap-2">
            <FaBookReader className="text-yellow-300" /> Scholarship Programs
          </h3>
          <p className="text-lg leading-relaxed">
            Awarding educational scholarships to girls and women to pursue formal education and break barriers of inequality.
          </p>
        </div>
      </section>

      {/* Key Statistics Section */}
      <section className="bg-gray-100 py-12 px-6 rounded-lg shadow-md mb-16">
        <h3 className="text-4xl font-extrabold text-blue-700 text-center mb-8">Our Impact</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <FaBookReader className="text-green-600 text-6xl mx-auto mb-4" />
            <h4 className="text-3xl font-bold text-blue-700">1,000+</h4>
            <p className="text-gray-700">Women Educated</p>
          </div>
          <div className="text-center">
            <FaHeartbeat className="text-blue-600 text-6xl mx-auto mb-4" />
            <h4 className="text-3xl font-bold text-blue-700">200+</h4>
            <p className="text-gray-700">Health Awareness Programs</p>
          </div>
          <div className="text-center">
            <FaSeedling className="text-yellow-600 text-6xl mx-auto mb-4" />
            <h4 className="text-3xl font-bold text-blue-700">300+</h4>
            <p className="text-gray-700">Women Entrepreneurs Supported</p>
          </div>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="text-center">
        <h3 className="text-4xl font-extrabold text-green-700 mb-6">Support Our Programs</h3>
        <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
          Join us in empowering women and fostering sustainable communities. Your support helps us expand our programs and make a lasting impact.
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

export default Programs;
