import React from "react";

const MissionVisionGoals = () => {
  return (
    <div className="container mx-auto py-16 px-6">
      <h2 className="text-5xl font-extrabold text-blue-700 text-center mb-12">
        Mission, Vision, and Goals
      </h2>

      {/* Mission Section */}
      <section className="mb-12">
        <h3 className="text-3xl font-semibold text-[#1A3C5A] mb-4">
          Our Mission
        </h3>
        <p className="text-lg text-gray-700 leading-relaxed">
          Our mission is to uplift and empower women, particularly those from
          marginalized communities, by providing access to education,
          leadership training, and sustainable development opportunities. We
          believe that when women thrive, the entire community benefits.
        </p>
      </section>

      {/* Vision Section */}
      <section className="mb-12">
        <h3 className="text-3xl font-semibold text-[#1A3C5A] mb-4">
          Our Vision
        </h3>
        <p className="text-lg text-gray-700 leading-relaxed">
          Our vision is to build an inclusive society where every woman has
          equal access to resources, opportunities, and the ability to lead a
          life of dignity and independence. We strive to foster an environment
          where communities can flourish through shared growth, collaboration,
          and innovation.
        </p>
      </section>

      {/* Goals Section */}
      <section>
        <h3 className="text-3xl font-semibold text-[#1A3C5A] mb-4">
          Our Goals
        </h3>
        <ul className="list-disc list-inside text-lg text-gray-700 space-y-3">
          <li>
            <strong>Empowerment through Education:</strong> Increase literacy
            and educational attainment among women and girls.
          </li>
          <li>
            <strong>Leadership Development:</strong> Equip women with leadership
            skills to participate actively in community decision-making.
          </li>
          <li>
            <strong>Economic Independence:</strong> Provide women with vocational
            training, mentorship, and access to small business support.
          </li>
          <li>
            <strong>Health and Well-being:</strong> Promote health awareness and
            provide access to essential healthcare services.
          </li>
          <li>
            <strong>Community Resilience:</strong> Strengthen community
            resilience through disaster preparedness and sustainable resource
            management.
          </li>
          <li>
            <strong>Advocacy for Gender Equality:</strong> Raise awareness and
            advocate for policies that ensure gender equality and the protection
            of women's rights.
          </li>
        </ul>
      </section>

      {/* Call-to-Action Section */}
      <div className="text-center mt-12">
        <h3 className="text-4xl font-semibold text-[#3A7EA1] mb-6">
          Be a Part of Our Journey
        </h3>
        <p className="text-lg text-gray-700 mb-8">
          Join us in our mission to create a better future for women and their
          communities. Your support makes a meaningful difference.
        </p>
        <div className="flex justify-center gap-6">
          <a
            href="/donate-us"
            className="bg-[#E76F51] text-white py-3 px-6 rounded-lg text-lg hover:bg-[#D35400] transition duration-300"
          >
            Donate Now
          </a>
          <a
            href="/opportunities"
            className="bg-[#3A7EA1] text-white py-3 px-6 rounded-lg text-lg hover:bg-[#264653] transition duration-300"
          >
            Join Our Team
          </a>
        </div>
      </div>
    </div>
  );
};

export default MissionVisionGoals;
