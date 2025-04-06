// import React, { useState, useEffect } from "react";
// import { NavLink, useNavigate, useLocation } from "react-router-dom";
// import { FaChevronDown, FaBars, FaTimes } from "react-icons/fa";
// import logo from "../assets/TWUC.png";

// const Navbar = () => {
//   const location = useLocation();
//   const navigate = useNavigate();
//   const [menuOpen, setMenuOpen] = useState(false); // Mobile menu toggle
//   const [activeDropdown, setActiveDropdown] = useState(null); // Track active dropdown for mobile

//   const toggleMenu = () => setMenuOpen(!menuOpen); // Toggle hamburger menu
//   const closeMenu = () => {
//     setMenuOpen(false);
//     setActiveDropdown(null); // Close dropdowns
//   };

//   const handleDropdownToggle = (menu) => {
//     setActiveDropdown(activeDropdown === menu ? null : menu); // Toggle selected dropdown
//   };

//   // Scroll to top when navigating between routes
//   useEffect(() => {
//     window.scrollTo({
//       top: 0,
//       behavior: "smooth",
//     });
//   }, [location]);

//   // Lock scroll on mobile menu open
//   useEffect(() => {
//     document.body.style.overflow = menuOpen ? "hidden" : "auto";
//   }, [menuOpen]);

//   return (
//     <nav className="bg-gradient-to-r from-blue-700 to-blue-500 text-white px-6 py-4 shadow-lg fixed top-0 w-full z-[50]">
//       <div className="container mx-auto flex justify-between items-center relative">
//         {/* Logo */}
//         <div>
//           <NavLink to="/" className="flex items-center">
//             <img src={logo} alt="Logo" className="h-12 w-auto" />
//             <span className="ml-2 text-2xl font-bold">TWUC</span>
//           </NavLink>
//         </div>

//         {/* Hamburger Icon */}
//         <div className="lg:hidden">
//           <button
//             onClick={toggleMenu}
//             className="text-white text-3xl focus:outline-none"
//           >
//             {menuOpen ? <FaTimes /> : <FaBars />}
//           </button>
//         </div>

//         {/* Menu Items */}
//         <div
//           className={`${
//             menuOpen ? "block" : "hidden"
//           } lg:flex flex-col lg:flex-row items-start lg:items-center gap-6 absolute lg:static top-16 left-0 w-full bg-blue-600 lg:bg-transparent lg:w-auto p-6 lg:p-0 transition-all duration-500 ease-in-out z-[100]`}
//         >
//           {/* Home Link */}
//           <NavLink
//             to="/"
//             className={({ isActive }) =>
//               `text-lg hover:text-gray-300 transition-all duration-300 ${
//                 isActive ? "underline underline-offset-8 decoration-2" : ""
//               }`
//             }
//             onClick={closeMenu}
//           >
//             Home
//           </NavLink>

