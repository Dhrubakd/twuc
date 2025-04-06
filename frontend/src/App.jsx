// // // // import React from 'react';
// // // // import { Routes, Route } from 'react-router-dom';


// // // // import Navbar from './layouts/Navbar';
// // // // import Footer from './layouts/Footer';
// // // // import HomePage from './pages/HomePage';
// // // // import LoginForm from "./admin/LoginForm"; // Import the login form

// // // // // About Us Pages
// // // // import AboutUsLayout from './pages/about/AboutUsLayout';
// // // // import AboutPage from './pages/about/AboutPage';
// // // // import MissionVisionGoals from './pages/about/MissionVisionGoals';
// // // // import FounderMember from './pages/about/FounderMember';
// // // // import ExecutiveBoard from './pages/about/ExecutiveBoard';
// // // // import Partner from './pages/about/Partner';
// // // // import RunningProjects from './pages/about/RunningProjects';
// // // // import CompletedProjects from './pages/about/CompletedProjects';

// // // // // Our Works Pages
// // // // import OurWorksLayout from './pages/works/OurWorksLayout';
// // // // import OurWorksPage from './pages/works/OurWorksPage';
// // // // import Programs from './pages/works/Programs';
// // // // import Milestone from './pages/works/Milestone';
// // // // import Geographical from './pages/works/Geographical';

// // // // // Gallery Pages
// // // // import GalleryLayout from './pages/gallery/GalleryLayout';
// // // // import GalleryPage from './pages/gallery/GalleryPage';
// // // // import PhotosPage from './pages/gallery/PhotosPage';
// // // // import VideosPage from './pages/gallery/VideosPage';


// // // // // Resources Pages
// // // // import ResourcesLayout from './pages/resources/ResourcesLayout';
// // // // import ResourcesPage from './pages/resources/ResourcesPage';
// // // // import NewsAndEvents from './pages/resources/NewsAndEvents';
// // // // import MediaCoverage from './pages/resources/MediaCoverage';
// // // // import Publications from './pages/resources/Publications';

// // // // // Other Pages
// // // // import JobOpportunities from './pages/opportunities/JobOpportunities';
// // // // import ContactUs from './pages/ContactUs';
// // // // import DonateUs from './pages/DonateUs';
// // // // import AdminDashboard from './admin/AdminDashboard';

// // // // const App = () => {
// // // //   return (
// // // //     <div className="flex flex-col min-h-screen">
// // // //       <Navbar />
// // // //       <main className="flex-grow">
// // // //         <Routes>
// // // //           {/* Home Page */}
// // // //           <Route path="/" element={<HomePage />} />

// // // //           {/* About Us Pages */}
// // // //           <Route path="/about" element={<AboutUsLayout />}>
// // // //             <Route index element={<AboutPage />} />
// // // //             <Route path="mission-vision-goals" element={<MissionVisionGoals />} />
// // // //             <Route path="founder-member" element={<FounderMember />} />
// // // //             <Route path="executive-board" element={<ExecutiveBoard />} />
// // // //             <Route path="partner" element={<Partner />} />
// // // //             <Route path="running" element={<RunningProjects />} />
// // // //             <Route path="completed" element={<CompletedProjects />} />
// // // //           </Route>

// // // //           {/* Our Works Pages */}
// // // //           <Route path="/works" element={<OurWorksLayout />}>
// // // //             <Route index element={<OurWorksPage />} />
// // // //             <Route path="programs" element={<Programs />} />
// // // //             <Route path="milestone" element={<Milestone />} />
// // // //             <Route path="geographical" element={<Geographical />} />
// // // //           </Route>

// // // //           {/* Gallery Section */}
// // // //           {/* <Route path="/gallery" element={<GalleryLayout />}>
// // // //             <Route index element={<GalleryPage />} />
// // // //             <Route path="photos" element={<PhotosPage />} />
// // // //             <Route path="videos" element={<VideosPage />} />
// // // //           </Route> */}
// // // //           {/* Gallery Pages */}
// // // //           <Route path="/gallery" element={<GalleryLayout />}>
// // // //               <Route index element={<GalleryPage />} /> {/* Shows tabs for Photos and Videos */}
// // // //               <Route path="photos" element={<PhotosPage />} /> {/* Photo Gallery Page */}
// // // //               <Route path="videos" element={<VideosPage />} /> {/* Video Gallery Page */}
// // // //             </Route>

