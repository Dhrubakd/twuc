// import { NavLink, Routes, Route } from "react-router-dom";

// import PhotosManagement from "./PhotosManagement";
// import VideoManagement from "./VideoManagement";
// import Dashboard from "./Dashboard";
// import PasswordChange from "./PasswordChange";
// import ProtectedRoute from "./ProtectedRoute";

// function AdminPanel() {
//   return (
//     <ProtectedRoute>
//       <div className="flex">
//         {/* Sidebar */}
//         <aside className="w-64 lg:fixed h-screen overflow-y-auto p-6 shadow-lg bg-white text-gray-800">
//           <h1 className="text-2xl font-extrabold mb-6 text-center border-b pb-4 text-teal-700">
//             Admin Panel
//           </h1>
//           <nav className="space-y-1">
//             {[
//               {
//                 to: "dashboard",
//                 label: "Dashboard",
//                 icon: <FaHome size={20} />,
//               },

//               {
//                 to: "photos",
//                 label: "Photo Management",
//                 icon: <MdOutlinePhotoCamera size={20} />,
//               },
//               {
//                 to: "videos",
//                 label: "Video Management",
//                 icon: <FaVideo size={20} />,
//               },

//               {
//                 to: "password-change",
//                 label: "Change Password",
//                 icon: <FaLock size={20} />,
//               },
//             ].map((item) => (
//               <NavLink
//                 key={item.to}
//                 to={`/admin/${item.to}`}
//                 className={({ isActive }) =>
//                   `flex items-center gap-4 px-4 py-3 text-sm rounded-lg transition duration-300 shadow-md ${
//                     isActive
//                       ? "bg-gradient-to-r from-teal-500 to-teal-700 text-white"
//                       : "hover:bg-gray-100 hover:text-teal-600"
//                   }`
//                 }
//               >
//                 {item.icon}
//                 {item.label}
//               </NavLink>
//             ))}
//           </nav>
//           <div className="mt-6 text-center">
//             <Logout />
//           </div>
//         </aside>

//         {/* Main Content */}
//         <main className="lg:ml-64 flex-grow bg-gray-50 p-10 shadow-inner rounded-lg min-h-screen">
//           <Routes>
//             <Route path="dashboard" element={<Dashboard />} />

//             <Route path="photos" element={<PhotosManagement />} />
//             <Route path="videos" element={<VideoManagement />} />

//             <Route path="password-change" element={<PasswordChange />} />
//           </Routes>
//         </main>
//       </div>
//     </ProtectedRoute>
//   );
// }

// export default AdminPanel;
// import React from "react";
// import { Routes, Route, NavLink, Navigate } from "react-router-dom";
// import Dashboard from "./Dashboard";
// import PhotosManagement from "./PhotosManagement";
// import VideoManagement from "./VideoManagement";
// import PasswordChange from "./PasswordChange";
// import Logout from "./Logout";

// function AdminPanel() {
//   return (
//     <div className="flex">
//       {/* Sidebar */}
//       <aside className="w-64 h-screen overflow-y-auto p-6 shadow-lg bg-white">
//         <h1 className="text-2xl font-extrabold mb-6 text-center border-b pb-4 text-teal-700">Admin Panel</h1>
//         <nav className="space-y-4">
//           <NavLink
//             to="/admin/dashboard"
//             className={({ isActive }) =>
//               `block px-4 py-2 rounded-lg ${
//                 isActive ? "bg-teal-700 text-white" : "text-gray-700 hover:bg-teal-100"
//               }`
//             }
//           >
//             Dashboard
//           </NavLink>
//           <NavLink
//             to="/admin/photos"
//             className={({ isActive }) =>
//               `block px-4 py-2 rounded-lg ${
//                 isActive ? "bg-teal-700 text-white" : "text-gray-700 hover:bg-teal-100"
//               }`
//             }
//           >
//             Photo Management
//           </NavLink>
//           <NavLink
//             to="/admin/videos"
//             className={({ isActive }) =>
//               `block px-4 py-2 rounded-lg ${
//                 isActive ? "bg-teal-700 text-white" : "text-gray-700 hover:bg-teal-100"
//               }`
//             }
//           >
//             Video Management
//           </NavLink>
//           <NavLink
//             to="/admin/password-change"
//             className={({ isActive }) =>
//               `block px-4 py-2 rounded-lg ${
//                 isActive ? "bg-teal-700 text-white" : "text-gray-700 hover:bg-teal-100"
//               }`
//             }
//           >
//             Change Password
//           </NavLink>
//         </nav>
//         <div className="mt-6">
//           <Logout />
//         </div>
//       </aside>

