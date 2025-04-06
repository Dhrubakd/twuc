// // import React from "react";
// // import { useEffect } from "react";
// // import Hero from "../components/Hero";

// // const HomePage = () => {
// //   useEffect(() => {
// //     //     // Scroll to the top of the page whenever the route changes
// //     window.scrollTo({
// //       top: 0,
// //       behavior: "smooth",
// //     });
// //   }, [location]);
// //   return (
// //     <div className="mt-20  mx-auto">
// //       {/* Hero Section */}
// //       <Hero />

// //       {/* About Section */}
// //       <div className="px-6">
// //         <section className="bg-gradient-to-r from-[#F0F8FF] to-[#EAF4FF] py-12  rounded-lg shadow-md mt-12">
// //           <h2 className="text-4xl font-semibold text-center mb-6 text-[#1A3C5A]">
// //             Who We Are
// //           </h2>
// //           <p className="text-lg text-gray-700 text-center leading-relaxed max-w-3xl mx-auto">
// //             The Tharu Women Upliftment Center is dedicated to uplifting women
// //             from marginalized communities by providing education, skill
// //             development, and leadership training. We focus on creating
// //             opportunities that lead to financial independence and a better
// //             quality of life.
// //           </p>
// //         </section>

// //         {/* Our Programs Section */}
// //         <section className="py-16 bg-[#F7FAFD]">
// //           <h2 className="text-4xl font-semibold text-center px-6 mb-8 text-[#3A7EA1]">
// //             Our Key Programs
// //           </h2>
// //           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
// //             <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl border border-gray-200 hover:border-[#3A7EA1] hover:-translate-y-2 transition-transform duration-300">
// //               <h3 className="text-2xl font-semibold text-[#3A7EA1] mb-3">
// //                 Skill Development Workshops
// //               </h3>
// //               <p className="text-gray-600">
// //                 We offer hands-on workshops to help women develop valuable
// //                 skills, such as sewing, craft-making, and small business
// //                 management.
// //               </p>
// //             </div>
// //             <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl border border-gray-200 hover:border-[#F4A261] hover:-translate-y-2 transition-transform duration-300">
// //               <h3 className="text-2xl font-semibold text-[#F4A261] mb-3">
// //                 Leadership and Advocacy
// //               </h3>
// //               <p className="text-gray-600">
// //                 Our leadership programs equip women with the knowledge and
// //                 confidence to lead and advocate for their communities.
// //               </p>
// //             </div>
// //             <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl border border-gray-200 hover:border-[#E76F51] hover:-translate-y-2 transition-transform duration-300">
// //               <h3 className="text-2xl font-semibold text-[#E76F51] mb-3">
// //                 Health and Awareness Campaigns
// //               </h3>
// //               <p className="text-gray-600">
// //                 We conduct health awareness drives and provide essential
// //                 healthcare education to ensure the well-being of our community.
// //               </p>
// //             </div>
// //             <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl border border-gray-200 hover:border-[#3A7EA1] hover:-translate-y-2 transition-transform duration-300">
// //               <h3 className="text-2xl font-semibold text-[#3A7EA1] mb-3">
// //                 Educational Scholarships
// //               </h3>
// //               <p className="text-gray-600">
// //                 We provide educational scholarships to girls and women to help
// //                 them pursue their academic dreams and break the cycle of
// //                 poverty.
// //               </p>
// //             </div>
// //             <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl border border-gray-200 hover:border-[#F4A261] hover:-translate-y-2 transition-transform duration-300">
// //               <h3 className="text-2xl font-semibold text-[#F4A261] mb-3">
// //                 Community Outreach
// //               </h3>
// //               <p className="text-gray-600">
// //                 Through community engagement, we promote awareness of women's
// //                 rights, access to resources, and gender equality.
// //               </p>
// //             </div>
// //             <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl border border-gray-200 hover:border-[#264653] hover:-translate-y-2 transition-transform duration-300">
// //               <h3 className="text-2xl font-semibold text-[#264653] mb-3">
// //                 Small Business Support
// //               </h3>
// //               <p className="text-gray-600">
// //                 We support women entrepreneurs by providing business training,
// //                 mentorship, and financial assistance to start their ventures.
// //               </p>
// //             </div>
// //           </div>
// //         </section>