// // // //           {/* Resources Pages */}
// // // //           <Route path="/resources" element={<ResourcesLayout />}>
// // // //             <Route index element={<ResourcesPage />} />
// // // //             <Route path="news-events" element={<NewsAndEvents />} />
// // // //             <Route path="media-coverage" element={<MediaCoverage />} />
// // // //             <Route path="publications" element={<Publications />} />
// // // //           </Route>

// // // //           {/* Opportunities Page */}
// // // //           <Route path="/opportunities" element={<JobOpportunities />} />

// // // //           {/* Contact, Donate, Admin Pages */}
// // // //           <Route path="/contact-us" element={<ContactUs />} />
// // // //           <Route path="/donate-us" element={<DonateUs />} />
// // // //           <Route path="/admin" element={<AdminDashboard />} />
// // // //           <Route path="/admin" element={<LoginForm />} /> {/* Admin Login Route */}
// // // //         </Routes>
// // // //       </main>
// // // //       <Footer />
// // // //     </div>
// // // //   );
// // // // };

// // // // export default App;
// // // import React, { useState } from 'react';
// // // import { Routes, Route } from 'react-router-dom';

// // // import Navbar from './layouts/Navbar';
// // // import Footer from './layouts/Footer';
// // // import HomePage from './pages/HomePage';
// // // import LoginForm from "./admin/LoginForm"; // Import the login form
// // // import AdminDashboard from './admin/AdminDashboard'; // Admin dashboard
// // // import ProtectedRoute from './admin/ProtectedRoute'; // Import ProtectedRoute

// // // // About Us Pages
// // // import AboutUsLayout from './pages/about/AboutUsLayout';
// // // import AboutPage from './pages/about/AboutPage';
// // // import MissionVisionGoals from './pages/about/MissionVisionGoals';
// // // import FounderMember from './pages/about/FounderMember';
// // // import ExecutiveBoard from './pages/about/ExecutiveBoard';
// // // import Partner from './pages/about/Partner';
// // // import RunningProjects from './pages/about/RunningProjects';
// // // import CompletedProjects from './pages/about/CompletedProjects';

// // // // Our Works Pages
// // // import OurWorksLayout from './pages/works/OurWorksLayout';
// // // import OurWorksPage from './pages/works/OurWorksPage';
// // // import Programs from './pages/works/Programs';
// // // import Milestone from './pages/works/Milestone';
// // // import Geographical from './pages/works/Geographical';

// // // // Gallery Pages
// // // import GalleryLayout from './pages/gallery/GalleryLayout';
// // // import GalleryPage from './pages/gallery/GalleryPage';
// // // import PhotosPage from './pages/gallery/PhotosPage';
// // // import VideosPage from './pages/gallery/VideosPage';

// // // // Resources Pages
// // // import ResourcesLayout from './pages/resources/ResourcesLayout';
// // // import ResourcesPage from './pages/resources/ResourcesPage';
// // // import NewsAndEvents from './pages/resources/NewsAndEvents';
// // // import MediaCoverage from './pages/resources/MediaCoverage';
// // // import Publications from './pages/resources/Publications';

// // // // Other Pages
// // // import JobOpportunities from './pages/opportunities/JobOpportunities';
// // // import ContactUs from './pages/ContactUs';
// // // import DonateUs from './pages/DonateUs';

// // // const App = () => {
// // //   const [isAuthenticated, setIsAuthenticated] = useState(false); // Track authentication state

// // //   return (
// // //     <div className="flex flex-col min-h-screen">
// // //       <Navbar />
// // //       <main className="flex-grow">
// // //         <Routes>
// // //           {/* Home Page */}
// // //           <Route path="/" element={<HomePage />} />

// // //           {/* About Us Pages */}
// // //           <Route path="/about" element={<AboutUsLayout />}>
// // //             <Route index element={<AboutPage />} />
// // //             <Route path="mission-vision-goals" element={<MissionVisionGoals />} />
// // //             <Route path="founder-member" element={<FounderMember />} />
// // //             <Route path="executive-board" element={<ExecutiveBoard />} />
// // //             <Route path="partner" element={<Partner />} />
// // //             <Route path="running" element={<RunningProjects />} />
// // //             <Route path="completed" element={<CompletedProjects />} />
// // //           </Route>

// // //           {/* Our Works Pages */}
// // //           <Route path="/works" element={<OurWorksLayout />}>
// // //             <Route index element={<OurWorksPage />} />
// // //             <Route path="programs" element={<Programs />} />
// // //             <Route path="milestone" element={<Milestone />} />
// // //             <Route path="geographical" element={<Geographical />} />
// // //           </Route>

