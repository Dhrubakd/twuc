// import React from 'react';

// const JobOpportunities = () => {
//   return (
//     <div className="container mx-auto py-10 px-4 mt-20">
//       <h2 className="text-4xl font-bold text-center mb-6">Job Opportunities</h2>
//       <p className="text-lg text-center text-gray-700 mb-8">
//         Join our team and contribute to our mission of empowering women and uplifting communities. We are looking for dedicated individuals passionate about making a positive impact.
//       </p>

//       {/* Job Categories */}
//       <div className="bg-blue-100 p-6 rounded-lg shadow-md mb-10">
//         <h3 className="text-2xl font-semibold text-blue-700 mb-4">Available Job Categories</h3>
//         <ul className="list-disc list-inside text-lg text-gray-700 space-y-2">
//           <li><span className="font-bold">Field Staff:</span> Social Workers, Project Coordinators, and Community Outreach Officers.</li>
//           <li><span className="font-bold">Office Staff:</span> Finance Officers, HR Assistants, and Administrative Coordinators.</li>
//           <li><span className="font-bold">Training & Education:</span> Trainers for skill development programs, Workshop Coordinators.</li>
//           <li><span className="font-bold">Internships:</span> Opportunities for students in project management, community development, and public health.</li>
//         </ul>
//       </div>

//       {/* Example Open Positions */}
//       <div className="bg-green-100 p-6 rounded-lg shadow-md mb-10">
//         <h3 className="text-2xl font-semibold text-green-700 mb-4">Current Open Positions</h3>
//         <div className="space-y-4">
//           <div className="p-4 bg-white rounded-lg shadow-sm border">
//             <h4 className="text-xl font-semibold">Community Outreach Officer</h4>
//             <p className="text-gray-700">Location: Gulariya-7, Bardiya, Nepal</p>
//             <p className="text-gray-700 mb-2">Responsibilities: Coordinate field activities, interact with local communities, and support ongoing projects.</p>
//             <p className="font-bold text-green-700">Application Deadline: October 31, 2025</p>
//           </div>
//           <div className="p-4 bg-white rounded-lg shadow-sm border">
//             <h4 className="text-xl font-semibold">Finance Officer</h4>
//             <p className="text-gray-700">Location: Office-based (Gulariya, Bardiya)</p>
//             <p className="text-gray-700 mb-2">Responsibilities: Manage budgets, prepare financial reports, and handle expense tracking for projects.</p>
//             <p className="font-bold text-green-700">Application Deadline: November 10, 2025</p>
//           </div>
//           <div className="p-4 bg-white rounded-lg shadow-sm border">
//             <h4 className="text-xl font-semibold">Training Program Coordinator</h4>
//             <p className="text-gray-700">Location: Hybrid (Remote and Field Work)</p>
//             <p className="text-gray-700 mb-2">Responsibilities: Plan and oversee workshops, monitor participant progress, and ensure successful training delivery.</p>
//             <p className="font-bold text-green-700">Application Deadline: November 15, 2025</p>
//           </div>
//         </div>
//       </div>

//       {/* How to Apply Section */}
//       <div className="bg-yellow-100 p-6 rounded-lg shadow-md">
//         <h3 className="text-2xl font-semibold text-yellow-700 mb-4">How to Apply</h3>
//         <p className="text-lg text-gray-700 mb-4">
//           To apply for a position, please email your updated resume and a cover letter to <a href="mailto:twuc.ed@gmail.com" className="text-blue-600 hover:underline">twuc.ed@gmail.com</a>. Be sure to mention the job title in the subject line of your email.
//         </p>
//         <p className="text-lg text-gray-700">
//           For internships, please indicate your area of interest and available dates in your cover letter.
//         </p>
//       </div>

//       {/* Call to Action */}
//       <div className="text-center mt-10">
//         <h3 className="text-2xl font-semibold mb-4">Join Our Team</h3>
//         <p className="text-lg text-gray-700">
//           We look forward to welcoming passionate individuals who want to make a difference in the community. Apply today and be part of something meaningful!
//         </p>
//         <a
//           href="mailto:twuc.ed@gmail.com"
//           className="bg-blue-600 text-white py-2 px-4 mt-6 inline-block rounded-md hover:bg-blue-700 transition duration-300"
//         >
//           Apply Now
//         </a>
//       </div>
//     </div>
//   );
// };

// export default JobOpportunities;
import React from "react";

