import React from 'react';
import { FaCheckCircle, FaHandsHelping } from 'react-icons/fa';

const CompletedProjects = () => {
  const completedProjects = [
    {
      title: 'Small Suspension Trial Bridge',
      description:
        'Construction and maintenance of suspension bridges to provide safe and reliable transportation for local communities to access markets, health facilities, schools, and other service centers.',
      duration: '2021-2023',
      partner: 'Helvetas and Nepal Government',
    },
    {
      title: 'ADHAR',
      description:
        'Strengthening community actions for climate-resilient livelihoods, disaster risk reduction, and inclusive governance in Bardiya District through capacity building and resource support.',
      duration: '2021-2023',
      partner: 'DAN Church Aid',
    },
    {
      title: 'Digital Technology for Empowering Women Micro Entrepreneurs',
      description:
        'Empowering women micro-entrepreneurs by making them familiar with digital technologies to enhance their businesses and financial independence.',
      duration: '2022-2023',
      partner: 'Heifer Project International',
    },
    {
      title: 'Child Dream (Child Development through Responsive Care, Early Stimulation, Affection Family & Motivated Parents)',
      description:
        'Promoting early childhood development through parenting education, community-level dialogue, home visits, and training for health workers and FCHVs.',
      duration: '2020-2023',
      partner: 'PLAN International',
    },
    {
      title: 'Building Leadership for Women, Peace, Security & Equity',
      description:
        'Providing leadership training, counseling, vocational training, and peace kitchen garden activities for women who faced violence and loss during the conflict period.',
      duration: '2021-2022',
      partner: 'IFA Germany',
    },
    {
      title: 'Increase Resilience of Community to Recover from COVID-19 Effects',
      description:
        'Implementing awareness activities and support to vaccination centers to help communities recover from the impacts of the COVID-19 pandemic.',
      duration: '2021-2022',
      partner: 'PLAN International',
    },
    {
      title: 'Voter Education to Marginalized Groups',
      description:
        'Increasing voter participation by educating marginalized communities about voting rights and the importance of casting valid votes.',
      duration: '2022',
      partner: 'United Nations Development Programme',
    },
    {
      title: 'Value Chain for Inclusive Transformation of Agriculture',
      description:
        'Supporting smallholder farmers by providing farm equipment and strengthening the agricultural value chain for inclusive growth.',
      duration: '2022',
      partner: 'Heifer Project International',
    },
    {
      title: 'SAKRIYA',
      description:
        'Documenting child labor practices, raising awareness for worker protection, and implementing initiatives to address labor abuses and child labor.',
      duration: '2019-2022',
      partner: 'World Education',
    },
  ];

  return (
    <div className="container mx-auto py-16 px-6">
      <h1 className="text-5xl font-extrabold text-center text-blue-700 mb-8">Our Completed Projects</h1>
      <p className="text-lg text-gray-600 text-center leading-relaxed mb-12">
        These projects represent our commitment to making a meaningful and lasting impact in the communities we serve.
      </p>

      {/* Project Cards Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {completedProjects.map((project, index) => (
          <div
            key={index}
            className="bg-gradient-to-br from-green-50 to-white shadow-lg rounded-lg p-6 hover:scale-105 transition-transform duration-300"
          >
            <h2 className="text-2xl font-semibold text-green-700 flex items-center gap-2 mb-4">
              <FaCheckCircle className="text-green-500" /> {project.title}
            </h2>
            <p className="text-gray-700 mb-4">{project.description}</p>
            <p className="text-sm font-semibold text-blue-700 mb-2">
              <strong>Duration:</strong> {project.duration}
            </p>
            <p className="text-sm font-semibold text-gray-600">
              <strong>Partner:</strong> {project.partner}
            </p>
          </div>
        ))}
      </div>

      {/* Call-to-Action Section */}
      <div className="text-center mt-16">
        <h3 className="text-4xl font-extrabold text-green-700 mb-4">Support Future Projects</h3>
        <p className="text-lg text-gray-700 mb-6">
          Join us in continuing our efforts to build stronger communities. Your support makes a difference.
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

export default CompletedProjects;
