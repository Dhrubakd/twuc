import React, { useState } from "react";
import { FaTasks } from "react-icons/fa";
import img1 from "../../assets/img1.jpg";
import img2 from "../../assets/img2.jpg";
import img3 from "../../assets/img3.jpg";
import img4 from "../../assets/img4.jpg";

const OurWorksPage = () => {
  const activities = [
    {
      title:
        "LICED Project (Local Initiative for Community Empowerment and Development)",
      description:
        "Within LICED, TWUC is dedicated to enhancing the understanding and capabilities of target groups in natural resource management and ensuring equitable access to productive resources. The organization conducts activities to improve farm production for poor, vulnerable, and socially excluded individuals, as well as to provide WASH facilities for this same demographic.",
      image: img1,
    },
    {
      title: "CSN Project (Community Safety Net)",
      description:
        "TWUC is actively working to fulfill the objectives of providing urgent relief assistance to families and communities who have suffered from various types of natural, social, and man-made disasters and are at high risk of becoming victims. The organization aims to raise awareness about psychosocial well-being for those affected by different disasters to help them overcome trauma and pain. TWUC is fostering collaboration among women and other individuals who have been socially overlooked, marginalized, or excluded, along with families, groups, and communities. The goal is to establish connections with relevant parties and agencies, facilitating the initiation of efforts to address issues and problems that require attention.",
      image: img2,
    },
    {
      title: "AGenC Project",
      description:
        "Our auditing services provide independent and objective assessments of your financial statements. We conduct thorough audits to ensure accuracy, transparency, and compliance with applicable accounting standards.",
      image: img3,
    },
    {
      title: "CLASSIK Project",
      description:
        "Promoting CLimAte ReSilient and Socially Inclusive Water Management in the Lower Karnali Watershed Region, Nepal (CLASSIK). This project aims to address the challenges faced by the Lower Karnali Watershed Region (LKWR) in Nepal to sustainably conserve and manage the available water resources for food security, economic prosperity and social transformation. The LKWR is subject to significant spatial and temporal variations in water resources, resulting in both water scarcity and excessive water availability, exacerbated by the impact of climate change. Groundwater depletion leading to lack of water for household and agricultural uses, loss of biodiversity, and degradation of water ecosystems are major concerns within the region.",
      image: img4,
    },
  ];

  // State for modal handling
  const [selectedActivity, setSelectedActivity] = useState(null);

  const openModal = (activity) => {
    setSelectedActivity(activity);
  };

  const closeModal = () => {
    setSelectedActivity(null);
  };

  return (
    <div className="text-center max-w-7xl mx-auto py-16 px-6">
      {/* Hero Title */}
      <h2 className="text-5xl font-extrabold text-green-700 mb-12">
        Activities
      </h2>
      <p className="text-xl text-gray-600 leading-relaxed mb-12">
        We believe in sustainable growth and empowering communities through our
        impactful programs. Explore our key milestones and the initiatives we’ve
        implemented to foster progress and change.
      </p>

      {/* Activities Section */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-16">
        {activities.map((activity, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-xl hover:scale-105 transition-transform duration-300"
          >
            <img
              src={activity.image}
              alt={activity.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-blue-700 mb-4 flex items-center gap-2">
                <FaTasks className="text-yellow-300" /> {activity.title}
              </h3>
              <p className="text-lg leading-relaxed text-gray-700 line-clamp-3">
                {activity.description.slice(0, 150)}...
              </p>
              <button
                onClick={() => openModal(activity)}
                className="mt-4 bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition duration-300"
              >
                Read More
              </button>
            </div>
          </div>
        ))}
      </section>

      {/* Modal for Full Details */}
      {selectedActivity && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50">
          <div className="bg-white rounded-lg shadow-lg max-w-5xl w-full p-8 relative">
            <div className="h-[80vh] overflow-y-auto">
              <h3 className="text-3xl font-bold text-blue-700 mb-6">
                {selectedActivity.title}
              </h3>
              <img
                src={selectedActivity.image}
                alt={selectedActivity.title}
                className="w-full h-64 object-cover rounded-md mb-4"
              />
              <p className="text-lg text-gray-700 leading-relaxed">
                {selectedActivity.description}
              </p>
            </div>
            <button
              onClick={closeModal}
              className=" bg-red-600 text-white mt-4 py-2 px-4 rounded-lg hover:bg-red-700 transition duration-300"
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* Call-to-Action Section */}
      <section className="text-center bg-green-100 py-12 px-6 rounded-lg shadow-md">
        <h3 className="text-4xl font-extrabold text-green-700 mb-6">
          Support Our Works
        </h3>
        <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
          Join us in making a lasting impact in the lives of women and their
          communities. Your support helps us continue our mission of
          empowerment, sustainability, and leadership.
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

export default OurWorksPage;
