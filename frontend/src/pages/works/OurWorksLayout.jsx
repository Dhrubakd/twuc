import React from 'react';
import { Outlet } from 'react-router-dom';

const OurWorksLayout = () => {
  return (
    <div className="py-10 ">
      {/* <div className="bg-green-100 p-6 rounded-lg mb-6 shadow-md">
        <h1 className="text-4xl font-bold text-center text-green-700 mb-4">Our Works</h1>
        <p className="text-lg text-center text-gray-700">
          Explore our impactful programs, milestones, and geographical reach as we strive for community development and empowerment.
        </p>
      </div> */}
       {/* Hero Section */}
       <div className="relative h-[200px] bg-cover bg-center rounded-md overflow-hidden" style={{ backgroundImage: `url('/assets/about-hero.jpg')` }}>
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <div className="relative z-10 flex justify-center items-center h-full text-white text-center">
          <h1 className="text-5xl font-bold">Our Works</h1>
        </div>
      </div>
      {/* This will render the specific "Our Works" sub-page content */}
      <Outlet />
    </div>
  );
};

export default OurWorksLayout;
