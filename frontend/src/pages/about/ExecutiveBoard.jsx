// import React from 'react';

// const ExecutiveBoard = () => {
//   const boardMembers = [
//     { id: 1, name: 'Lilawati Tharu', designation: 'Chairman' },
//     { id: 2, name: 'Dipa Lammichhane', designation: 'Vice Chairman' },
//     { id: 3, name: 'Sunita Chaudhary', designation: 'Secretary' },
//     { id: 4, name: 'Punyakala Chaudhary', designation: 'Treasurer' },
//     { id: 5, name: 'Fulkumari Chaudhary', designation: 'Member' },
//     { id: 6, name: 'Nan Kumari Chaudhary', designation: 'Member' },
//     { id: 7, name: 'Bhagwati Tripathi', designation: 'Member' },
//     { id: 8, name: 'Salama Chaudhary', designation: 'Member' },
//     { id: 9, name: 'Imrana Ansari', designation: 'Member' },
//     { id: 10, name: 'Manju Chaudhary', designation: 'Member' },
//     { id: 11, name: 'Sujuni Tharuni', designation: 'Member' },
//     { id: 12, name: 'Prizma Singh Anmol Tharu', designation: 'Executive Director' },
//   ];

//   return (
//     <div className="container mx-auto py-16 px-6">
//       <h2 className="text-5xl font-extrabold text-blue-700 text-center mb-8">Executive Board Members</h2>
//       <p className="text-lg text-gray-600 text-center leading-relaxed mb-12">
//         Meet our dedicated board members who oversee the organization's initiatives and guide us toward our mission of community empowerment.
//       </p>

//       {/* Executive Board Members Table */}
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
//             {boardMembers.map((member) => (
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
//         <h3 className="text-3xl font-semibold text-blue-700 mb-4">Support Our Leadership</h3>
//         <p className="text-lg text-gray-700 mb-6">
//           Join us in supporting the incredible work led by our executive board. Together, we can make a difference and create lasting change.
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

// export default ExecutiveBoard;
import React from 'react';
import { FaUserTie } from 'react-icons/fa';

const ExecutiveBoard = () => {
  const boardMembers = [
    { id: 1, name: 'Lilawati Tharu', designation: 'Chairman' },
    { id: 2, name: 'Dipa Lammichhane', designation: 'Vice Chairman' },
    { id: 3, name: 'Sunita Chaudhary', designation: 'Secretary' },
    { id: 4, name: 'Punyakala Chaudhary', designation: 'Treasurer' },
    { id: 5, name: 'Fulkumari Chaudhary', designation: 'Member' },
    { id: 6, name: 'Nan Kumari Chaudhary', designation: 'Member' },
    { id: 7, name: 'Bhagwati Tripathi', designation: 'Member' },
    { id: 8, name: 'Salama Chaudhary', designation: 'Member' },
    { id: 9, name: 'Imrana Ansari', designation: 'Member' },
    { id: 10, name: 'Manju Chaudhary', designation: 'Member' },
    { id: 11, name: 'Sujuni Tharuni', designation: 'Member' },
    { id: 12, name: 'Prizma Singh Anmol Tharu', designation: 'Executive Director' },
  ];

  return (
    <div className="container mx-auto py-16 px-6">
      <h2 className="text-5xl font-extrabold text-blue-700 text-center mb-8">Executive Board Members</h2>
      <p className="text-lg text-gray-600 text-center leading-relaxed mb-12">
        Meet our dedicated board members who oversee the organization's initiatives and guide us toward our mission of community empowerment.
      </p>

      {/* Executive Board Members Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {boardMembers.map((member) => (
          <div
            key={member.id}
            className="bg-white shadow-md rounded-lg p-6 hover:shadow-xl hover:scale-105 transition-transform duration-300"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="bg-blue-600 text-white p-4 rounded-full shadow-lg">
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
        <h3 className="text-4xl font-semibold text-blue-700 mb-4">Support Our Leadership</h3>
        <p className="text-lg text-gray-700 mb-6">
          Join us in supporting the incredible work led by our executive board. Together, we can make a difference and create lasting change.
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

export default ExecutiveBoard;
