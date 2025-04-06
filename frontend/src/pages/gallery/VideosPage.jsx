// import React, { useState } from "react";

// const VideosPage = () => {
//   // Categories and videos data
//   const videos = [
//     { id: 1, src: "/assets/video1.mp4", alt: "Event 1", category: "Agency" },
//     { id: 2, src: "/assets/video2.mp4", alt: "Workshop 1", category: "CS" },
//     {
//       id: 3,
//       src: "/assets/video3.mp4",
//       alt: "LICED Meeting",
//       category: "LICED",
//     },
//     {
//       id: 4,
//       src: "/assets/video4.mp4",
//       alt: "Community Gathering",
//       category: "Organization",
//     },
//     {
//       id: 5,
//       src: "/assets/video5.mp4",
//       alt: "Training Session",
//       category: "Agency",
//     },
//     {
//       id: 6,
//       src: "/assets/video6.mp4",
//       alt: "LICED Program",
//       category: "LICED",
//     },
//     {
//       id: 7,
//       src: "/assets/video7.mp4",
//       alt: "CS Project Event",
//       category: "CS",
//     },
//     {
//       id: 8,
//       src: "/assets/video8.mp4",
//       alt: "Organizational Meeting",
//       category: "Organization",
//     },
//   ];

//   const [selectedCategory, setSelectedCategory] = useState("All");
//   const [selectedVideo, setSelectedVideo] = useState(null); // State for the selected video modal

//   const filteredVideos =
//     selectedCategory === "All"
//       ? videos
//       : videos.filter((video) => video.category === selectedCategory);

//   const openModal = (video) => setSelectedVideo(video); // Open modal with selected video
//   const closeModal = () => setSelectedVideo(null); // Close modal

//   return (
//     <div className="text-center">
//       <h2 className="text-4xl font-extrabold text-blue-700 mb-8">
//         Video Gallery
//       </h2>

//       {/* Filter Buttons */}
//       <div className="flex justify-center gap-4 mb-8">
//         {["All", "Agency", "CS", "LICED", "Organization"].map((category) => (
//           <button
//             key={category}
//             className={`px-4 py-2 font-semibold rounded-lg shadow-md ${
//               selectedCategory === category
//                 ? "bg-blue-700 text-white"
//                 : "bg-gray-200 text-gray-700 hover:bg-blue-600 hover:text-white"
//             } transition-all duration-300`}
//             onClick={() => setSelectedCategory(category)}
//           >
//             {category}
//           </button>
//         ))}
//       </div>

//       {/* Video Grid */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
//         {filteredVideos.length > 0 ? (
//           filteredVideos.map((video) => (
//             <div
//               key={video.id}
//               className="relative cursor-pointer"
//               onClick={() => openModal(video)}
//             >
//               <div className="bg-black h-64 flex items-center justify-center rounded-lg shadow-lg hover:scale-105 transition-transform duration-300">
//                 <span className="text-white font-semibold text-lg">
//                   🎥 Play {video.alt}
//                 </span>
//               </div>
//             </div>
//           ))
//         ) : (
//           <p className="text-gray-500 col-span-full">
//             No videos available for this category.
//           </p>
//         )}
//       </div>

//       <p className="text-gray-500 mt-6">*Click videos to view full size.</p>

//       {/* Modal for full video view */}
//       {selectedVideo && (
//         <div className="fixed inset-0 bg-black bg-opacity-70 z-50 flex justify-center items-center">
//           <div className="relative bg-white p-4 rounded-lg shadow-lg max-w-4xl w-full">
//             {/* Close Button */}
//             <button
//               onClick={closeModal}
//               className="absolute top-4 right-4 text-white bg-red-600  px-1 hover:bg-red-700 z-50"
//               style={{
//                 zIndex: 60,
//                 fontSize: "1rem",
//                 fontWeight: "bold",
//                 boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
//               }}
//             >
//               ✕
//             </button>
//             <video
//               src={selectedVideo.src}
//               controls
//               className="w-full h-auto rounded-lg"
//             >
//               Your browser does not support the video tag.
//             </video>
//             <p className="mt-4 text-gray-700 text-center">
//               {selectedVideo.alt}
//             </p>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default VideosPage;
import React, { useState, useEffect } from "react";

const VideosPage = () => {
  const [videos, setVideos] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("http://localhost:5000/api/videos")
      .then((response) => {
        if (!response.ok) throw new Error("Failed to fetch videos");
        return response.json();
      })
      .then((data) => {
        if (Array.isArray(data)) setVideos(data);
        else throw new Error("Unexpected response format");
      })
      .catch((err) => {
        console.error("Error fetching videos:", err);
        setError(err.message);
      });
  }, []);

  const filteredVideos =
    selectedCategory === "All" ? videos : videos.filter((video) => video.category === selectedCategory);

  return (
    <div className="text-center">
      <h2 className="text-4xl font-extrabold text-blue-700 mb-8">Video Gallery</h2>
      {error && <p className="text-red-500">{error}</p>}
      <div className="flex justify-center gap-4 mb-8">
        {["All", "Agency", "CS", "LICED", "Organization"].map((category) => (
          <button
            key={category}
            className={`px-4 py-2 font-semibold rounded-lg ${
              selectedCategory === category ? "bg-blue-700 text-white" : "bg-gray-200 text-gray-700"
            } hover:bg-blue-600 hover:text-white transition duration-300`}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {filteredVideos.length > 0 ? (
          filteredVideos.map((video) => (
            <div key={video.id} className="cursor-pointer">
              <video
                controls
                className="w-full h-64 rounded-lg shadow-md hover:scale-105 transition-transform duration-300"
              >
                <source src={`http://localhost:5000${video.src}`} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          ))
        ) : (
          <p className="text-gray-500 col-span-full">No videos available for this category.</p>
        )}
      </div>
    </div>
  );
};

export default VideosPage;