//           {/* About Us */}
//           <div className="relative group lg:static">
//             <div className="flex items-center gap-1">
//               <NavLink
//                 to="/about"
//                 className={({ isActive }) =>
//                   `text-lg hover:text-gray-300 transition-all duration-300 ${
//                     isActive ? "underline underline-offset-8 decoration-2" : ""
//                   }`
//                 }
//                 onClick={closeMenu}
//               >
//                 About Us
//               </NavLink>
//               <button
//                 onClick={() => handleDropdownToggle("about")}
//                 className="lg:hidden hover:text-gray-300 text-lg focus:outline-none"
//               >
//                 <FaChevronDown size={14} />
//               </button>
//             </div>
//             {/* Dropdown - Shows on hover for large screens */}
//             <div
//               className={`${
//                 activeDropdown === "about" ? "block" : "hidden"
//               } lg:group-hover:block lg:absolute bg-white text-black rounded-md shadow-lg py-3 min-w-[220px] z-[200]`}
//             >
//               {/* <NavLink
//                 to="/about/mission-vision-goals"
//                 className="block px-5 py-3 hover:bg-blue-200"
//                 onClick={closeMenu}
//               >
//                 Mission, Vision, and Goals
//               </NavLink> */}
//               <NavLink
//                 to="/about/founder-member"
//                 className="block px-5 py-3 hover:bg-blue-200"
//                 onClick={closeMenu}
//               >
//                 Founder Member
//               </NavLink>
//               <NavLink
//                 to="/about/executive-board"
//                 className="block px-5 py-3 hover:bg-blue-200"
//                 onClick={closeMenu}
//               >
//                 Executive Board Member
//               </NavLink>
//               <NavLink
//                 to="/about/partner"
//                 className="block px-5 py-3 hover:bg-blue-200"
//                 onClick={closeMenu}
//               >
//                 Partner
//               </NavLink>
//               <NavLink
//                 to="/about/running"
//                 className="block px-5 py-3 hover:bg-blue-200"
//                 onClick={closeMenu}
//               >
//                 Running Projects
//               </NavLink>
//               <NavLink
//                 to="/about/completed"
//                 className="block px-5 py-3 hover:bg-blue-200"
//                 onClick={closeMenu}
//               >
//                 Completed Projects
//               </NavLink>
//             </div>
//           </div>

//           {/* Our Works */}
//           <div className="relative group lg:static">
//             <div className="flex items-center gap-1">
//               <NavLink
//                 to="/works"
//                 className={({ isActive }) =>
//                   `text-lg hover:text-gray-300 transition-all duration-300 ${
//                     isActive ? "underline underline-offset-8 decoration-2" : ""
//                   }`
//                 }
//                 onClick={closeMenu}
//               >
//                 Our Works
//               </NavLink>
//               <button
//                 onClick={() => handleDropdownToggle("works")}
//                 className="lg:hidden hover:text-gray-300 text-lg focus:outline-none"
//               >
//                 <FaChevronDown size={14} />
//               </button>
//             </div>
//             <div
//               className={`${
//                 activeDropdown === "works" ? "block" : "hidden"
//               } lg:group-hover:block lg:absolute bg-white text-black rounded-md shadow-lg py-3 min-w-[220px] z-[200]`}
//             >
//               <NavLink
//                 to="/works/programs"
//                 className="block px-5 py-3 hover:bg-blue-200"
//                 onClick={closeMenu}
//               >
//                 Programs
//               </NavLink>
//               <NavLink
//                 to="/works/milestone"
//                 className="block px-5 py-3 hover:bg-blue-200"
//                 onClick={closeMenu}
//               >
//                 Milestone
//               </NavLink>
//               <NavLink
//                 to="/works/geographical"
//                 className="block px-5 py-3 hover:bg-blue-200"
//                 onClick={closeMenu}
//               >
//                 Geographical
//               </NavLink>
//             </div>
//           </div>

//           {/* Gallery */}
//           <div className="relative group lg:static">
//             <div className="flex items-center gap-1">
//               <NavLink
//                 to="/gallery"
//                 className={({ isActive }) =>
//                   `text-lg hover:text-gray-300 transition-all duration-300 ${
//                     isActive ? "underline underline-offset-8 decoration-2" : ""
//                   }`
//                 }
//                 onClick={closeMenu}
//               >
//                 Gallery
//               </NavLink>
//               <button
//                 onClick={() => handleDropdownToggle("gallery")}
//                 className="lg:hidden hover:text-gray-300 text-lg focus:outline-none"
//               >
//                 <FaChevronDown size={14} />
//               </button>
//             </div>
//             <div
//               className={`${
//                 activeDropdown === "gallery" ? "block" : "hidden"
//               } lg:group-hover:block lg:absolute bg-white text-black rounded-md shadow-lg py-3 min-w-[220px] z-[200]`}
//             >
//               <NavLink
//                 to="/gallery/photos"
//                 className="block px-5 py-3 hover:bg-blue-200"
//                 onClick={closeMenu}
//               >
//                 Photos
//               </NavLink>
//               <NavLink
//                 to="/gallery/videos"
//                 className="block px-5 py-3 hover:bg-blue-200"
//                 onClick={closeMenu}
//               >
//                 Videos
//               </NavLink>
//             </div>
//           </div>