// // //           {/* Gallery Pages */}
// // //           <Route path="/gallery" element={<GalleryLayout />}>
// // //             <Route index element={<GalleryPage />} /> {/* Shows tabs for Photos and Videos */}
// // //             <Route path="photos" element={<PhotosPage />} /> {/* Photo Gallery Page */}
// // //             <Route path="videos" element={<VideosPage />} /> {/* Video Gallery Page */}
// // //           </Route>

// // //           {/* Resources Pages */}
// // //           <Route path="/resources" element={<ResourcesLayout />}>
// // //             <Route index element={<ResourcesPage />} />
// // //             <Route path="news-events" element={<NewsAndEvents />} />
// // //             <Route path="media-coverage" element={<MediaCoverage />} />
// // //             <Route path="publications" element={<Publications />} />
// // //           </Route>

// // //           {/* Opportunities Page */}
// // //           <Route path="/opportunities" element={<JobOpportunities />} />

// // //           {/* Contact, Donate Pages */}
// // //           <Route path="/contact-us" element={<ContactUs />} />
// // //           <Route path="/donate-us" element={<DonateUs />} />

// // //           {/* Admin Login Route */}
// // //           <Route path="/admin" element={<LoginForm setIsAuthenticated={setIsAuthenticated} />} />

// // //           {/* Protected Admin Route */}
// // //           <Route
// // //             path="/admin/dashboard"
// // //             element={
// // //               <ProtectedRoute>
// // //                 <AdminDashboard />
// // //               </ProtectedRoute>
// // //             }
// // //           />
// // //         </Routes>
// // //       </main>
// // //       <Footer />
// // //     </div>
// // //   );
// // // };

// // // export default App;
// // import React, { useState } from 'react';
// // import { Routes, Route } from 'react-router-dom';

// // import Navbar from './layouts/Navbar';
// // import Footer from './layouts/Footer';
// // import HomePage from './pages/HomePage';
// // import LoginForm from "./admin/LoginForm";
// // import AdminDashboard from './admin/AdminDashboard';
// // import ProtectedRoute from './admin/ProtectedRoute';
// // import AdminLayout from './admin/AdminLayout'; // Import AdminLayout

// // // About Us Pages
// // import AboutUsLayout from './pages/about/AboutUsLayout';
// // import AboutPage from './pages/about/AboutPage';
// // import MissionVisionGoals from './pages/about/MissionVisionGoals';
// // import FounderMember from './pages/about/FounderMember';
// // import ExecutiveBoard from './pages/about/ExecutiveBoard';
// // import Partner from './pages/about/Partner';
// // import RunningProjects from './pages/about/RunningProjects';
// // import CompletedProjects from './pages/about/CompletedProjects';

// // // Our Works Pages
// // import OurWorksLayout from './pages/works/OurWorksLayout';
// // import OurWorksPage from './pages/works/OurWorksPage';
// // import Programs from './pages/works/Programs';
// // import Milestone from './pages/works/Milestone';
// // import Geographical from './pages/works/Geographical';

// // // Gallery Pages
// // import GalleryLayout from './pages/gallery/GalleryLayout';
// // import GalleryPage from './pages/gallery/GalleryPage';
// // import PhotosPage from './pages/gallery/PhotosPage';
// // import VideosPage from './pages/gallery/VideosPage';

// // // Resources Pages
// // import ResourcesLayout from './pages/resources/ResourcesLayout';
// // import ResourcesPage from './pages/resources/ResourcesPage';
// // import NewsAndEvents from './pages/resources/NewsAndEvents';
// // import MediaCoverage from './pages/resources/MediaCoverage';
// // import Publications from './pages/resources/Publications';

// // // Other Pages
// // import JobOpportunities from './pages/opportunities/JobOpportunities';
// // import ContactUs from './pages/ContactUs';
// // import DonateUs from './pages/DonateUs';

// // const App = () => {
// //   const [isAuthenticated, setIsAuthenticated] = useState(false);

// //   return (
// //     <div className="flex flex-col min-h-screen">
// //       <Navbar />
// //       <main className="flex-grow">
// //         <Routes>
// //           {/* Home Page */}
// //           <Route path="/" element={<HomePage />} />

