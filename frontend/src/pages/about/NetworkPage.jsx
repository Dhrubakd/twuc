import React from "react";

const NetworkPage = () => {
  return (
    <div className="max-w-7xl mx-auto p-6 bg-white rounded-lg shadow-lg">
      <h1 className="text-4xl font-bold text-center text-blue-700 mb-6">Our Global Network</h1>
      <p className="text-center text-gray-600 mb-8">
        Our extensive network of partners and collaborators spans across regions, working together to create a positive
        impact.
      </p>

      {/* Interactive Map Section (Placeholder or Embed Code) */}
      <div className="w-full mb-12">
        <h2 className="text-2xl font-semibold text-center text-blue-600 mb-4">Explore Our Presence</h2>
        <div className="bg-gray-100 h-72 rounded-lg flex justify-center items-center shadow-md">
          {/* Replace with an interactive map embed */}
          <p className="text-gray-500">[Interactive Map Placeholder]</p>
        </div>
      </div>

      {/* Key Networks and Collaborations Section */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-center text-blue-700 mb-6">Key Collaborations</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-blue-50 p-6 rounded-lg shadow-sm">
            <h3 className="text-lg font-bold text-blue-600">Partnership with ABC Foundation</h3>
            <p className="text-gray-700 mt-2">
              Collaborating to support education initiatives and community outreach programs in underserved areas.
            </p>
          </div>
          <div className="bg-blue-50 p-6 rounded-lg shadow-sm">
            <h3 className="text-lg font-bold text-green-600">Global Tech Solutions</h3>
            <p className="text-gray-700 mt-2">
              A key partner in implementing innovative technology solutions for social impact projects.
            </p>
          </div>
          <div className="bg-blue-50 p-6 rounded-lg shadow-sm">
            <h3 className="text-lg font-bold text-purple-600">XYZ Alliance</h3>
            <p className="text-gray-700 mt-2">
              A long-term collaboration focused on women empowerment and leadership development programs.
            </p>
          </div>
        </div>
      </section>

      {/* Success Story Section */}
      <section className="bg-blue-100 p-8 rounded-lg shadow-lg text-center">
        <h2 className="text-3xl font-bold text-blue-700 mb-4">Success Stories from Our Network</h2>
        <p className="text-gray-700 mb-6">
          Our partners and collaborations have led to numerous success stories, positively impacting thousands of
          lives.
        </p>
        <div className="flex justify-center">
          <button className="px-6 py-3 bg-blue-600 text-white rounded-md font-semibold hover:bg-blue-700 transition-all">
            Read Success Stories
          </button>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="text-center mt-12">
        <h2 className="text-3xl font-bold text-blue-700 mb-4">Join Our Global Network</h2>
        <p className="text-gray-700 mb-6">
          We are always looking to expand our network and create more meaningful collaborations. Let’s work together to
          make a difference.
        </p>
        <button className="px-6 py-3 bg-green-600 text-white rounded-md font-semibold hover:bg-green-700 transition-all">
          Get in Touch
        </button>
      </section>
    </div>
  );
};

export default NetworkPage;
