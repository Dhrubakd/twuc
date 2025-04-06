// // // import React from 'react';
// // // import { Outlet } from 'react-router-dom';

// // // const GalleryLayout = () => {
// // //   return (
// // //     <div className="container mx-auto py-10 px-4">
// // //       {/* <div className="bg-purple-100 p-6 rounded-lg mb-6 shadow-md">
// // //         <h1 className="text-4xl font-bold text-center text-purple-700 mb-4">Gallery</h1>
// // //         <p className="text-lg text-center text-gray-700">
// // //           Browse our collection of photos and videos that showcase our journey, programs, and milestones.
// // //         </p>
// // //       </div> */}
// // //        {/* Hero Section */}
// // //        <div className="relative h-[200px] bg-cover bg-center rounded-md overflow-hidden" style={{ backgroundImage: `url('/assets/about-hero.jpg')` }}>
// // //         <div className="absolute inset-0 bg-black bg-opacity-40"></div>
// // //         <div className="relative z-10 flex justify-center items-center h-full text-white text-center">
// // //           <h1 className="text-5xl font-bold">Gallery</h1>
// // //         </div>
// // //       </div>
// // //       {/* This will render the specific Gallery sub-page content */}
// // //       <Outlet />
// // //     </div>
// // //   );
// // // };

// // // export default GalleryLayout;
// // import { Outlet } from 'react-router-dom';

// // const GalleryLayout = () => {
// //   return (
// //     <div className="container mx-auto py-10 px-4">
// //       <div className="relative h-[300px] bg-cover bg-center rounded-md overflow-hidden" style={{ backgroundImage: `url('/assets/gallery-hero.jpg')` }}>
// //         <div className="absolute inset-0 bg-black bg-opacity-50"></div>
// //         <div className="relative z-10 flex justify-center items-center h-full text-white text-center">
// //           <h1 className="text-5xl font-bold">Gallery</h1>
// //         </div>
// //       </div>

// //       {/* Nested Outlet for Photo/Video content */}
// //       <Outlet />
// //     </div>
// //   );
// // };

// // export default GalleryLayout;
// // import React from 'react';
// // import { Outlet } from 'react-router-dom';

// // const GalleryLayout = () => {
// //   return (
// //     <div className="container mx-auto py-10 px-4">
// //       {/* Hero Section */}
// //       <div className="relative h-[300px] bg-cover bg-center rounded-md overflow-hidden" style={{ backgroundImage: `url('/assets/gallery-hero.jpg')` }}>
// //         <div className="absolute inset-0 bg-black bg-opacity-50"></div>
// //         <div className="relative z-10 flex justify-center items-center h-full text-white text-center">
// //           <h1 className="text-5xl font-bold">Gallery</h1>
// //         </div>
// //       </div>

// //       {/* Nested Routes */}
// //       <Outlet />
// //     </div>
// //   );
// // };

// // export default GalleryLayout;
// import React from 'react';
// import { Outlet } from 'react-router-dom';

// const GalleryLayout = () => {
//   return (
//     <div className="container mx-auto py-10 px-4">
//       {/* Hero Section */}
//       <div className="relative h-[300px] bg-cover bg-center rounded-md overflow-hidden" style={{ backgroundImage: `url('/assets/gallery-hero.jpg')` }}>
//         <div className="absolute inset-0 bg-black bg-opacity-50"></div>
//         <div className="relative z-10 flex justify-center items-center h-full text-white text-center">
//           <h1 className="text-5xl font-bold">Gallery</h1>
//         </div>
//       </div>

//       {/* Render the page content below the hero */}
//       <Outlet />
//     </div>
//   );
// };

// export default GalleryLayout;
import React from 'react';
import { Outlet } from 'react-router-dom';

const GalleryLayout = () => {
  return (
    <div className=" py-10 ">
      {/* Hero Section */}
      <div
        className="relative h-[200px] bg-cover bg-center rounded-md overflow-hidden"
        style={{ backgroundImage: `url('/assets/gallery-hero.jpg')` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative z-10 flex justify-center items-center h-full text-white text-center">
          <h1 className="text-5xl font-bold">Gallery</h1>
        </div>
      </div>

      {/* Render Subpages */}
      <div className="mt-8">
        <Outlet /> {/* Will render the `GalleryPage` */}
      </div>
    </div>
  );
};

export default GalleryLayout;