// //           {/* About Us Pages */}
// //           <Route path="/about" element={<AboutUsLayout />}>
// //             <Route index element={<AboutPage />} />
// //             <Route path="mission-vision-goals" element={<MissionVisionGoals />} />
// //             <Route path="founder-member" element={<FounderMember />} />
// //             <Route path="executive-board" element={<ExecutiveBoard />} />
// //             <Route path="partner" element={<Partner />} />
// //             <Route path="running" element={<RunningProjects />} />
// //             <Route path="completed" element={<CompletedProjects />} />
// //           </Route>

// //           {/* Our Works Pages */}
// //           <Route path="/works" element={<OurWorksLayout />}>
// //             <Route index element={<OurWorksPage />} />
// //             <Route path="programs" element={<Programs />} />
// //             <Route path="milestone" element={<Milestone />} />
// //             <Route path="geographical" element={<Geographical />} />
// //           </Route>

// //           {/* Gallery Pages */}
// //           <Route path="/gallery" element={<GalleryLayout />}>
// //             <Route index element={<GalleryPage />} />
// //             <Route path="photos" element={<PhotosPage />} />
// //             <Route path="videos" element={<VideosPage />} />
// //           </Route>

// //           {/* Resources Pages */}
// //           <Route path="/resources" element={<ResourcesLayout />}>
// //             <Route index element={<ResourcesPage />} />
// //             <Route path="news-events" element={<NewsAndEvents />} />
// //             <Route path="media-coverage" element={<MediaCoverage />} />
// //             <Route path="publications" element={<Publications />} />
// //           </Route>

// //           {/* Opportunities Page */}
// //           <Route path="/opportunities" element={<JobOpportunities />} />

// //           {/* Contact, Donate Pages */}
// //           <Route path="/contact-us" element={<ContactUs />} />
// //           <Route path="/donate-us" element={<DonateUs />} />

// //           {/* Admin Login Page */}
// //           <Route path="/admin" element={<LoginForm setIsAuthenticated={setIsAuthenticated} />} />

// //           {/* Admin Dashboard */}
// //           <Route
// //             path="/admin/dashboard"
// //             element={
// //               <ProtectedRoute isAuthenticated={isAuthenticated}>
// //                 <AdminLayout>
// //                   <AdminDashboard />
// //                 </AdminLayout>
// //               </ProtectedRoute>
// //             }
// //           />
// //         </Routes>
// //       </main>
// //       <Footer />
// //     </div>
// //   );
// // };

// // export default App;
// import React, { useState } from 'react';
// import { Routes, Route } from 'react-router-dom';

// import Navbar from './layouts/Navbar';
// import Footer from './layouts/Footer';
// import HomePage from './pages/HomePage';
// import LoginForm from './admin/LoginForm';
// import AdminDashboard from './admin/AdminDashboard';
// import ProtectedRoute from './admin/ProtectedRoute';
// import AdminLayout from './admin/AdminLayout';

// // About Us Pages
// import AboutUsLayout from './pages/about/AboutUsLayout';
// import AboutPage from './pages/about/AboutPage';
// import MissionVisionGoals from './pages/about/MissionVisionGoals';
// import FounderMember from './pages/about/FounderMember';
// import ExecutiveBoard from './pages/about/ExecutiveBoard';
// import Partner from './pages/about/Partner';
// import RunningProjects from './pages/about/RunningProjects';
// import CompletedProjects from './pages/about/CompletedProjects';

// // Our Works Pages
// import OurWorksLayout from './pages/works/OurWorksLayout';
// import OurWorksPage from './pages/works/OurWorksPage';
// import Programs from './pages/works/Programs';
// import Milestone from './pages/works/Milestone';
// import Geographical from './pages/works/Geographical';

// // Gallery Pages
// import GalleryLayout from './pages/gallery/GalleryLayout';
// import GalleryPage from './pages/gallery/GalleryPage';
// import PhotosPage from './pages/gallery/PhotosPage';
// import VideosPage from './pages/gallery/VideosPage';

// // Resources Pages
// import ResourcesLayout from './pages/resources/ResourcesLayout';
// import ResourcesPage from './pages/resources/ResourcesPage';
// import NewsAndEvents from './pages/resources/NewsAndEvents';
// import MediaCoverage from './pages/resources/MediaCoverage';
// import Publications from './pages/resources/Publications';

// // Other Pages
// import JobOpportunities from './pages/opportunities/JobOpportunities';
// import ContactUs from './pages/ContactUs';
// import DonateUs from './pages/DonateUs';

// const App = () => {
//   const [isAuthenticated, setIsAuthenticated] = useState(false);

