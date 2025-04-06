import React from 'react';
import { FaCalendarAlt, FaBullhorn, FaNewspaper, FaRegClock } from 'react-icons/fa';

const NewsAndEvents = () => {
  return (
    <div className="container mx-auto py-16 px-6">
      {/* Page Title */}
      <h2 className="text-5xl font-extrabold text-blue-700 text-center mb-12">News and Events</h2>
      <p className="text-xl text-gray-600 text-center leading-relaxed mb-12">
        Stay informed about the latest news, events, and initiatives from Tharu Women Upliftment Center. Discover how we’re making a difference and get involved in our upcoming programs.
      </p>

      {/* Featured News Section */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        <div className="bg-white p-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300">
          <h3 className="text-2xl font-semibold mb-4 flex items-center gap-2 text-blue-700">
            <FaNewspaper className="text-yellow-400" /> Community Empowerment Drive
          </h3>
          <p className="text-lg text-gray-700 leading-relaxed">
            We launched a month-long community drive focused on skill-building workshops and leadership training in Bardiya.
          </p>
          <a
            href="#"
            className="text-blue-600 mt-4 inline-block hover:text-blue-800"
            target="_blank"
            rel="noopener noreferrer"
          >
            Read More
          </a>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300">
          <h3 className="text-2xl font-semibold mb-4 flex items-center gap-2 text-blue-700">
            <FaCalendarAlt className="text-red-400" /> Annual Women's Conference 2024
          </h3>
          <p className="text-lg text-gray-700 leading-relaxed">
            Our annual conference brought together over 500 women leaders to discuss sustainable development and advocacy.
          </p>
          <a
            href="#"
            className="text-blue-600 mt-4 inline-block hover:text-blue-800"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Highlights
          </a>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300">
          <h3 className="text-2xl font-semibold mb-4 flex items-center gap-2 text-blue-700">
            <FaBullhorn className="text-green-400" /> Health Awareness Week
          </h3>
          <p className="text-lg text-gray-700 leading-relaxed">
            A series of health camps and awareness sessions were conducted in 10 rural communities, focusing on maternal health.
          </p>
          <a
            href="#"
            className="text-blue-600 mt-4 inline-block hover:text-blue-800"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn More
          </a>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300">
          <h3 className="text-2xl font-semibold mb-4 flex items-center gap-2 text-blue-700">
            <FaRegClock className="text-purple-400" /> Upcoming Workshop
          </h3>
          <p className="text-lg text-gray-700 leading-relaxed">
            Join our upcoming workshop on financial literacy and entrepreneurship for women scheduled for next month.
          </p>
          <a
            href="#"
            className="text-blue-600 mt-4 inline-block hover:text-blue-800"
            target="_blank"
            rel="noopener noreferrer"
          >
            Register Now
          </a>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="bg-gray-100 py-12 px-6 rounded-lg shadow-md mb-16">
        <h3 className="text-4xl font-extrabold text-blue-700 text-center mb-8">Recent Highlights</h3>
        <div className="relative border-l border-gray-300 max-w-4xl mx-auto">
          <div className="mb-8 pl-8">
            <span className="absolute left-0 bg-blue-600 text-white text-lg font-bold rounded-full w-8 h-8 flex justify-center items-center">2024</span>
            <h4 className="text-2xl font-semibold mb-2">Annual Women's Conference</h4>
            <p className="text-gray-700">A platform for over 500 women leaders to share experiences and discuss future projects.</p>
          </div>
          <div className="mb-8 pl-8">
            <span className="absolute left-0 bg-green-600 text-white text-lg font-bold rounded-full w-8 h-8 flex justify-center items-center">2023</span>
            <h4 className="text-2xl font-semibold mb-2">Leadership Training Program</h4>
            <p className="text-gray-700">Launched a leadership program to train 200 women as community advocates and leaders.</p>
          </div>
          <div className="mb-8 pl-8">
            <span className="absolute left-0 bg-yellow-600 text-white text-lg font-bold rounded-full w-8 h-8 flex justify-center items-center">2022</span>
            <h4 className="text-2xl font-semibold mb-2">Health Awareness Week</h4>
            <p className="text-gray-700">Conducted health awareness events in 10 communities, benefiting over 1,000 families.</p>
          </div>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="text-center">
        <h3 className="text-4xl font-extrabold text-green-700 mb-6">Join Us at Our Next Event</h3>
        <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
          Stay connected with us and be a part of our journey. Don’t miss our upcoming events and initiatives aimed at empowering communities.
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

export default NewsAndEvents;