// //         {/* Call-to-Action Section */}
// //         <section className="bg-gradient-to-r from-[#3A7EA1] to-[#5AA5E5] py-12 px-6 rounded-lg shadow-md text-center">
// //           <h2 className="text-4xl font-semibold mb-6 text-white">
// //             Get Involved
// //           </h2>
// //           <p className="text-lg text-white mb-8 max-w-2xl mx-auto">
// //             Whether you want to volunteer, donate, or join one of our programs,
// //             your support can make a lasting impact. Together, we can build
// //             stronger communities.
// //           </p>
// //           <div className="flex justify-center gap-4">
// //             <a
// //               href="/donate-us"
// //               className="bg-[#F4A261] text-white py-3 px-6 rounded-md text-lg hover:shadow-xl hover:bg-[#E76F51] transition duration-300"
// //             >
// //               Donate Now
// //             </a>
// //             <a
// //               href="/opportunities"
// //               className="bg-[#264653] text-white py-3 px-6 rounded-md text-lg hover:shadow-xl hover:bg-[#1A3C5A] transition duration-300"
// //             >
// //               Join Our Team
// //             </a>
// //           </div>
// //         </section>

// //         {/* Testimonials Section */}
// //         <section className="py-16">
// //           <h2 className="text-4xl font-semibold text-center mb-8 text-[#3A7EA1]">
// //             What People Say
// //           </h2>
// //           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
// //             <div className="bg-white p-6 rounded-lg shadow-lg border hover:border-[#E76F51]">
// //               <p className="text-gray-700 italic text-lg">
// //                 "Joining the skill development program changed my life. I now
// //                 run my own tailoring business and support my family."
// //               </p>
// //               <p className="text-right text-sm font-semibold mt-4 text-[#264653]">
// //                 – Participant, Tailoring Workshop
// //               </p>
// //             </div>
// //             <div className="bg-white p-6 rounded-lg shadow-lg border hover:border-[#3A7EA1]">
// //               <p className="text-gray-700 italic text-lg">
// //                 "The health awareness sessions helped my family make better
// //                 decisions about our well-being. I’m truly grateful!"
// //               </p>
// //               <p className="text-right text-sm font-semibold mt-4 text-[#264653]">
// //                 – Community Member
// //               </p>
// //             </div>
// //             <div className="bg-white p-6 rounded-lg shadow-lg border hover:border-[#F4A261]">
// //               <p className="text-gray-700 italic text-lg">
// //                 "Being part of the leadership program gave me the confidence to
// //                 speak up and become a role model in my village."
// //               </p>
// //               <p className="text-right text-sm font-semibold mt-4 text-[#264653]">
// //                 – Leadership Program Graduate
// //               </p>
// //             </div>
// //           </div>
// //         </section>
// //       </div>
// //     </div>
// //   );
// // };

// // export default HomePage;
import React, { useEffect } from "react";
import Hero from "../components/Hero";
import { FaHeart, FaHandsHelping, FaUsers, FaSeedling, FaGraduationCap, FaGlobe } from "react-icons/fa"; // Importing icons
import chairman from "../assets/chairman.jpg"
import executive from "../assets/executive.jpg"

