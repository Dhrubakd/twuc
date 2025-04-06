import React from 'react';
import { FaFilePdf, FaBook, FaFolderOpen, FaCloudDownloadAlt } from 'react-icons/fa';

const Publications = () => {
  return (
    <div className="container mx-auto py-16 px-6">
      {/* Page Title */}
      <h2 className="text-5xl font-extrabold text-blue-700 text-center mb-12">Our Publications</h2>
      <p className="text-xl text-gray-600 text-center leading-relaxed mb-12">
        Stay informed with our reports, research papers, newsletters, and program updates. Our publications reflect our journey, achievements, and plans for a brighter future.
      </p>

      {/* Featured Publications Section */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        <div className="bg-white p-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300">
          <h3 className="text-2xl font-semibold mb-4 flex items-center gap-2 text-blue-700">
            <FaFilePdf className="text-red-400" /> Annual Report 2024
          </h3>
          <p className="text-lg text-gray-700 leading-relaxed">
            Our comprehensive annual report highlights key achievements, milestones, and financial details of the year.
          </p>
          <a
            href="#"
            className="text-blue-600 mt-4 inline-block hover:text-blue-800"
            target="_blank"
            rel="noopener noreferrer"
          >
            Download PDF
          </a>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300">
          <h3 className="text-2xl font-semibold mb-4 flex items-center gap-2 text-blue-700">
            <FaBook className="text-yellow-400" /> Community Impact Report
          </h3>
          <p className="text-lg text-gray-700 leading-relaxed">
            A detailed report showcasing the success stories, impact metrics, and case studies from our programs.
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
            <FaFolderOpen className="text-green-400" /> Research Paper on Women’s Leadership
          </h3>
          <p className="text-lg text-gray-700 leading-relaxed">
            An in-depth research paper exploring the role of women leaders in rural communities and their contributions.
          </p>
          <a
            href="#"
            className="text-blue-600 mt-4 inline-block hover:text-blue-800"
            target="_blank"
            rel="noopener noreferrer"
          >
            Download Research Paper
          </a>
        </div>
      </section>

      {/* Categories Section */}
      <section className="bg-gray-100 py-12 px-6 rounded-lg shadow-md mb-16">
        <h3 className="text-4xl font-extrabold text-green-700 text-center mb-8">Publication Categories</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-blue-100 p-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300">
            <h4 className="text-2xl font-semibold text-blue-700 mb-3">Annual Reports</h4>
            <p className="text-lg text-gray-700">Explore our annual reports that outline key activities, goals, and financial summaries.</p>
          </div>
          <div className="bg-blue-100 p-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300">
            <h4 className="text-2xl font-semibold text-blue-700 mb-3">Newsletters</h4>
            <p className="text-lg text-gray-700">Stay connected with our regular updates, announcements, and success stories through our newsletters.</p>
          </div>
          <div className="bg-blue-100 p-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300">
            <h4 className="text-2xl font-semibold text-blue-700 mb-3">Research Papers</h4>
            <p className="text-lg text-gray-700">Access research papers on key topics such as women’s empowerment, leadership, and sustainable development.</p>
          </div>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="text-center">
        <h3 className="text-4xl font-extrabold text-blue-700 mb-6">Stay Updated</h3>
        <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
          Stay informed about our latest publications and reports. Subscribe to our newsletter to receive updates straight to your inbox.
        </p>
        <div className="flex justify-center gap-6">
          <a
            href="#"
            className="bg-blue-600 text-white py-3 px-6 rounded-lg text-lg hover:bg-blue-700 transition duration-300"
          >
            Subscribe Now
          </a>
          <a
            href="/contact-us"
            className="bg-green-600 text-white py-3 px-6 rounded-lg text-lg hover:bg-green-700 transition duration-300"
          >
            Contact Us
          </a>
        </div>
      </section>
    </div>
  );
};

export default Publications;