//   return (
//     <div className="flex flex-col min-h-screen">
//       <Routes>
//         {/* Public Layout (Navbar + Footer) */}
//         <Route
//           path="/"
//           element={
//             <>
//               <Navbar />
//               <main className="flex-grow">
//                 <Routes>
//                   <Route path="/" element={<HomePage />} />

//                   {/* About Us Pages */}
//                   <Route path="/about" element={<AboutUsLayout />}>
//                     <Route index element={<AboutPage />} />
//                     <Route path="mission-vision-goals" element={<MissionVisionGoals />} />
//                     <Route path="founder-member" element={<FounderMember />} />
//                     <Route path="executive-board" element={<ExecutiveBoard />} />
//                     <Route path="partner" element={<Partner />} />
//                     <Route path="running" element={<RunningProjects />} />
//                     <Route path="completed" element={<CompletedProjects />} />
//                   </Route>

//                   {/* Our Works Pages */}
//                   <Route path="/works" element={<OurWorksLayout />}>
//                     <Route index element={<OurWorksPage />} />
//                     <Route path="programs" element={<Programs />} />
//                     <Route path="milestone" element={<Milestone />} />
//                     <Route path="geographical" element={<Geographical />} />
//                   </Route>

//                   {/* Gallery Pages */}
//                   <Route path="/gallery" element={<GalleryLayout />}>
//                     <Route index element={<GalleryPage />} />
//                     <Route path="photos" element={<PhotosPage />} />
//                     <Route path="videos" element={<VideosPage />} />
//                   </Route>

//                   {/* Resources Pages */}
//                   <Route path="/resources" element={<ResourcesLayout />}>
//                     <Route index element={<ResourcesPage />} />
//                     <Route path="news-events" element={<NewsAndEvents />} />
//                     <Route path="media-coverage" element={<MediaCoverage />} />
//                     <Route path="publications" element={<Publications />} />
//                   </Route>

//                   {/* Opportunities Page */}
//                   <Route path="/opportunities" element={<JobOpportunities />} />

//                   {/* Contact, Donate Pages */}
//                   <Route path="/contact-us" element={<ContactUs />} />
//                   <Route path="/donate-us" element={<DonateUs />} />
//                 </Routes>
//               </main>
//               <Footer />
//             </>
//           }
//         />

//         {/* Admin Routes (No Navbar and Footer) */}
//         <Route path="/admin" element={<LoginForm setIsAuthenticated={setIsAuthenticated} />} />
//         <Route
//           path="/admin/dashboard"
//           element={
//             <ProtectedRoute isAuthenticated={isAuthenticated}>
//               <AdminLayout>
//                 <AdminDashboard />
//               </AdminLayout>
//             </ProtectedRoute>
//           }
//         />
//       </Routes>
//     </div>
//   );
// };

// export default App;
// import React, { useState } from 'react';
// import { Routes, Route } from 'react-router-dom';

// import Navbar from './layouts/Navbar';
// import Footer from './layouts/Footer';
// import HomePage from './pages/HomePage';
// import LoginForm from "./admin/LoginForm";
// import AdminPanel from './admin/AdminPanel';
// import ProtectedRoute from './admin/ProtectedRoute';


// // About Us Pages
// import AboutUsLayout from './pages/about/AboutUsLayout';
// import AboutPage from './pages/about/AboutPage';
// import MissionVisionGoals from './pages/about/MissionVisionGoals';
// import FounderMember from './pages/about/FounderMember';
// import ExecutiveBoard from './pages/about/ExecutiveBoard';
// import Partner from './pages/about/Partner';
// import RunningProjects from './pages/about/RunningProjects';
// import CompletedProjects from './pages/about/CompletedProjects';

// // Our Works Pages
// import OurWorksLayout from './pages/works/OurWorksLayout';
// import OurWorksPage from './pages/works/OurWorksPage';
// import Programs from './pages/works/Programs';
// import Milestone from './pages/works/Milestone';
// import Geographical from './pages/works/Geographical';

// // Gallery Pages
// import GalleryLayout from './pages/gallery/GalleryLayout';
// import GalleryPage from './pages/gallery/GalleryPage';
// import PhotosPage from './pages/gallery/PhotosPage';
// import VideosPage from './pages/gallery/VideosPage';

// // Resources Pages
// import ResourcesLayout from './pages/resources/ResourcesLayout';
// import ResourcesPage from './pages/resources/ResourcesPage';
// import NewsAndEvents from './pages/resources/NewsAndEvents';
// import MediaCoverage from './pages/resources/MediaCoverage';
// import Publications from './pages/resources/Publications';

