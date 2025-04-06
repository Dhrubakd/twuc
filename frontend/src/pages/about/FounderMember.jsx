// import React from 'react';

// const FounderMember = () => {
//   const members = [
//     { id: 1, name: 'Nirmala Chaudhary', designation: 'Chairman' },
//     { id: 2, name: 'Sabitri Gautam', designation: 'Vice Chairman' },
//     { id: 3, name: 'Prizma Singh Anmol Tharu', designation: 'Secretary' },
//     { id: 4, name: 'Holbi Tharu', designation: 'Treasurer' },
//     { id: 5, name: 'Kalti Tharu', designation: 'Member' },
//     { id: 6, name: 'Pradeshni Tharu', designation: 'Member' },
//     { id: 7, name: 'Jageshwori Tharu', designation: 'Member' },
//     { id: 8, name: 'Munsi Devi Tharu', designation: 'Member' },
//     { id: 9, name: 'Mayalu Tharu', designation: 'Member' },
//     { id: 10, name: 'Bidiya Tharu', designation: 'Member' },
//     { id: 11, name: 'Subutri Tharu', designation: 'Member' },
//     { id: 12, name: 'Sompati Tharu', designation: 'Executive Director' },
//     { id: 13, name: 'Rupani Tharu', designation: 'Executive Director' },
//   ];

//   return (
//     <div className="container mx-auto py-16 px-6">
//       <h2 className="text-5xl font-extrabold text-blue-700 text-center mb-8">Founder Members</h2>
//       <p className="text-lg text-gray-600 text-center leading-relaxed mb-12">
//         Meet the inspiring individuals who laid the foundation for our organization and continue to guide us on our journey toward community empowerment.
//       </p>

//       {/* Founder Members Table */}
//       <div className="overflow-x-auto">
//         <table className="w-full border-collapse bg-white shadow-lg rounded-lg overflow-hidden">
//           <thead className="bg-blue-600 text-white">
//             <tr>
//               <th className="py-4 px-6 text-left text-lg font-semibold">S.No</th>
//               <th className="py-4 px-6 text-left text-lg font-semibold">Name</th>
//               <th className="py-4 px-6 text-left text-lg font-semibold">Designation</th>
//             </tr>
//           </thead>
//           <tbody className="divide-y divide-gray-200">
//             {members.map((member) => (
//               <tr key={member.id} className="hover:bg-blue-100">
//                 <td className="py-4 px-6 text-gray-700 text-lg">{member.id}</td>
//                 <td className="py-4 px-6 text-gray-700 text-lg">{member.name}</td>
//                 <td className="py-4 px-6 text-gray-700 text-lg">{member.designation}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>

//       {/* Call-to-Action Section */}
//       <div className="text-center mt-10">
//         <h3 className="text-3xl font-semibold text-blue-700 mb-4">Support Our Vision</h3>
//         <p className="text-lg text-gray-700 mb-6">
//           Join us in continuing the legacy of our founder members and contribute to building a stronger community.
//         </p>
//         <div className="flex justify-center gap-6">
//           <a
//             href="/donate-us"
//             className="bg-green-600 text-white py-3 px-6 rounded-lg text-lg hover:bg-green-700 transition duration-300"
//           >
//             Donate Now
//           </a>
//           <a
//             href="/opportunities"
//             className="bg-blue-600 text-white py-3 px-6 rounded-lg text-lg hover:bg-blue-700 transition duration-300"
//           >
//             Join Our Team
//           </a>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default FounderMember;
import React from 'react';
import { FaUserTie } from 'react-icons/fa';

const FounderMember = () => {
  const members = [
    { id: 1, name: 'Nirmala Chaudhary', designation: 'Chairperson' },
    { id: 2, name: 'Sabitri Gautam', designation: 'Vice Chairperson' },
    { id: 3, name: 'Prizma Singh Anmol Tharu', designation: 'Secretary' },
    { id: 4, name: 'Holbi Tharu', designation: 'Treasurer' },
    { id: 5, name: 'Kalti Tharu', designation: 'Member' },
    { id: 6, name: 'Pradeshni Tharu', designation: 'Member' },
    { id: 7, name: 'Jageshwori Tharu', designation: 'Member' },
    { id: 8, name: 'Munsi Devi Tharu', designation: 'Member' },
    { id: 9, name: 'Mayalu Tharu', designation: 'Member' },
    { id: 10, name: 'Bidiya Tharu', designation: 'Member' },
    { id: 11, name: 'Subutri Tharu', designation: 'Member' },
    { id: 12, name: 'Sompati Tharu', designation: ' Member' },
    { id: 13, name: 'Rupani Tharu', designation: ' Memeber' },
  ];

  return (
    <div className="container mx-auto py-16 px-6">
      <h2 className="text-5xl font-extrabold text-blue-700 text-center mb-8">Founder Members</h2>
      <p className="text-lg text-gray-600 text-center leading-relaxed mb-12">
        Meet the inspiring individuals who laid the foundation for our organization and continue to guide us on our journey toward community empowerment.
      </p>

      {/* Member Cards Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {members.map((member) => (
          <div
            key={member.id}
            className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow duration-300"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="bg-blue-500 text-white p-4 rounded-full">
                <FaUserTie size={32} />
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-blue-700">{member.name}</h3>
                <p className="text-lg text-gray-500">{member.designation}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Call-to-Action Section */}
      <div className="text-center mt-16">
        <h3 className="text-4xl font-semibold text-blue-700 mb-4">Support Our Vision</h3>
        <p className="text-lg text-gray-700 mb-6">
          Join us in continuing the legacy of our founder members and contribute to building a stronger community.
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

export default FounderMember;