//       {/* Main Content */}
//       <main className="flex-grow p-6">
//         <Routes>
//           <Route path="/" element={<Navigate to="/admin/dashboard" />} />
//           <Route path="dashboard" element={<Dashboard />} />
//           <Route path="photos" element={<PhotosManagement />} />
//           <Route path="videos" element={<VideoManagement />} />
//           <Route path="password-change" element={<PasswordChange />} />
//         </Routes>
//       </main>
//     </div>
//   );
// }

// export default AdminPanel;
import React from "react";
import { Routes, Route, NavLink, Navigate } from "react-router-dom";
import Dashboard from "./Dashboard";
import PhotosManagement from "./PhotosManagement";
import VideoManagement from "./VideoManagement";
import PasswordChange from "./PasswordChange";
import Logout from "./Logout";
import NoticesManagement from "./NoticesManagement";

function AdminPanel() {
  return (
    <div className="flex">
      {/* Sidebar */}
      <aside className="w-64 h-screen overflow-y-auto p-6 shadow-lg bg-white">
        <h1 className="text-2xl font-extrabold mb-6 text-center border-b pb-4 text-teal-700">
          Admin Panel
        </h1>
        <nav className="space-y-4">
          <NavLink
            to="/admin/dashboard"
            className={({ isActive }) =>
              `block px-4 py-2 rounded-lg ${
                isActive ? "bg-teal-700 text-white" : "text-gray-700 hover:bg-teal-100"
              }`
            }
          >
            Dashboard
          </NavLink>
          <NavLink
            to="/admin/photos"
            className={({ isActive }) =>
              `block px-4 py-2 rounded-lg ${
                isActive ? "bg-teal-700 text-white" : "text-gray-700 hover:bg-teal-100"
              }`
            }
          >
            Photo Management
          </NavLink>
          <NavLink
            to="/admin/videos"
            className={({ isActive }) =>
              `block px-4 py-2 rounded-lg ${
                isActive ? "bg-teal-700 text-white" : "text-gray-700 hover:bg-teal-100"
              }`
            }
          >
            Video Management
          </NavLink>
          <NavLink
            to="/admin/notices"
            className={({ isActive }) =>
              `block px-4 py-2 rounded-lg ${
                isActive ? "bg-teal-700 text-white" : "text-gray-700 hover:bg-teal-100"
              }`
            }
          >
            Notice Management
          </NavLink>
          <NavLink
            to="/admin/password-change"
            className={({ isActive }) =>
              `block px-4 py-2 rounded-lg ${
                isActive ? "bg-teal-700 text-white" : "text-gray-700 hover:bg-teal-100"
              }`
            }
          >
            Change Password
          </NavLink>
        </nav>
        <div className="mt-6">
          <Logout />
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-grow p-6 bg-gray-50 min-h-screen rounded-lg shadow-inner">
        <Routes>
          <Route path="/" element={<Navigate to="/admin/dashboard" />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="photos" element={<PhotosManagement />} />
          <Route path="videos" element={<VideoManagement />} />
          <Route path="password-change" element={<PasswordChange />} />
          <Route path="notices" element={<NoticesManagement />} />
        </Routes>
      </main>
    </div>
  );
}

export default AdminPanel;
