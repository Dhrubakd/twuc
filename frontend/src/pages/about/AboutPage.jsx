// import React from 'react';
// import { FaAward, FaUsers, FaHandsHelping, FaRegLightbulb } from 'react-icons/fa';

// const AboutPage = () => {
//   return (
//     <div className="text-center max-w-7xl mx-auto py-16 px-6">
//       {/* Hero Title */}
//       <h2 className="text-5xl font-extrabold text-blue-700 mb-12">Welcome to Our Organization</h2>
//       <p className="text-xl text-gray-600 leading-relaxed mb-12">
//         The <span className="font-bold">Tharu Women Upliftment Center (TWUC)</span> is a community-driven organization dedicated to promoting sustainable development and empowering women through education, skill development, and leadership programs.
//       </p>

//       {/* Mission & Vision Section */}
//       <section className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
//         <div className="bg-gradient-to-br from-blue-600 to-blue-400 text-white p-8 rounded-lg shadow-lg">
//           <h3 className="text-3xl font-semibold mb-4 flex items-center gap-2">
//             <FaRegLightbulb className="text-yellow-300" /> Our Mission
//           </h3>
//           <p className="text-lg leading-relaxed">
//             To uplift and empower women by providing access to resources, education, and support. We foster leadership, independence, and self-sustainability through our programs and initiatives.
//           </p>
//         </div>
//         <div className="bg-gradient-to-br from-green-600 to-green-400 text-white p-8 rounded-lg shadow-lg">
//           <h3 className="text-3xl font-semibold mb-4 flex items-center gap-2">
//             <FaUsers className="text-yellow-300" /> Our Vision
//           </h3>
//           <p className="text-lg leading-relaxed">
//             To create a society where women from marginalized communities have equal opportunities to succeed and lead meaningful lives.
//           </p>
//         </div>
//       </section>

//       {/* Core Values Section */}
//       <section className="mb-16">
//         <h3 className="text-4xl font-extrabold text-blue-700 mb-8">Our Core Values</h3>
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//           <div className="bg-white p-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300">
//             <h4 className="text-2xl font-bold text-blue-600 mb-3">Empowerment</h4>
//             <p className="text-gray-600">Equipping women with skills and resources to achieve independence.</p>
//           </div>
//           <div className="bg-white p-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300">
//             <h4 className="text-2xl font-bold text-blue-600 mb-3">Integrity</h4>
//             <p className="text-gray-600">We uphold transparency, honesty, and fairness in all our initiatives.</p>
//           </div>
//           <div className="bg-white p-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300">
//             <h4 className="text-2xl font-bold text-blue-600 mb-3">Inclusion</h4>
//             <p className="text-gray-600">We foster a welcoming and inclusive environment for everyone.</p>
//           </div>
//           <div className="bg-white p-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300">
//             <h4 className="text-2xl font-bold text-blue-600 mb-3">Sustainability</h4>
//             <p className="text-gray-600">Our programs are designed to create long-lasting impact and sustainable growth.</p>
//           </div>
//         </div>
//       </section>

//       {/* History Section */}
//       <section className="bg-gray-100 py-12 px-6 rounded-lg shadow-md mb-16">
//         <h3 className="text-4xl font-extrabold text-blue-700 mb-8">Our History</h3>
//         <p className="text-lg text-gray-700 leading-relaxed">
//           Founded in 2005, the Tharu Women Upliftment Center began as a grassroots movement addressing educational disparities. Over the years, our organization has grown into a comprehensive community hub for education, health, economic empowerment, and leadership training.
//         </p>
//       </section>

//       {/* Key Achievements Section */}
//       <section className="mb-16">
//         <h3 className="text-4xl font-extrabold text-blue-700 mb-8">Key Achievements</h3>
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           <div className="bg-blue-100 p-6 rounded-lg shadow-lg">
//             <h4 className="text-2xl font-semibold mb-2 flex items-center gap-2">
//               <FaAward className="text-yellow-500" /> Vocational Training
//             </h4>
//             <p className="text-gray-700">
//               Over 1,000 women have received vocational training and small business support.
//             </p>
//           </div>
//           <div className="bg-blue-100 p-6 rounded-lg shadow-lg">
//             <h4 className="text-2xl font-semibold mb-2 flex items-center gap-2">
//               <FaUsers className="text-yellow-500" /> Educational Scholarships
//             </h4>
//             <p className="text-gray-700">500 scholarships awarded to young girls across Bardiya.</p>
//           </div>
//           <div className="bg-blue-100 p-6 rounded-lg shadow-lg">
//             <h4 className="text-2xl font-semibold mb-2 flex items-center gap-2">
//               <FaHandsHelping className="text-yellow-500" /> Health Campaigns
//             </h4>
//             <p className="text-gray-700">Organized over 200 health and awareness campaigns in rural areas.</p>
//           </div>
//         </div>
//       </section>