const JobOpportunities = () => {
  return (
    <div className="container mx-auto py-16 px-6 mt-12">
      <h2 className="text-5xl font-extrabold text-blue-700 text-center mb-12">
        Join Our Team
      </h2>
      <p className="text-xl text-gray-600 text-center mb-12 leading-relaxed max-w-3xl mx-auto">
        Be a part of our mission to empower women and uplift communities. We
        seek dedicated individuals passionate about making a lasting impact
        through innovation and compassion.
      </p>

      {/* Job Categories Section */}
      <section className="mb-16">
        <h3 className="text-3xl font-semibold text-center text-blue-600 mb-8">
          Available Job Categories
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-gradient-to-br from-blue-100 to-blue-50 p-6 rounded-xl shadow-md text-center hover:shadow-lg transition-shadow duration-300">
            <h4 className="text-xl font-bold text-blue-700">Field Staff</h4>
            <p className="text-gray-600 mt-2">
              Social Workers, Project Coordinators, and Community Outreach
              Officers.
            </p>
          </div>
          <div className="bg-gradient-to-br from-green-100 to-green-50 p-6 rounded-xl shadow-md text-center hover:shadow-lg transition-shadow duration-300">
            <h4 className="text-xl font-bold text-green-700">Office Staff</h4>
            <p className="text-gray-600 mt-2">
              Finance Officers, HR Assistants, and Administrative Coordinators.
            </p>
          </div>
          <div className="bg-gradient-to-br from-yellow-100 to-yellow-50 p-6 rounded-xl shadow-md text-center hover:shadow-lg transition-shadow duration-300">
            <h4 className="text-xl font-bold text-yellow-700">
              Training & Education
            </h4>
            <p className="text-gray-600 mt-2">
              Trainers for skill development programs, Workshop Coordinators.
            </p>
          </div>
          <div className="bg-gradient-to-br from-red-100 to-red-50 p-6 rounded-xl shadow-md text-center hover:shadow-lg transition-shadow duration-300">
            <h4 className="text-xl font-bold text-red-700">Internships</h4>
            <p className="text-gray-600 mt-2">
              Opportunities for students in project management, community
              development, and public health.
            </p>
          </div>
        </div>
      </section>

      {/* Current Open Positions Section */}
      <section className="mb-16">
        <h3 className="text-3xl font-semibold text-center text-green-600 mb-8">
          Current Open Positions
        </h3>
        <div className="space-y-8">
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 border-l-4 border-green-600">
            <h4 className="text-2xl font-bold text-green-700">
              Community Outreach Officer
            </h4>
            <p className="text-gray-600 mt-2">Location: Gulariya-7, Bardiya</p>
            <p className="text-gray-600 mt-2">
              Responsibilities: Coordinate field activities, interact with local
              communities, and support ongoing projects.
            </p>
            <p className="font-semibold text-green-600 mt-2">
              Application Deadline: October 31, 2025
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 border-l-4 border-blue-600">
            <h4 className="text-2xl font-bold text-blue-700">Finance Officer</h4>
            <p className="text-gray-600 mt-2">Location: Office-based (Gulariya)</p>
            <p className="text-gray-600 mt-2">
              Responsibilities: Manage budgets, prepare financial reports, and
              handle expense tracking for projects.
            </p>
            <p className="font-semibold text-blue-600 mt-2">
              Application Deadline: November 10, 2025
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 border-l-4 border-yellow-600">
            <h4 className="text-2xl font-bold text-yellow-700">
              Training Program Coordinator
            </h4>
            <p className="text-gray-600 mt-2">Location: Hybrid (Remote + Field)</p>
            <p className="text-gray-600 mt-2">
              Responsibilities: Plan and oversee workshops, monitor participant
              progress, and ensure successful training delivery.
            </p>
            <p className="font-semibold text-yellow-600 mt-2">
              Application Deadline: November 15, 2025
            </p>
          </div>
        </div>
      </section>

      {/* How to Apply Section */}
      <section className="bg-yellow-50 p-8 rounded-lg shadow-md">
        <h3 className="text-3xl font-semibold text-yellow-600 mb-6">
          How to Apply
        </h3>
        <p className="text-lg text-gray-700 mb-4">
          To apply for a position, please email your updated resume and a cover
          letter to{" "}
          <a
            href="mailto:twuc.bardiya2049@gmail.com"
            className="text-blue-600 hover:underline font-bold"
          >
            twuc.bardiya2049@gmail.com
          </a>
          . Be sure to mention the job title in the subject line of your email.
        </p>
        <p className="text-lg text-gray-700">
          For internships, please indicate your area of interest and available
          dates in your cover letter.
        </p>
      </section>

      {/* Final Call to Action */}
      <div className="text-center mt-16">
        <h3 className="text-4xl font-semibold text-blue-600 mb-6">
          Be Part of Our Mission
        </h3>
        <p className="text-lg text-gray-700 mb-6 max-w-2xl mx-auto">
          We welcome passionate individuals who are ready to make a difference.
          Join our dedicated team and help empower the community.
        </p>
        <a
          href="mailto:twuc.bardiya2049@gmail.com"
          className="bg-blue-600 text-white py-3 px-8 rounded-lg text-lg hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl"
        >
          Apply Now
        </a>
      </div>
    </div>
  );
};

export default JobOpportunities;