//           {/* Resources */}
//           <div className="relative group lg:static">
//             <div className="flex items-center gap-1">
//               <NavLink
//                 to="/resources"
//                 className={({ isActive }) =>
//                   `text-lg hover:text-gray-300 transition-all duration-300 ${
//                     isActive ? "underline underline-offset-8 decoration-2" : ""
//                   }`
//                 }
//                 onClick={closeMenu}
//               >
//                 Resources
//               </NavLink>
//               <button
//                 onClick={() => handleDropdownToggle("resources")}
//                 className="lg:hidden hover:text-gray-300 text-lg focus:outline-none"
//               >
//                 <FaChevronDown size={14} />
//               </button>
//             </div>
//             <div
//               className={`${
//                 activeDropdown === "resources" ? "block" : "hidden"
//               } lg:group-hover:block lg:absolute bg-white text-black rounded-md shadow-lg py-3 min-w-[220px] z-[200]`}
//             >
//               <NavLink
//                 to="/resources/news-events"
//                 className="block px-5 py-3 hover:bg-blue-200"
//                 onClick={closeMenu}
//               >
//                 News and Events
//               </NavLink>
//               <NavLink
//                 to="/resources/media-coverage"
//                 className="block px-5 py-3 hover:bg-blue-200"
//                 onClick={closeMenu}
//               >
//                 Media Coverage
//               </NavLink>
//               <NavLink
//                 to="/resources/publications"
//                 className="block px-5 py-3 hover:bg-blue-200"
//                 onClick={closeMenu}
//               >
//                 Our Publications
//               </NavLink>
//             </div>
//           </div>

//           {/* Other Links */}
//           <div className="grid grid-cols-1 lg:flex lg:gap-8 mt-4 lg:mt-0">
//             <NavLink
//               to="/opportunities"
//               className={({ isActive }) =>
//                 `text-lg hover:text-gray-300 transition-all duration-300 ${
//                   isActive ? "underline underline-offset-8 decoration-2" : ""
//                 }`
//               }
//               onClick={closeMenu}
//             >
//               Opportunities
//             </NavLink>
//             <NavLink
//               to="/contact-us"
//               className={({ isActive }) =>
//                 `text-lg hover:text-gray-300 transition-all duration-300 ${
//                   isActive ? "underline underline-offset-8 decoration-2" : ""
//                 }`
//               }
//               onClick={closeMenu}
//             >
//               Contact Us
//             </NavLink>
//             <NavLink
//               to="/donate-us"
//               className={({ isActive }) =>
//                 `text-lg hover:text-gray-300 transition-all duration-300 ${
//                   isActive ? "underline underline-offset-8 decoration-2" : ""
//                 }`
//               }
//               onClick={closeMenu}
//             >
//               Donate Us
//             </NavLink>
//             {/* <NavLink
//               to="/admin"
//               className={({ isActive }) =>
//                 `text-lg hover:text-gray-300 transition-all duration-300 ${
//                   isActive ? "underline underline-offset-8 decoration-2" : ""
//                 }`
//               }
//               onClick={closeMenu}
//             >
//               Admin
//             </NavLink> */}
//             <NavLink
//   to="/admin"
//   className={({ isActive }) =>
//     `text-lg hover:text-gray-300 transition-all duration-300 ${
//       isActive ? "underline underline-offset-8 decoration-2" : ""
//     }`
//   }
//   onClick={closeMenu}
// >
//   Admin
// </NavLink>