//       {/* Call-to-Action Section */}
//       <section className="text-center">
//         <h3 className="text-4xl font-extrabold text-green-700 mb-6">Get Involved</h3>
//         <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
//           Join us in empowering women and fostering sustainable communities. Whether you donate, volunteer, or spread the word, your support makes a lasting impact.
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
//       </section>
//     </div>
//   );
// };

// export default AboutPage;
import React from 'react';
import { useState, useEffect, useRef } from "react";
import { FaAward, FaUsers, FaHandsHelping, FaRegLightbulb } from 'react-icons/fa';


function useOnScreen(ref) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [ref]);

  return isVisible;
}
const AboutPage = () => {
  const sectionRef = useRef(null);
  const isVisible = useOnScreen(sectionRef);
  const [experience, setExperience] = useState(0);
  const [clients, setClients] = useState(0);
  const [projects, setProjects] = useState(0);

  useEffect(() => {
    if (isVisible) {
      let experienceInterval = setInterval(() => {
        setExperience((prev) => (prev < 20 ? prev + 1 : prev));
      }, 50);
      let clientsInterval = setInterval(() => {
        setClients((prev) => (prev < 500 ? prev + 10 : prev));
      }, 30);
      let projectsInterval = setInterval(() => {
        setProjects((prev) => (prev < 1000 ? prev + 20 : prev));
      }, 20);

      return () => {
        clearInterval(experienceInterval);
        clearInterval(clientsInterval);
        clearInterval(projectsInterval);
      };
    }
  }, [isVisible]);

  return (
    <div className="text-center max-w-7xl mx-auto py-16 px-6">
      {/* Hero Title */}
      {/* <h2 className="text-5xl font-extrabold text-blue-700 mb-12">Welcome to Our Organization</h2> */}
      <p className="text-xl text-gray-600 leading-relaxed mb-12">
        The <span className="font-bold">Tharu Women Upliftment Center (TWUC)</span> is a marginalized, women-led non-profit, non-governmental organization established in 1992. It has a board of trustees with 11 female members and a membership of over 200 women, including 11 active executive committee members.
      </p>
      <p className="text-xl text-gray-600 leading-relaxed mb-12">
        TWUC is actively working to empower women, children, and disadvantaged groups in society across social, economic, cultural, and political realms to enhance human rights, social justice, and environmental conservation. The organization has been instrumental in advocating for the rights and well-being of marginalized women, working towards a more equitable and inclusive society.
      </p>

{/* Why Choose Us Section */}
<div ref={sectionRef} className="py-16 text-center ">
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 max-w-6xl mx-auto">
          <div className=" p-8 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
            <h3 className="text-6xl font-extrabold">{experience}+</h3>
            <p className="text-xl mt-2">Years of Experience</p>
            <p className="text-gray-400 mt-2">
              Our team has over two decades of expertise in financial consulting and audits.
            </p>
          </div>
          <div className=" p-8 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
            <h3 className="text-6xl font-extrabold">{clients}+</h3>
            <p className="text-xl mt-2">Satisfied Clients</p>
            <p className="text-gray-400 mt-2">
              We've served hundreds of happy clients, helping them achieve compliance and financial growth.
            </p>
          </div>
          <div className=" p-8 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
            <h3 className="text-6xl font-extrabold">{projects}+</h3>
            <p className="text-xl mt-2">Projects Completed</p>
            <p className="text-gray-400 mt-2">
              From small businesses to large corporations, we've successfully completed numerous projects.
            </p>
          </div>
        </div>
      </div>

      {/* Vision, Mission, and Goal Section */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
        <div className="bg-gradient-to-br from-blue-600 to-blue-400 text-white p-8 rounded-lg shadow-lg">
          <h3 className="text-3xl font-semibold mb-4 flex items-center gap-2">
            <FaRegLightbulb className="text-yellow-300" /> Our Vision
          </h3>
          <p className="text-lg leading-relaxed">
            To make aware, creative, self-governed, equitable, and esteem society.
          </p>
        </div>
        <div className="bg-gradient-to-br from-green-600 to-green-400 text-white p-8 rounded-lg shadow-lg">
          <h3 className="text-3xl font-semibold mb-4 flex items-center gap-2">
            <FaUsers className="text-yellow-300" /> Our Mission
          </h3>
          <p className="text-lg leading-relaxed">
            To empower women, children, and disadvantaged groups in society across social, economic, cultural, and political aspects for the improvement of human rights, social justice, and environmental conservation.
          </p>
        </div>
        <div className="bg-gradient-to-br from-orange-500 to-orange-300 text-white p-8 rounded-lg shadow-lg">
          <h3 className="text-3xl font-semibold mb-4 flex items-center gap-2">
            <FaAward className="text-yellow-300" /> Our Goal
          </h3>
          <p className="text-lg leading-relaxed">
            To ensure women's human rights and improved livelihoods through natural resource management, institutional building, and human resource development to enable an equitable society.
          </p>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="mb-16">
        <h3 className="text-4xl font-extrabold text-blue-700 mb-8">Our Core Values</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300">
            <h4 className="text-2xl font-bold text-blue-600 mb-3">Empowerment</h4>
            <p className="text-gray-600">Equipping women with skills and resources to achieve independence.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300">
            <h4 className="text-2xl font-bold text-blue-600 mb-3">Integrity</h4>
            <p className="text-gray-600">We uphold transparency, honesty, and fairness in all our initiatives.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300">
            <h4 className="text-2xl font-bold text-blue-600 mb-3">Inclusion</h4>
            <p className="text-gray-600">We foster a welcoming and inclusive environment for everyone.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300">
            <h4 className="text-2xl font-bold text-blue-600 mb-3">Sustainability</h4>
            <p className="text-gray-600">Our programs are designed to create long-lasting impact and sustainable growth.</p>
          </div>
        </div>
      </section>

      {/* History Section */}
      <section className="bg-gray-100 py-12 px-6 rounded-lg shadow-md mb-16">
        <h3 className="text-4xl font-extrabold text-blue-700 mb-8">Our History</h3>
        <p className="text-lg text-gray-700 leading-relaxed">
          Founded in 1992, the Tharu Women Upliftment Center began as a grassroots movement addressing educational disparities. Over the years, our organization has grown into a comprehensive community hub for education, health, economic empowerment, and leadership training. Through various initiatives, TWUC has provided crucial support to marginalized women, including those from low-income backgrounds, minority communities, and disadvantaged regions.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed mt-4">
          By advocating for policy changes and raising community awareness, TWUC has uplifted marginalized women, rural backward communities, and downtrodden communities, contributing to enhanced gender equality and social progress over the past 32 years.
        </p>
      </section>

      {/* Key Achievements Section */}
      <section className="mb-16">
        <h3 className="text-4xl font-extrabold text-blue-700 mb-8">Key Achievements</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-blue-100 p-6 rounded-lg shadow-lg">
            <h4 className="text-2xl font-semibold mb-2 flex items-center gap-2">
              <FaAward className="text-yellow-500" /> Vocational Training
            </h4>
            <p className="text-gray-700">
              Over 1,000 women have received vocational training and small business support.
            </p>
          </div>
          <div className="bg-blue-100 p-6 rounded-lg shadow-lg">
            <h4 className="text-2xl font-semibold mb-2 flex items-center gap-2">
              <FaUsers className="text-yellow-500" /> Educational Scholarships
            </h4>
            <p className="text-gray-700">500 scholarships awarded to young girls across Bardiya.</p>
          </div>
          <div className="bg-blue-100 p-6 rounded-lg shadow-lg">
            <h4 className="text-2xl font-semibold mb-2 flex items-center gap-2">
              <FaHandsHelping className="text-yellow-500" /> Health Campaigns
            </h4>
            <p className="text-gray-700">Organized over 200 health and awareness campaigns in rural areas.</p>
          </div>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="text-center">
        <h3 className="text-4xl font-extrabold text-green-700 mb-6">Get Involved</h3>
        <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
          Join us in empowering women and fostering sustainable communities. Whether you donate, volunteer, or spread the word, your support makes a lasting impact.
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
      </section>
    </div>
  );
};

export default AboutPage;