// // Other Pages
// import JobOpportunities from './pages/opportunities/JobOpportunities';
// import ContactUs from './pages/ContactUs';
// import DonateUs from './pages/DonateUs';
// // import AdminPanel from './admin/Dashboard';

// const App = () => {
//   const [isAuthenticated, setIsAuthenticated] = useState(false);

//   return (
//     <div className="flex flex-col min-h-screen">
//       <Navbar />
//       <main className="flex-grow">
//         <Routes>
//           {/* Home Page */}
//           <Route path="/" element={<HomePage />} />

//           {/* About Us Pages */}
//           <Route path="/about/*" element={<AboutUsLayout />}>
//             <Route index element={<AboutPage />} /> {/* Default route */}
//             <Route path="mission-vision-goals" element={<MissionVisionGoals />} />
//             <Route path="founder-member" element={<FounderMember />} />
//             <Route path="executive-board" element={<ExecutiveBoard />} />
//             <Route path="partner" element={<Partner />} />
//             <Route path="running" element={<RunningProjects />} />
//             <Route path="completed" element={<CompletedProjects />} />
//           </Route>

//           {/* Our Works Pages */}
//           <Route path="/works/*" element={<OurWorksLayout />}>
//             <Route index element={<OurWorksPage />} />
//             <Route path="programs" element={<Programs />} />
//             <Route path="milestone" element={<Milestone />} />
//             <Route path="geographical" element={<Geographical />} />
//           </Route>

//           {/* Gallery Pages */}
//           <Route path="/gallery/*" element={<GalleryLayout />}>
//             <Route index element={<GalleryPage />} />
//             <Route path="photos" element={<PhotosPage />} />
//             <Route path="videos" element={<VideosPage />} />
//           </Route>

//           {/* Resources Pages */}
//           <Route path="/resources/*" element={<ResourcesLayout />}>
//             <Route index element={<ResourcesPage />} />
//             <Route path="news-events" element={<NewsAndEvents />} />
//             <Route path="media-coverage" element={<MediaCoverage />} />
//             <Route path="publications" element={<Publications />} />
//           </Route>

//           {/* Opportunities Page */}
//           <Route path="/opportunities" element={<JobOpportunities />} />

//           {/* Contact, Donate Pages */}
//           <Route path="/contact-us" element={<ContactUs />} />
//           <Route path="/donate-us" element={<DonateUs />} />

//           {/* Admin Routes */}
//           <Route path="/admin" element={<LoginForm setIsAuthenticated={setIsAuthenticated} />} />
//           <Route
//             path="/admin/dashboard"
//             element={
//               <ProtectedRoute isAuthenticated={isAuthenticated}>
                
//                   <AdminPanel />
                
//               </ProtectedRoute>
//             }
//           />
//         </Routes>
//       </main>
//       <Footer />
//     </div>
//   );
// };

// export default App;
// import React, { useState } from "react";
// import { Routes, Route, useLocation } from "react-router-dom";

// import Navbar from "./layouts/Navbar";
// import Footer from "./layouts/Footer";
// import HomePage from "./pages/HomePage";
// import LoginForm from "./admin/LoginForm";
// import AdminPanel from "./admin/AdminPanel";
// import ProtectedRoute from "./admin/ProtectedRoute";

// // About Us Pages
// import AboutUsLayout from "./pages/about/AboutUsLayout";
// import AboutPage from "./pages/about/AboutPage";
// import MissionVisionGoals from "./pages/about/MissionVisionGoals";
// import FounderMember from "./pages/about/FounderMember";
// import ExecutiveBoard from "./pages/about/ExecutiveBoard";
// import Partner from "./pages/about/Partner";
// import RunningProjects from "./pages/about/RunningProjects";
// import CompletedProjects from "./pages/about/CompletedProjects";

// // Our Works Pages
// import OurWorksLayout from "./pages/works/OurWorksLayout";
// import OurWorksPage from "./pages/works/OurWorksPage";
// import Programs from "./pages/works/Programs";
// import Milestone from "./pages/works/Milestone";
// import Geographical from "./pages/works/Geographical";

// // Gallery Pages
// import GalleryLayout from "./pages/gallery/GalleryLayout";
// import GalleryPage from "./pages/gallery/GalleryPage";
// import PhotosPage from "./pages/gallery/PhotosPage";
// import VideosPage from "./pages/gallery/VideosPage";

