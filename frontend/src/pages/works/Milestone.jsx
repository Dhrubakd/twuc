import React from 'react';
import { FaCheckCircle, FaMedal, FaUsers, FaAward, FaChartLine } from 'react-icons/fa';

const Milestone = () => {
  return (
    <div className="container mx-auto py-16 px-6">
      {/* Page Title */}
      <h2 className="text-5xl font-extrabold text-green-700 text-center mb-12">Our Milestones</h2>
      <p className="text-xl text-gray-600 text-center leading-relaxed mb-12">
        Since our inception, we’ve achieved remarkable progress and set milestones that reflect our commitment to empowering women and uplifting communities.
      </p>

      {/* Key Milestones Section */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        <div className="bg-gradient-to-br from-blue-600 to-blue-400 text-white p-8 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300">
          <h3 className="text-3xl font-semibold mb-4 flex items-center gap-2">
            <FaCheckCircle className="text-yellow-300" /> 2005: Founding Year
          </h3>
          <p className="text-lg leading-relaxed">
            Tharu Women Upliftment Center was established to address educational disparities and promote women’s empowerment.
          </p>
        </div>
        <div className="bg-gradient-to-br from-green-600 to-green-400 text-white p-8 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300">
          <h3 className="text-3xl font-semibold mb-4 flex items-center gap-2">
            <FaUsers className="text-yellow-300" /> 2010: Vocational Training Program
          </h3>
          <p className="text-lg leading-relaxed">
            Launched our first vocational training program, reaching over 500 women with courses on tailoring, craft-making, and entrepreneurship.
          </p>
        </div>
        <div className="bg-gradient-to-br from-purple-600 to-purple-400 text-white p-8 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300">
          <h3 className="text-3xl font-semibold mb-4 flex items-center gap-2">
            <FaMedal className="text-yellow-300" /> 2015: Scholarship Program
          </h3>
          <p className="text-lg leading-relaxed">
            Awarded our first batch of scholarships to 50 girls, enabling them to pursue education and break the cycle of poverty.
          </p>
        </div>
        <div className="bg-gradient-to-br from-orange-600 to-orange-400 text-white p-8 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300">
          <h3 className="text-3xl font-semibold mb-4 flex items-center gap-2">
            <FaAward className="text-yellow-300" /> 2020: Leadership Initiative
          </h3>
          <p className="text-lg leading-relaxed">
            Launched a leadership initiative to empower women leaders within communities to advocate for social and economic rights.
          </p>
        </div>
        <div className="bg-gradient-to-br from-pink-600 to-pink-400 text-white p-8 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300">
          <h3 className="text-3xl font-semibold mb-4 flex items-center gap-2">
            <FaChartLine className="text-yellow-300" /> 2022: Health and Awareness Campaigns
          </h3>
          <p className="text-lg leading-relaxed">
            Organized over 200 health and awareness campaigns focusing on hygiene, maternal health, and wellness in rural communities.
          </p>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="mb-16">
        <h3 className="text-4xl font-extrabold text-blue-700 text-center mb-8">Our Journey</h3>
        <div className="relative border-l border-gray-300 max-w-4xl mx-auto">
          <div className="mb-8 pl-8">
            <span className="absolute left-0 bg-green-600 text-white text-lg font-bold rounded-full w-8 h-8 flex justify-center items-center">2005</span>
            <h4 className="text-2xl font-semibold mb-2">Foundation Year</h4>
            <p className="text-gray-700">Established to create an inclusive platform for women’s empowerment and educational support.</p>
          </div>
          <div className="mb-8 pl-8">
            <span className="absolute left-0 bg-blue-600 text-white text-lg font-bold rounded-full w-8 h-8 flex justify-center items-center">2010</span>
            <h4 className="text-2xl font-semibold mb-2">Expansion of Programs</h4>
            <p className="text-gray-700">Launched vocational training centers to expand skill-based learning opportunities for women.</p>
          </div>
          <div className="mb-8 pl-8">
            <span className="absolute left-0 bg-purple-600 text-white text-lg font-bold rounded-full w-8 h-8 flex justify-center items-center">2015</span>
            <h4 className="text-2xl font-semibold mb-2">First Scholarship Program</h4>
            <p className="text-gray-700">Awarded scholarships to empower girls and improve access to education in underserved regions.</p>
          </div>
          <div className="mb-8 pl-8">
            <span className="absolute left-0 bg-orange-600 text-white text-lg font-bold rounded-full w-8 h-8 flex justify-center items-center">2022</span>
            <h4 className="text-2xl font-semibold mb-2">Community Outreach Expansion</h4>
            <p className="text-gray-700">Organized health campaigns and expanded leadership programs to 50 rural villages.</p>
          </div>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="text-center">
        <h3 className="text-4xl font-extrabold text-green-700 mb-6">Be Part of Our Success Story</h3>
        <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
          Join us as we continue to set new milestones and empower communities. Your support helps us achieve even more!
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

export default Milestone;
