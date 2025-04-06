import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import { FaImages, FaVideo } from "react-icons/fa";

const GalleryPage = () => {
  return (
    <div className="text-center max-w-7xl mx-auto py-16 px-6">
      <h2 className="text-5xl font-extrabold text-purple-700 mb-12">
        Our Gallery
      </h2>
      <p className="text-xl text-gray-600 leading-relaxed mb-12">
        Explore memorable moments from our events, programs, and initiatives.
        Our gallery showcases the inspiring work being done and the smiles we’ve
        brought to our communities.
      </p>

      {/* Tabs for Photo and Video Gallery */}
      <div className="flex justify-center gap-6 mb-8 border-b-2 border-gray-300">
        <NavLink
          to="photos"
          className={({ isActive }) =>
            `text-lg py-3 px-6 font-semibold border-b-4 ${
              isActive ? "border-purple-700 text-purple-700" : "text-gray-600"
            }`
          }
        >
          <FaImages className="inline mr-2" /> Photo Gallery
        </NavLink>
        <NavLink
          to="videos"
          className={({ isActive }) =>
            `text-lg py-3 px-6 font-semibold border-b-4 ${
              isActive ? "border-purple-700 text-purple-700" : "text-gray-600"
            }`
          }
        >
          <FaVideo className="inline mr-2" /> Video Gallery
        </NavLink>
      </div>

      {/* Render the Subpage (PhotosPage or VideosPage) below the tabs */}
      <div className="mt-8">
        <Outlet />
      </div>
    </div>
  );
};

export default GalleryPage;

// import React from "react";
// import { NavLink, Outlet } from "react-router-dom";
// import { FaImages, FaVideo } from "react-icons/fa";

// const GalleryPage = () => {
//   return (
//     <div className="text-center max-w-7xl mx-auto py-16 px-6">
//       <h2 className="text-5xl font-extrabold text-purple-700 mb-12">
//         Our Gallery
//       </h2>
//       <p className="text-xl text-gray-600 leading-relaxed mb-12">
//         Explore memorable moments from our events, programs, and initiatives.
//         Our gallery showcases the inspiring work being done and the smiles we’ve
//         brought to our communities.
//       </p>

//       {/* Buttons for Photo and Video Gallery */}
//       <div className="flex justify-center gap-6 mb-8">
//         <NavLink
//           to="photos"
//           className={({ isActive }) =>
//             `text-lg py-3 px-6 font-semibold rounded-lg shadow-md transition-all duration-300 ${
//               isActive
//                 ? "bg-purple-700 text-white"
//                 : "bg-gray-100 text-gray-700 hover:bg-purple-600 hover:text-white"
//             }`
//           }
//         >
//           <FaImages className="inline mr-2" /> Photo Gallery
//         </NavLink>
//         <NavLink
//           to="videos"
//           className={({ isActive }) =>
//             `text-lg py-3 px-6 font-semibold rounded-lg shadow-md transition-all duration-300 ${
//               isActive
//                 ? "bg-purple-700 text-white"
//                 : "bg-gray-100 text-gray-700 hover:bg-purple-600 hover:text-white"
//             }`
//           }
//         >
//           <FaVideo className="inline mr-2" /> Video Gallery
//         </NavLink>
//       </div>

//       {/* Render the Subpage (PhotosPage or VideosPage) below the tabs */}
//       <div className="mt-8">
//         <Outlet />
//       </div>
//     </div>
//   );
// };

// export default GalleryPage;