// // Resources Pages
// import ResourcesLayout from "./pages/resources/ResourcesLayout";
// import ResourcesPage from "./pages/resources/ResourcesPage";
// import NewsAndEvents from "./pages/resources/NewsAndEvents";
// import MediaCoverage from "./pages/resources/MediaCoverage";
// import Publications from "./pages/resources/Publications";

// // Other Pages
// import JobOpportunities from "./pages/opportunities/JobOpportunities";
// import ContactUs from "./pages/ContactUs";
// import DonateUs from "./pages/DonateUs";

// const App = () => {
//   const [isAuthenticated, setIsAuthenticated] = useState(false);
//   const location = useLocation();

//   // Check if the current path is an admin route
//   const isAdminRoute = location.pathname.startsWith("/admin");

//   return (
//     <div className="flex flex-col min-h-screen">
//       {/* Render Navbar and Footer only if not on admin routes */}
//       {!isAdminRoute && <Navbar />}
//       <main className="flex-grow">
//         <Routes>
//           {/* Home Page */}
//           <Route path="/" element={<HomePage />} />

//           {/* About Us Pages */}
//           <Route path="/about/*" element={<AboutUsLayout />}>
//             <Route index element={<AboutPage />} /> {/* Default route */}
//             <Route path="mission-vision-goals" element={<MissionVisionGoals />} />
//             <Route path="founder-member" element={<FounderMember />} />
//             <Route path="executive-board" element={<ExecutiveBoard />} />
//             <Route path="partner" element={<Partner />} />
//             <Route path="running" element={<RunningProjects />} />
//             <Route path="completed" element={<CompletedProjects />} />
//           </Route>

//           {/* Our Works Pages */}
//           <Route path="/works/*" element={<OurWorksLayout />}>
//             <Route index element={<OurWorksPage />} />
//             <Route path="programs" element={<Programs />} />
//             <Route path="milestone" element={<Milestone />} />
//             <Route path="geographical" element={<Geographical />} />
//           </Route>

//           {/* Gallery Pages */}
//           <Route path="/gallery/*" element={<GalleryLayout />}>
//             <Route index element={<GalleryPage />} />
//             <Route path="photos" element={<PhotosPage />} />
//             <Route path="videos" element={<VideosPage />} />
//           </Route>

//           {/* Resources Pages */}
//           <Route path="/resources/*" element={<ResourcesLayout />}>
//             <Route index element={<ResourcesPage />} />
//             <Route path="news-events" element={<NewsAndEvents />} />
//             <Route path="media-coverage" element={<MediaCoverage />} />
//             <Route path="publications" element={<Publications />} />
//           </Route>

//           {/* Opportunities Page */}
//           <Route path="/opportunities" element={<JobOpportunities />} />

//           {/* Contact, Donate Pages */}
//           <Route path="/contact-us" element={<ContactUs />} />
//           <Route path="/donate-us" element={<DonateUs />} />

//           {/* Admin Routes */}
//           <Route  path="/admin/*" element={<LoginForm setIsAuthenticated={setIsAuthenticated} />} />
//           <Route
//             path="/admin/dashboard/*"
//             element={
//               <ProtectedRoute isAuthenticated={isAuthenticated}>
//                 <AdminPanel />
//               </ProtectedRoute>
//             }
//           />
          
//         </Routes>
//       </main>
//       {!isAdminRoute && <Footer />}
//     </div>
//   );
// };

// export default App;
import React, { useState, useEffect } from "react";
import { Routes, Route, useLocation, Navigate } from "react-router-dom";

import Navbar from "./layouts/Navbar";
import Footer from "./layouts/Footer";
import HomePage from "./pages/HomePage";
import LoginForm from "./admin/LoginForm";
import AdminPanel from "./admin/AdminPanel";
import ProtectedRoute from "./admin/ProtectedRoute";

// About Us Pages
import AboutUsLayout from "./pages/about/AboutUsLayout";
import AboutPage from "./pages/about/AboutPage";
import MissionVisionGoals from "./pages/about/MissionVisionGoals";
import FounderMember from "./pages/about/FounderMember";
import ExecutiveBoard from "./pages/about/ExecutiveBoard";
import Partner from "./pages/about/Partner";
import RunningProjects from "./pages/about/RunningProjects";
import CompletedProjects from "./pages/about/CompletedProjects";