//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;
import React, { useState, useEffect } from "react";
import { NavLink, useNavigate, useLocation } from "react-router-dom";
import { FaChevronDown, FaBars, FaTimes } from "react-icons/fa";
import logo from "../assets/TWUC.png";
import LoginForm from "../admin/LoginForm"; // Import the login form for the modal

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false); // Mobile menu toggle
  const [activeDropdown, setActiveDropdown] = useState(null); // Track active dropdown for mobile
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false); // Track modal open/close

  const toggleMenu = () => setMenuOpen(!menuOpen); // Toggle hamburger menu
  const closeMenu = () => {
    setMenuOpen(false);
    setActiveDropdown(null); // Close dropdowns
  };

  const handleDropdownToggle = (menu) => {
    setActiveDropdown(activeDropdown === menu ? null : menu); // Toggle selected dropdown
  };

  // Scroll to top when navigating between routes
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [location]);

  // Lock scroll on mobile menu open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "auto";
  }, [menuOpen]);


  const openLoginModal = () => setIsLoginModalOpen(true); // Open login modal
  const closeLoginModal = () => setIsLoginModalOpen(false); // Close login modal

  return (
    <nav className="bg-gradient-to-r from-blue-700 to-blue-500 text-white px-6 py-4 shadow-lg fixed top-0 w-full z-[50]">
      <div className="container mx-auto flex justify-between items-center relative">
        {/* Logo */}
        <div>
          <NavLink to="/" className="flex items-center">
            <img src={logo} alt="Logo" className="h-12 w-auto" />
            <span className="ml-2 text-2xl font-bold">TWUC</span>
          </NavLink>
        </div>

        {/* Hamburger Icon */}
        <div className="lg:hidden">
          <button
            onClick={toggleMenu}
            className="text-white text-3xl focus:outline-none"
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Menu Items */}
        <div
          className={`${
            menuOpen ? "block" : "hidden"
          } lg:flex flex-col lg:flex-row items-start lg:items-center gap-6 absolute lg:static top-16 left-0 w-full bg-blue-600 lg:bg-transparent lg:w-auto p-6 lg:p-0 transition-all duration-500 ease-in-out z-[100]`}
        >
          {/* Home Link */}
          <NavLink
            to="/"
            className={({ isActive }) =>
              `text-lg hover:text-gray-300 transition-all duration-300 ${
                isActive ? "underline underline-offset-8 decoration-2" : ""
              }`
            }
            onClick={closeMenu}
          >
            Home
          </NavLink>

          {/* About Us */}
          <div className="relative group lg:static">
            <div className="flex items-center gap-1">
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  `text-lg hover:text-gray-300 transition-all duration-300 ${
                    isActive ? "underline underline-offset-8 decoration-2" : ""
                  }`
                }
                onClick={closeMenu}
              >
                About Us
              </NavLink>
              <button
                onClick={() => handleDropdownToggle("about")}
                className="lg:hidden hover:text-gray-300 text-lg focus:outline-none"
              >
                <FaChevronDown size={14} />
              </button>
            </div>
            {/* Dropdown - Shows on hover for large screens */}
            <div
              className={`${
                activeDropdown === "about" ? "block" : "hidden"
              } lg:group-hover:block lg:absolute bg-white text-black rounded-md shadow-lg py-3 min-w-[220px] z-[200]`}
            >
              {/* <NavLink
                to="/about/mission-vision-goals"
                className="block px-5 py-3 hover:bg-blue-200"
                onClick={closeMenu}
              >
                Mission, Vision, and Goals
              </NavLink> */}
              <NavLink
                to="/about/introduction"
                className="block px-5 py-3 hover:bg-blue-200"
                onClick={closeMenu}
              >
                Introduction
              </NavLink>
              <NavLink
                to="/about/founder-member"
                className="block px-5 py-3 hover:bg-blue-200"
                onClick={closeMenu}
              >
                Founder Member
              </NavLink>
              <NavLink
                to="/about/executive-board"
                className="block px-5 py-3 hover:bg-blue-200"
                onClick={closeMenu}
              >
                Executive Board Member
              </NavLink>
              <NavLink
                to="/about/partner"
                className="block px-5 py-3 hover:bg-blue-200"
                onClick={closeMenu}
              >
                Partner
              </NavLink>
              <NavLink
                to="/about/network"
                className="block px-5 py-3 hover:bg-blue-200"
                onClick={closeMenu}
              >
                Network
              </NavLink>
              
            </div>
          </div>

          {/* Our Works */}
          <div className="relative group lg:static">
            <div className="flex items-center gap-1">
              <NavLink
                to="/works"
                className={({ isActive }) =>
                  `text-lg hover:text-gray-300 transition-all duration-300 ${
                    isActive ? "underline underline-offset-8 decoration-2" : ""
                  }`
                }
                onClick={closeMenu}
              >
                Our Works
              </NavLink>
              <button
                onClick={() => handleDropdownToggle("works")}
                className="lg:hidden hover:text-gray-300 text-lg focus:outline-none"
              >
                <FaChevronDown size={14} />
              </button>
            </div>
            <div
              className={`${
                activeDropdown === "works" ? "block" : "hidden"
              } lg:group-hover:block lg:absolute bg-white text-black rounded-md shadow-lg py-3 min-w-[220px] z-[200]`}
            >
              <NavLink
                to="/works/programs"
                className="block px-5 py-3 hover:bg-blue-200"
                onClick={closeMenu}
              >
                Programs
              </NavLink>
              <NavLink
                to="/works/achievements"
                className="block px-5 py-3 hover:bg-blue-200"
                onClick={closeMenu}
              >
                Achievements
              </NavLink>
              <NavLink
                to="/works/milestone"
                className="block px-5 py-3 hover:bg-blue-200"
                onClick={closeMenu}
              >
                Milestones
              </NavLink>
              <NavLink
                to="/works/geographical"
                className="block px-5 py-3 hover:bg-blue-200"
                onClick={closeMenu}
              >
                Geographical Reach
              </NavLink>
              {/* <NavLink
                to="/about/running"
                className="block px-5 py-3 hover:bg-blue-200"
                onClick={closeMenu}
              >
                Running Projects
              </NavLink>
              <NavLink
                to="/about/completed"
                className="block px-5 py-3 hover:bg-blue-200"
                onClick={closeMenu}
              >
                Completed Projects
              </NavLink> */}
            </div>
          </div>

          {/* Gallery */}
          <div className="relative group lg:static">
            <div className="flex items-center gap-1">
              <NavLink
                to="/gallery"
                className={({ isActive }) =>
                  `text-lg hover:text-gray-300 transition-all duration-300 ${
                    isActive ? "underline underline-offset-8 decoration-2" : ""
                  }`
                }
                onClick={closeMenu}
              >
                Gallery
              </NavLink>
              <button
                onClick={() => handleDropdownToggle("gallery")}
                className="lg:hidden hover:text-gray-300 text-lg focus:outline-none"
              >
                <FaChevronDown size={14} />
              </button>
            </div>
            <div
              className={`${
                activeDropdown === "gallery" ? "block" : "hidden"
              } lg:group-hover:block lg:absolute bg-white text-black rounded-md shadow-lg py-3 min-w-[220px] z-[200]`}
            >
              <NavLink
                to="/gallery/photos"
                className="block px-5 py-3 hover:bg-blue-200"
                onClick={closeMenu}
              >
                Photos
              </NavLink>
              <NavLink
                to="/gallery/videos"
                className="block px-5 py-3 hover:bg-blue-200"
                onClick={closeMenu}
              >
                Videos
              </NavLink>
            </div>
          </div>

          {/* Resources */}
          <div className="relative group lg:static">
            <div className="flex items-center gap-1">
              <NavLink
                to="/resources"
                className={({ isActive }) =>
                  `text-lg hover:text-gray-300 transition-all duration-300 ${
                    isActive ? "underline underline-offset-8 decoration-2" : ""
                  }`
                }
                onClick={closeMenu}
              >
                Resources
              </NavLink>
              <button
                onClick={() => handleDropdownToggle("resources")}
                className="lg:hidden hover:text-gray-300 text-lg focus:outline-none"
              >
                <FaChevronDown size={14} />
              </button>
            </div>
            <div
              className={`${
                activeDropdown === "resources" ? "block" : "hidden"
              } lg:group-hover:block lg:absolute bg-white text-black rounded-md shadow-lg py-3 min-w-[220px] z-[200]`}
            >
              <NavLink
                to="/resources/news-events"
                className="block px-5 py-3 hover:bg-blue-200"
                onClick={closeMenu}
              >
                News and Events
              </NavLink>
              <NavLink
                to="/resources/media-coverage"
                className="block px-5 py-3 hover:bg-blue-200"
                onClick={closeMenu}
              >
                Media Coverage
              </NavLink>
              <NavLink
                to="/resources/publications"
                className="block px-5 py-3 hover:bg-blue-200"
                onClick={closeMenu}
              >
                Our Publications
              </NavLink>
              <NavLink
                to="/resources/notices"
                className="block px-5 py-3 hover:bg-blue-200"
                onClick={closeMenu}
              >
                Notices
              </NavLink>
            </div>
          </div>

          {/* Other Links */}
          <div className="grid grid-cols-1 lg:flex lg:gap-8 mt-4 lg:mt-0">
            <NavLink
              to="/opportunities"
              className={({ isActive }) =>
                `text-lg hover:text-gray-300 transition-all duration-300 ${
                  isActive ? "underline underline-offset-8 decoration-2" : ""
                }`
              }
              onClick={closeMenu}
            >
              Opportunities
            </NavLink>
            <NavLink
              to="/contact-us"
              className={({ isActive }) =>
                `text-lg hover:text-gray-300 transition-all duration-300 ${
                  isActive ? "underline underline-offset-8 decoration-2" : ""
                }`
              }
              onClick={closeMenu}
            >
              Contact Us
            </NavLink>
            <NavLink
              to="/donate-us"
              className={({ isActive }) =>
                `text-lg hover:text-gray-300 transition-all duration-300 font-bold text-[gold]  ${
                  isActive ? "underline underline-offset-8 decoration-2" : ""
                }`
              }
              onClick={closeMenu}
            >
              Donate us
            </NavLink>
            {/* <NavLink
              to="/admin"
              className={({ isActive }) =>
                `text-lg hover:text-gray-300 transition-all duration-300 ${
                  isActive ? "underline underline-offset-8 decoration-2" : ""
                }`
              }
              onClick={closeMenu}
            >
              Admin
            </NavLink> */}
            {/* <NavLink
              to="/admin"
              className={({ isActive }) =>
                `text-lg hover:text-gray-300 transition-all duration-300 ${
                  isActive ? "underline underline-offset-8 decoration-2" : ""
                }`
              }
              onClick={closeMenu}
            >
              Admin
            </NavLink> */}
            {/* Admin NavLink */}
            
            <button
              onClick={openLoginModal}
              className="text-lg hover:text-gray-300 transition-all duration-300"
            >
              Admin
            </button>
          </div>
        </div>
        {/* Login Modal */}
      {isLoginModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-[1000]">
          <div className="bg-white rounded-lg p-6 w-full max-w-md shadow-lg relative">
            <button
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
              onClick={closeLoginModal}
            >
              ✕
            </button>
            <LoginForm
              onLoginSuccess={() => {
                closeLoginModal(); // Close modal on success
                window.open("/admin/dashboard", "_blank"); // Open dashboard in a new tab
              }}
            />
          </div>
        </div>
      )}
      </div>
    </nav>
  );
};

export default Navbar;
