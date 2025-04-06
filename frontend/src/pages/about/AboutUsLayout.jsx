// import React from 'react';
// import { Outlet } from 'react-router-dom';

// const AboutUsLayout = () => {
//   return (
//     <div className="container mx-auto py-10 px-4">
//       <div className="bg-blue-100 p-6 rounded-lg mb-6 shadow-md">
//         <h1 className="text-4xl font-bold text-center text-blue-700 mb-4">About Us</h1>
//         <p className="text-lg text-center text-gray-700">
//           Learn more about our mission, team, and the amazing work we do to empower communities.
//         </p>
//       </div>
//       {/* This will render the specific About Us page */}
//       <Outlet />
//     </div>
//   );
// };

// export default AboutUsLayout;


import React from 'react';
import { Outlet } from 'react-router-dom';

const AboutUsLayout = () => {
  return (
    <div className="py-10">
      {/* Hero Section */}
      <div className="relative h-[200px] bg-cover bg-center rounded-md overflow-hidden" style={{ backgroundImage: `url('/assets/about-hero.jpg')` }}>
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <div className="relative z-10 flex justify-center items-center h-full text-white text-center">
          <h1 className="text-5xl font-bold">About Us</h1>
        </div>

      </div>
      

      {/* About Us Sub-pages Content */}
      <div className="mt-10">
        <Outlet />
      </div>
    </div>
  );
};

export default AboutUsLayout;
