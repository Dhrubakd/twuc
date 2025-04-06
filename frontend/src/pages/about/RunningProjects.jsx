import React from 'react';
import { FaRegClock, FaHandHoldingHeart, FaLeaf, FaProjectDiagram } from 'react-icons/fa';

const RunningProjects = () => {
  const projects = [
    {
      title: 'Promoting Climate Resilient and Socially Inclusive Water Management (CLASSIK)',
      objectives: [
        'Identify vulnerabilities of local communities to climate-induced hazards.',
        'Examine barriers faced by women, marginalized groups, and indigenous communities.',
        'Evaluate approaches for water conservation and sustainable management.',
        'Build capacity for sustainable water management.',
        'Develop policy recommendations for inclusive water resource management.',
      ],
      duration: '2023-2027',
      partner: 'IHE Delft',
    },
    {
      title: 'Partnership for Smallholder Farmers and Youth Entrepreneurship',
      objectives: [
        'Promote environmentally friendly agricultural practices.',
        'Ensure access to markets and support value chain participation.',
        'Enhance enterprise profitability and financing.',
        'Strengthen private sector involvement in agricultural investment.',
      ],
      duration: '2023-2026',
      partner: 'Heifer Project International',
    },
    {
      title: 'Community Safety Net',
      objectives: [
        'Provide urgent relief to families affected by disasters.',
        'Raise awareness on psycho-social well-being.',
        'Foster collaboration among marginalized communities.',
        'Establish connections to address pressing issues.',
      ],
      duration: '2023-2025',
      partner: 'Nagarik Aawaz',
    },
    {
      title: 'Local Initiative for Community Empowerment and Development (LICED)',
      objectives: [
        'Enhance capacities in natural resource management.',
        'Ensure fair access to productive resources.',
        'Improve farm production and sustainable practices.',
      ],
      duration: '2024',
      partner: 'The Lutheran World Federation Nepal',
    },
    {
      title: 'Accountability towards Gender Justice',
      objectives: [
        'Support rehabilitation of women affected by violence.',
        'Promote community participation and leadership.',
        'Shift cultural norms towards gender equality.',
      ],
      duration: '2023-2024',
      partner: 'IFA Germany',
    },
  ];

  return (
    <div className="container mx-auto py-16 px-6">
      <h1 className="text-5xl font-extrabold text-center text-blue-700 mb-8">Our Running Projects</h1>
      <p className="text-lg text-gray-600 text-center leading-relaxed mb-12">
        We are actively implementing impactful projects aimed at improving livelihoods, fostering empowerment, and creating sustainable communities.
      </p>

      {/* Project Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-gradient-to-br from-blue-100 to-white shadow-lg rounded-lg p-6 hover:scale-105 transition-transform duration-300"
          >
            <h2 className="text-2xl font-semibold text-blue-700 flex items-center gap-2 mb-4">
              <FaProjectDiagram className="text-green-600" /> {project.title}
            </h2>
            <ul className="list-disc pl-5 text-gray-700 mb-4">
              {project.objectives.map((objective, objIndex) => (
                <li key={objIndex} className="mb-2">
                  {objective}
                </li>
              ))}
            </ul>
            <div className="flex justify-between items-center">
              <span className="text-lg font-semibold text-blue-600 flex items-center gap-1">
                <FaRegClock /> {project.duration}
              </span>
              <span className="text-lg font-semibold text-gray-700 flex items-center gap-1">
                <FaHandHoldingHeart className="text-green-500" /> {project.partner}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Call-to-Action Section */}
      <div className="text-center mt-16">
        <h3 className="text-4xl font-extrabold text-green-700 mb-4">Support Our Initiatives</h3>
        <p className="text-lg text-gray-700 mb-6">
          Join us in our mission to empower communities and create meaningful change. Your support can make a lasting impact.
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
      </div>
    </div>
  );
};

export default RunningProjects;
