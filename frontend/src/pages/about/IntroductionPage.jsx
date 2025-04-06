import React from "react";

const IntroductionPage = () => {
  return (
    <div className="max-w-5xl mx-auto p-6 bg-white rounded-lg shadow-lg">
      {/* Header Section */}
      <h1 className="text-4xl font-bold text-center mb-6 text-blue-700">
        Welcome to Our Organization
      </h1>
      <p className="text-center text-gray-600 mb-8">
        Our mission is to empower, uplift, and create meaningful change through our initiatives. Get to know us better!
      </p>

      {/* About Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4 text-blue-600">Who We Are</h2>
        <p className="text-gray-700 leading-relaxed">
          Founded with a vision of making a lasting difference, our organization strives to uplift communities by
          providing valuable resources, opportunities, and support. Over the years, we have built a strong
          reputation for integrity, excellence, and innovation in the field of [Insert Your Industry or Cause].
        </p>
      </section>

      {/* Mission Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4 text-blue-600">Our Mission</h2>
        <p className="text-gray-700 leading-relaxed">
          Our mission is to inspire positive change and create inclusive solutions that address some of society's
          most pressing challenges. We believe in fostering growth, collaboration, and sustainability to build a
          better future for everyone.
        </p>
      </section>

      {/* Vision Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4 text-blue-600">Our Vision</h2>
        <p className="text-gray-700 leading-relaxed">
          We envision a world where individuals and communities have access to the tools and support they need to
          thrive. By empowering people with knowledge, skills, and resources, we aim to break barriers and build
          stronger, more resilient societies.
        </p>
      </section>

      {/* Core Values Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4 text-blue-600">Our Core Values</h2>
        <ul className="list-disc list-inside text-gray-700">
          <li className="mb-2">Integrity: We uphold the highest ethical standards in everything we do.</li>
          <li className="mb-2">Empathy: We approach every situation with compassion and understanding.</li>
          <li className="mb-2">Collaboration: We believe in the power of partnerships to drive meaningful impact.</li>
          <li className="mb-2">Innovation: We seek creative and effective solutions to overcome challenges.</li>
        </ul>
      </section>

      {/* Call-to-Action Section */}
      <section className="text-center mt-8">
        <h2 className="text-3xl font-bold mb-4 text-green-600">Join Us in Our Journey</h2>
        <p className="text-gray-700 mb-6">
          Whether you're looking to volunteer, collaborate, or support our mission, we invite you to be a part of
          something meaningful. Together, we can make a difference.
        </p>
        <button className="px-6 py-3 bg-blue-600 text-white rounded-md font-semibold hover:bg-blue-700 transition-all">
          Get Involved
        </button>
      </section>
    </div>
  );
};

export default IntroductionPage;
