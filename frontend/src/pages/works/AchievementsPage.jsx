import React, { useEffect, useState } from "react";

const AchievementsPage = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Auto-increment numbers
  const [stats, setStats] = useState({
    projectsCompleted: 0,
    happyClients: 0,
    awardsWon: 0,
    teamMembers: 0,
  });

  // Target numbers for auto-increment
  const targetStats = {
    projectsCompleted: 250,
    happyClients: 500,
    awardsWon: 20,
    teamMembers: 50,
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Stop observing once numbers start animating
        }
      },
      { threshold: 0.5 }
    );

    const statsSection = document.getElementById("stats-section");
    if (statsSection) observer.observe(statsSection);
  }, []);

  // Function to increment numbers when section becomes visible
  useEffect(() => {
    if (isVisible) {
      let interval;
      interval = setInterval(() => {
        setStats((prevStats) => {
          const newStats = { ...prevStats };
          Object.keys(newStats).forEach((key) => {
            if (newStats[key] < targetStats[key]) {
              newStats[key] += 5; // Increment value
            }
          });
          return newStats;
        });

        if (
          stats.projectsCompleted >= targetStats.projectsCompleted &&
          stats.happyClients >= targetStats.happyClients &&
          stats.awardsWon >= targetStats.awardsWon &&
          stats.teamMembers >= targetStats.teamMembers
        ) {
          clearInterval(interval); // Stop incrementing when targets reached
        }
      }, 50);

      return () => clearInterval(interval);
    }
  }, [isVisible, stats]);

  return (
    <div className="max-w-5xl mx-auto p-6 bg-white rounded-lg shadow-lg">
      <h1 className="text-4xl font-bold text-center mb-6 text-blue-700">Our Achievements</h1>
      <p className="text-center text-gray-600 mb-8">
        We are proud of what we've achieved over the years through hard work, dedication, and innovation.
      </p>

      {/* Achievements List Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4 text-blue-600">Highlights of Our Achievements</h2>
        <ul className="list-disc list-inside text-gray-700">
          <li className="mb-2">Successfully completed 250+ projects across various industries.</li>
          <li className="mb-2">Recognized as a leader in our field with multiple industry awards.</li>
          <li className="mb-2">Established long-term partnerships with over 500 satisfied clients.</li>
          <li className="mb-2">Built a passionate team of over 50 professionals.</li>
        </ul>
      </section>

      {/* Stats Section with Auto-Increasing Numbers */}
      <section id="stats-section" className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        <div className="text-center bg-gray-100 p-6 rounded-lg shadow-sm">
          <h3 className="text-5xl font-extrabold text-blue-600">{stats.projectsCompleted}+</h3>
          <p className="text-gray-700 mt-2">Projects Completed</p>
        </div>
        <div className="text-center bg-gray-100 p-6 rounded-lg shadow-sm">
          <h3 className="text-5xl font-extrabold text-green-600">{stats.happyClients}+</h3>
          <p className="text-gray-700 mt-2">Happy Clients</p>
        </div>
        <div className="text-center bg-gray-100 p-6 rounded-lg shadow-sm">
          <h3 className="text-5xl font-extrabold text-purple-600">{stats.awardsWon}</h3>
          <p className="text-gray-700 mt-2">Awards Won</p>
        </div>
        <div className="text-center bg-gray-100 p-6 rounded-lg shadow-sm">
          <h3 className="text-5xl font-extrabold text-orange-600">{stats.teamMembers}+</h3>
          <p className="text-gray-700 mt-2">Team Members</p>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="text-center mt-12">
        <h2 className="text-3xl font-bold mb-4 text-blue-700">Be a Part of Our Success Story</h2>
        <p className="text-gray-700 mb-6">
          Join us in our journey as we continue to achieve excellence and make a positive impact.
        </p>
        <button className="px-6 py-3 bg-blue-600 text-white rounded-md font-semibold hover:bg-blue-700 transition-all">
          Join Us
        </button>
      </section>
    </div>
  );
};

export default AchievementsPage;