const HomePage = () => {
  useEffect(() => {
    // Scroll to the top of the page whenever the route changes
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <div className="mt-20 mx-auto">
      {/* Hero Section */}
      <Hero />

      {/* About Section */}
      <div className="px-6">
        <section className="bg-gradient-to-r from-[#F0F8FF] to-[#EAF4FF] py-12 rounded-lg shadow-md mt-12">
          <h2 className="text-4xl font-semibold text-center mb-6 text-[#1A3C5A]">
            Who We Are
          </h2>
          <p className="text-lg text-gray-700 text-center leading-relaxed max-w-3xl mx-auto">
            The Tharu Women Upliftment Center is dedicated to uplifting women
            from marginalized communities by providing education, skill
            development, and leadership training. We focus on creating
            opportunities that lead to financial independence and a better
            quality of life.
          </p>
        </section>

        {/* Message from Chairman & Executive Director */}
        <section className="py-16">
          <h2 className="text-4xl font-semibold text-center mb-8 text-[#3A7EA1]">
            A Message from Our Leaders
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Chairman Message */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <img
                src={""}
                alt="Chairman"
                className="h-64 w-64 rounded-full mx-auto mb-4"
              />
              <h3 className="text-2xl font-semibold text-center text-[#1A3C5A]">
                Message from the Chairman
              </h3>
              <p className="text-gray-700 mt-4 text-center leading-relaxed">
                "Our vision has always been to empower women and foster a
                community of change-makers. Through education and support, we
                continue to inspire the next generation of leaders."
              </p>
              <p className="text-right font-semibold text-[#3A7EA1] mt-4">
                – Chairman, Tharu Women Upliftment Center
              </p>
            </div>

            {/* Executive Director Message */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <img
                src={"executive"}
                alt="Executive Director"
                className="h-64 w-64 rounded-full mx-auto mb-4"
              />
              <h3 className="text-2xl font-semibold text-center text-[#1A3C5A]">
                Message from the Executive Director
              </h3>
              <p className="text-gray-700 mt-4 text-center leading-relaxed">
                "Our programs are built to create long-lasting impact. We
                believe in empowering women with the tools and confidence to
                lead independent and meaningful lives."
              </p>
              <p className="text-right font-semibold text-[#3A7EA1] mt-4">
                – Executive Director, Tharu Women Upliftment Center
              </p>
            </div>
          </div>
        </section>

        {/* Our Programs Section */}
        <section className="py-16 bg-[#F7FAFD]">
          <h2 className="text-4xl font-semibold text-center px-6 mb-8 text-[#3A7EA1]">
            Over Arching Themes
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl border hover:border-[#3A7EA1] transition-transform duration-300 hover:-translate-y-2">
              <h3 className="text-2xl font-semibold text-[#3A7EA1] mb-3">
                Skill Development Workshops
              </h3>
              <p className="text-gray-600">
                We offer hands-on workshops to help women develop valuable
                skills, such as sewing, craft-making, and small business
                management.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl border hover:border-[#F4A261] transition-transform duration-300 hover:-translate-y-2">
              <h3 className="text-2xl font-semibold text-[#F4A261] mb-3">
                Leadership and Advocacy
              </h3>
              <p className="text-gray-600">
                Our leadership programs equip women with the knowledge and
                confidence to lead and advocate for their communities.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl border hover:border-[#E76F51] transition-transform duration-300 hover:-translate-y-2">
              <h3 className="text-2xl font-semibold text-[#E76F51] mb-3">
                Health and Awareness Campaigns
              </h3>
              <p className="text-gray-600">
                We conduct health awareness drives and provide essential
                healthcare education to ensure the well-being of our community.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl border hover:border-[#3A7EA1] transition-transform duration-300 hover:-translate-y-2">
              <h3 className="text-2xl font-semibold text-[#3A7EA1] mb-3">
                Educational Scholarships
              </h3>
              <p className="text-gray-600">
                We provide educational scholarships to girls and women to help
                them pursue their academic dreams and break the cycle of
                poverty.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl border hover:border-[#F4A261] transition-transform duration-300 hover:-translate-y-2">
              <h3 className="text-2xl font-semibold text-[#F4A261] mb-3">
                Community Outreach
              </h3>
              <p className="text-gray-600">
                Through community engagement, we promote awareness of women's
                rights, access to resources, and gender equality.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl border hover:border-[#264653] transition-transform duration-300 hover:-translate-y-2">
              <h3 className="text-2xl font-semibold text-[#264653] mb-3">
                Small Business Support
              </h3>
              <p className="text-gray-600">
                We support women entrepreneurs by providing business training,
                mentorship, and financial assistance to start their ventures.
              </p>
            </div>
          </div>
        </section>

        {/* Call-to-Action Section */}
        <section className="bg-gradient-to-r from-[#3A7EA1] to-[#5AA5E5] py-12 px-6 rounded-lg shadow-md text-center">
          <h2 className="text-4xl font-semibold mb-6 text-white">
            Get Involved
          </h2>
          <p className="text-lg text-white mb-8 max-w-2xl mx-auto">
            Whether you want to volunteer, donate, or join one of our programs,
            your support can make a lasting impact. Together, we can build
            stronger communities.
          </p>
          <div className="flex justify-center gap-4">
            <a
              href="/donate-us"
              className="bg-[#F4A261] text-white py-3 px-6 rounded-md text-lg hover:shadow-xl hover:bg-[#E76F51] transition duration-300"
            >
              Donate Now
            </a>
            <a
              href="/opportunities"
              className="bg-[#264653] text-white py-3 px-6 rounded-md text-lg hover:shadow-xl hover:bg-[#1A3C5A] transition duration-300"
            >
              Join Our Team
            </a>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-16">
          <h2 className="text-4xl font-semibold text-center mb-8 text-[#3A7EA1]">
            What People Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg border hover:border-[#E76F51]">
              <p className="text-gray-700 italic text-lg">
                "Joining the skill development program changed my life. I now
                run my own tailoring business and support my family."
              </p>
              <p className="text-right text-sm font-semibold mt-4 text-[#264653]">
                – Participant, Tailoring Workshop
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg border hover:border-[#3A7EA1]">
              <p className="text-gray-700 italic text-lg">
                "The health awareness sessions helped my family make better
                decisions about our well-being. I’m truly grateful!"
              </p>
              <p className="text-right text-sm font-semibold mt-4 text-[#264653]">
                – Community Member
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg border hover:border-[#F4A261]">
              <p className="text-gray-700 italic text-lg">
                "Being part of the leadership program gave me the confidence to
                speak up and become a role model in my village."
              </p>
              <p className="text-right text-sm font-semibold mt-4 text-[#264653]">
                – Leadership Program Graduate
              </p>
            </div>
          </div>
        </section>
 {/* Tailwind Keyframe Animation (Add this to your global CSS file or Tailwind config) */}
 <style>
 {`
   @keyframes scroll {
     0% {
       transform: translateX(100%);
     }
     100% {
       transform: translateX(-100%);
     }
   }

   .animate-scroll-icons {
     display: flex;
     gap: 60px;
     animation: scroll 100s linear infinite;
   }
 `}
</style>
<div className="bg-gradient-to-r from-[#3A7EA1] to-[#5AA5E5] py-6 mb-4 shadow-lg">
        <h2 className="text-center text-white text-2xl font-semibold mb-4">
          Some of our partners and supporters
        </h2>
        <div className="overflow-hidden">
          <div className="flex justify-start gap-12 animate-scroll-icons">
            <FaHeart className="text-red-500 text-4xl" />
            <FaHandsHelping className="text-yellow-500 text-4xl" />
            <FaUsers className="text-blue-500 text-4xl" />
            <FaSeedling className="text-green-500 text-4xl" />
            <FaGraduationCap className="text-purple-500 text-4xl" />
            <FaGlobe className="text-orange-500 text-4xl" />
            <FaHeart className="text-red-500 text-4xl" />
            <FaHandsHelping className="text-yellow-500 text-4xl" />
            <FaUsers className="text-blue-500 text-4xl" />
            <FaSeedling className="text-green-500 text-4xl" />
            <FaGraduationCap className="text-purple-500 text-4xl" />
            <FaGlobe className="text-orange-500 text-4xl" />
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default HomePage;


// import React, { useEffect } from "react";
// import Hero from "../components/Hero";
// import { FaHeart, FaHandsHelping, FaUsers, FaSeedling, FaGraduationCap, FaGlobe } from "react-icons/fa"; // Importing icons
// import chairman from "../assets/chairman.jpg";
// import executive from "../assets/executive.jpg";

// const HomePage = () => {
//   useEffect(() => {
//     // Scroll to the top of the page whenever the route changes
//     window.scrollTo({
//       top: 0,
//       behavior: "smooth",
//     });
//   }, []);

//   return (
//     <div className="mt-20 mx-auto">
//       {/* Hero Section */}
//       <Hero />



//       {/* Tailwind Keyframe Animation (Add this to your global CSS file or Tailwind config) */}
//       <style>
//         {`
//           @keyframes scroll {
//             0% {
//               transform: translateX(100%);
//             }
//             100% {
//               transform: translateX(-100%);
//             }
//           }

//           .animate-scroll-icons {
//             display: flex;
//             gap: 20px;
//             animation: scroll 20s linear infinite;
//           }
//         `}
//       </style>
      

//       {/* About Section */}
//       <div className="px-6">
//         <section className="bg-gradient-to-r from-[#F0F8FF] to-[#EAF4FF] py-12 rounded-lg shadow-md mt-12">
//           <h2 className="text-4xl font-semibold text-center mb-6 text-[#1A3C5A]">
//             Who We Are
//           </h2>
//           <p className="text-lg text-gray-700 text-center leading-relaxed max-w-3xl mx-auto">
//             The Tharu Women Upliftment Center is dedicated to uplifting women
//             from marginalized communities by providing education, skill
//             development, and leadership training. We focus on creating
//             opportunities that lead to financial independence and a better
//             quality of life.
//           </p>
//         </section>

//         {/* Message from Chairman & Executive Director */}
//         <section className="py-16">
//           <h2 className="text-4xl font-semibold text-center mb-8 text-[#3A7EA1]">
//             A Message from Our Leaders
//           </h2>
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//             {/* Chairman Message */}
//             <div className="bg-white p-6 rounded-lg shadow-lg">
//               <img
//                 src={chairman}
//                 alt="Chairman"
//                 className="h-64 w-64 rounded-full mx-auto mb-4"
//               />
//               <h3 className="text-2xl font-semibold text-center text-[#1A3C5A]">
//                 Message from the Chairman
//               </h3>
//               <p className="text-gray-700 mt-4 text-center leading-relaxed">
//                 "Our vision has always been to empower women and foster a
//                 community of change-makers. Through education and support, we
//                 continue to inspire the next generation of leaders."
//               </p>
//               <p className="text-right font-semibold text-[#3A7EA1] mt-4">
//                 – Chairman, Tharu Women Upliftment Center
//               </p>
//             </div>

//             {/* Executive Director Message */}
//             <div className="bg-white p-6 rounded-lg shadow-lg">
//               <img
//                 src={executive}
//                 alt="Executive Director"
//                 className="h-64 w-64 rounded-full mx-auto mb-4"
//               />
//               <h3 className="text-2xl font-semibold text-center text-[#1A3C5A]">
//                 Message from the Executive Director
//               </h3>
//               <p className="text-gray-700 mt-4 text-center leading-relaxed">
//                 "Our programs are built to create long-lasting impact. We
//                 believe in empowering women with the tools and confidence to
//                 lead independent and meaningful lives."
//               </p>
//               <p className="text-right font-semibold text-[#3A7EA1] mt-4">
//                 – Executive Director, Tharu Women Upliftment Center
//               </p>
//             </div>
//           </div>
//         </section>

//         {/* Other Sections... */}
//               {/* Scrolling Icons Section */}
//       <div className="bg-gradient-to-r from-[#3A7EA1] to-[#5AA5E5] py-6 mb-4 shadow-lg">
//         <h2 className="text-center text-white text-2xl font-semibold mb-4">
//           Some of our partners and supporters
//         </h2>
//         <div className="overflow-hidden">
//           <div className="flex justify-start gap-12 animate-scroll-icons">
//             <FaHeart className="text-red-500 text-4xl" />
//             <FaHandsHelping className="text-yellow-500 text-4xl" />
//             <FaUsers className="text-blue-500 text-4xl" />
//             <FaSeedling className="text-green-500 text-4xl" />
//             <FaGraduationCap className="text-purple-500 text-4xl" />
//             <FaGlobe className="text-orange-500 text-4xl" />
//             <FaHeart className="text-red-500 text-4xl" />
//             <FaHandsHelping className="text-yellow-500 text-4xl" />
//             <FaUsers className="text-blue-500 text-4xl" />
//             <FaSeedling className="text-green-500 text-4xl" />
//             <FaGraduationCap className="text-purple-500 text-4xl" />
//             <FaGlobe className="text-orange-500 text-4xl" />
//           </div>
//         </div>
//       </div>
//       </div>
//     </div>
//   );
// };

// export default HomePage;