// Our Works Pages
import OurWorksLayout from "./pages/works/OurWorksLayout";
import OurWorksPage from "./pages/works/OurWorksPage";
import Programs from "./pages/works/Programs";
import Milestone from "./pages/works/Milestone";
import Geographical from "./pages/works/Geographical";

// Gallery Pages
import GalleryLayout from "./pages/gallery/GalleryLayout";
import GalleryPage from "./pages/gallery/GalleryPage";
import PhotosPage from "./pages/gallery/PhotosPage";
import VideosPage from "./pages/gallery/VideosPage";

// Resources Pages
import ResourcesLayout from "./pages/resources/ResourcesLayout";
import ResourcesPage from "./pages/resources/ResourcesPage";
import NewsAndEvents from "./pages/resources/NewsAndEvents";
import MediaCoverage from "./pages/resources/MediaCoverage";
import Publications from "./pages/resources/Publications";
import Notices from "./pages/resources/Notices";

// Other Pages
import JobOpportunities from "./pages/opportunities/JobOpportunities";
import ContactUs from "./pages/ContactUs";
import DonateUs from "./pages/DonateUs";
import IntroductionPage from "./pages/about/IntroductionPage";
import AchievementsPage from "./pages/works/AchievementsPage";
import NetworkPage from "./pages/about/NetworkPage";

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const location = useLocation();
  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsAuthenticated(!!token); // Set authentication state based on token presence
  }, [location]);

  // Check if the current path is an admin route
  const isAdminRoute = location.pathname.startsWith("/admin");

  return (
    <div className="flex flex-col min-h-screen">
      {/* Render Navbar and Footer only if not on admin routes */}
      {!isAdminRoute && <Navbar />}
      <main className="flex-grow">
        <Routes>
          {/* Home Page */}
          <Route path="/" element={<HomePage />} />

          {/* About Us Pages */}
          <Route path="/about/*" element={<AboutUsLayout />}>
            <Route index element={<AboutPage />} /> {/* Default route */}
            {/* <Route path="mission-vision-goals" element={<MissionVisionGoals />} /> */}
            <Route path="introduction" element={<IntroductionPage />} />
            <Route path="founder-member" element={<FounderMember />} />
            <Route path="executive-board" element={<ExecutiveBoard />} />
            <Route path="partner" element={<Partner />} />
            <Route path="network" element={<NetworkPage />} />
            <Route path="running" element={<RunningProjects />} />
            <Route path="completed" element={<CompletedProjects />} />
          </Route>

          {/* Our Works Pages */}
          <Route path="/works/*" element={<OurWorksLayout />}>
            <Route index element={<OurWorksPage />} />
            <Route path="programs" element={<Programs />} />
            <Route path="achievements" element={<AchievementsPage  />} />
            <Route path="milestone" element={<Milestone />} />
            <Route path="geographical" element={<Geographical />} />
          </Route>

          {/* Gallery Pages */}
          <Route path="/gallery/*" element={<GalleryLayout />}>
            <Route index element={<GalleryPage />} />
            <Route path="photos" element={<PhotosPage />} />
            <Route path="videos" element={<VideosPage />} />
          </Route>

          {/* Resources Pages */}
          <Route path="/resources/*" element={<ResourcesLayout />}>
            <Route index element={<ResourcesPage />} />
            <Route path="news-events" element={<NewsAndEvents />} />
            <Route path="media-coverage" element={<MediaCoverage />} />
            <Route path="publications" element={<Publications />} />
            <Route path="notices" element={<Notices />} />
          </Route>

          {/* Opportunities Page */}
          <Route path="/opportunities" element={<JobOpportunities />} />

          {/* Contact, Donate Pages */}
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/donate-us" element={<DonateUs />} />

          {/* Admin Routes */}
          {/* <Route path="/admin" element={<Navigate to="/admin/login" />} />
          <Route path="/admin/login" element={<LoginForm setIsAuthenticated={setIsAuthenticated} />} />
          <Route
            path="/admin/*"
            element={
              <ProtectedRoute isAuthenticated={isAuthenticated}>
                <AdminPanel />
              </ProtectedRoute>
            }
          /> */}
           {/* Admin Routes */}
      <Route path="/admin/login" element={<LoginForm onLoginSuccess={() => setIsAuthenticated(true)} />} />
      <Route
        path="/admin/*"
        element={
          <ProtectedRoute isAuthenticated={isAuthenticated}>
            <AdminPanel />
          </ProtectedRoute>
        }
      />
        </Routes>
      </main>
      {!isAdminRoute && <Footer />}
    </div>
  );
};

export default App;
