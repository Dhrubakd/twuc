// import React from 'react';

// const Partner = () => {
//   const partners = [
//     { id: 1, name: 'I.C.R.C' },
//     { id: 2, name: 'DAN Church Aid' },
//     { id: 3, name: 'Heifer Project International' },
//     { id: 4, name: 'Helvetas' },
//     { id: 5, name: 'IDE Nepal' },
//     { id: 6, name: 'IFA/Germany' },
//     { id: 7, name: 'Nagarik Aawaz' },
//     { id: 8, name: 'NGO Federation' },
//     { id: 9, name: 'Oxfam' },
//     { id: 10, name: 'Plan International Nepal' },
//     { id: 11, name: 'Saathi' },
//     { id: 12, name: 'SAP Nepal' },
//     { id: 13, name: 'Shtrii Shakti' },
//     { id: 14, name: 'The Lutheran World Federation Nepal' },
//     { id: 15, name: 'UN HABITAT' },
//     { id: 16, name: 'UNDP' },
//     { id: 17, name: 'US Fish and Wildlife Service' },
//     { id: 18, name: 'USAID' },
//     { id: 19, name: 'World Education' },
//   ];

//   return (
//     <div className="container mx-auto py-16 px-6">
//       <h2 className="text-5xl font-extrabold text-blue-700 text-center mb-8">Our Partners</h2>
//       <p className="text-lg text-gray-600 text-center leading-relaxed mb-12">
//         We are grateful to collaborate with exceptional partners who support us in our mission to create lasting change and empower communities.
//       </p>

//       {/* Partners Table */}
//       <div className="overflow-x-auto">
//         <table className="w-full border-collapse bg-white shadow-lg rounded-lg overflow-hidden">
//           <thead className="bg-green-600 text-white">
//             <tr>
//               <th className="py-4 px-6 text-left text-lg font-semibold">S.No</th>
//               <th className="py-4 px-6 text-left text-lg font-semibold">Name</th>
//             </tr>
//           </thead>
//           <tbody className="divide-y divide-gray-200">
//             {partners.map((partner) => (
//               <tr key={partner.id} className="hover:bg-green-100">
//                 <td className="py-4 px-6 text-gray-700 text-lg">{partner.id}</td>
//                 <td className="py-4 px-6 text-gray-700 text-lg">{partner.name}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>

//       {/* Call-to-Action Section */}
//       <div className="text-center mt-10">
//         <h3 className="text-3xl font-semibold text-green-700 mb-4">Join Our Network</h3>
//         <p className="text-lg text-gray-700 mb-6">
//           If you are an organization that shares our vision, we invite you to become a partner in empowering communities and creating sustainable change.
//         </p>
//         <div className="flex justify-center gap-6">
//           <a
//             href="/contact-us"
//             className="bg-blue-600 text-white py-3 px-6 rounded-lg text-lg hover:bg-blue-700 transition duration-300"
//           >
//             Contact Us
//           </a>
//           <a
//             href="/donate-us"
//             className="bg-green-600 text-white py-3 px-6 rounded-lg text-lg hover:bg-green-700 transition duration-300"
//           >
//             Donate Now
//           </a>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Partner;
import React from 'react';
import { FaHandshake } from 'react-icons/fa';

const Partner = () => {
  const partners = [
    { id: 1, name: 'I.C.R.C' },
    { id: 2, name: 'DAN Church Aid' },
    { id: 3, name: 'Heifer Project International' },
    { id: 4, name: 'Helvetas' },
    { id: 5, name: 'IDE Nepal' },
    { id: 6, name: 'IFA/Germany' },
    { id: 7, name: 'Nagarik Aawaz' },
    { id: 8, name: 'NGO Federation' },
    { id: 9, name: 'Oxfam' },
    { id: 10, name: 'Plan International Nepal' },
    { id: 11, name: 'Saathi' },
    { id: 12, name: 'SAP Nepal' },
    { id: 13, name: 'Shtrii Shakti' },
    { id: 14, name: 'The Lutheran World Federation Nepal' },
    { id: 15, name: 'UN HABITAT' },
    { id: 16, name: 'UNDP' },
    { id: 17, name: 'US Fish and Wildlife Service' },
    { id: 18, name: 'USAID' },
    { id: 19, name: 'World Education' },
  ];

  return (
    <div className="container mx-auto py-16 px-6">
      <h2 className="text-5xl font-extrabold text-blue-700 text-center mb-8">Our Partners</h2>
      <p className="text-lg text-gray-600 text-center leading-relaxed mb-12">
        We are grateful to collaborate with exceptional partners who support us in our mission to create lasting change and empower communities.
      </p>

      {/* Partner Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {partners.map((partner) => (
          <div
            key={partner.id}
            className="bg-white shadow-md rounded-lg p-6 flex items-center gap-4 hover:shadow-xl hover:scale-105 transition-transform duration-300"
          >
            <div className="bg-green-600 text-white p-4 rounded-full">
              <FaHandshake size={32} />
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-blue-700">{partner.name}</h3>
            </div>
          </div>
        ))}
      </div>

      {/* Call-to-Action Section */}
      <div className="text-center mt-16">
        <h3 className="text-4xl font-semibold text-green-700 mb-4">Join Our Network</h3>
        <p className="text-lg text-gray-700 mb-6">
          If you are an organization that shares our vision, we invite you to become a partner in empowering communities and creating sustainable change.
        </p>
        <div className="flex justify-center gap-6">
          <a
            href="/contact-us"
            className="bg-blue-600 text-white py-3 px-6 rounded-lg text-lg hover:bg-blue-700 transition duration-300"
          >
            Contact Us
          </a>
          <a
            href="/donate-us"
            className="bg-green-600 text-white py-3 px-6 rounded-lg text-lg hover:bg-green-700 transition duration-300"
          >
            Donate Now
          </a>
        </div>
      </div>
    </div>
  );
};

export default Partner;
