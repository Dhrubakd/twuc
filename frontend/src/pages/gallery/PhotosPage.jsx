// // // // import React, { useState } from "react";

// // // // const PhotosPage = () => {
// // // //   // Categories and images data
// // // //   const images = [
// // // //     { id: 1, src: "/assets/photo1.jpg", alt: "Event 1", category: "Agency" },
// // // //     { id: 2, src: "/assets/photo2.jpg", alt: "Workshop 1", category: "CS" },
// // // //     {
// // // //       id: 3,
// // // //       src: "/assets/photo3.jpg",
// // // //       alt: "LICED Meeting",
// // // //       category: "LICED",
// // // //     },
// // // //     {
// // // //       id: 4,
// // // //       src: "/assets/photo4.jpg",
// // // //       alt: "Community Gathering",
// // // //       category: "Organization",
// // // //     },
// // // //     {
// // // //       id: 5,
// // // //       src: "/assets/photo5.jpg",
// // // //       alt: "Training Session",
// // // //       category: "Agency",
// // // //     },
// // // //     {
// // // //       id: 6,
// // // //       src: "/assets/photo6.jpg",
// // // //       alt: "LICED Program",
// // // //       category: "LICED",
// // // //     },
// // // //     {
// // // //       id: 7,
// // // //       src: "/assets/photo7.jpg",
// // // //       alt: "CS Project Event",
// // // //       category: "CS",
// // // //     },
// // // //     {
// // // //       id: 8,
// // // //       src: "/assets/photo8.jpg",
// // // //       alt: "Organizational Meeting",
// // // //       category: "Organization",
// // // //     },
// // // //   ];

// // // //   const [selectedCategory, setSelectedCategory] = useState("All");
// // // //   const [selectedImage, setSelectedImage] = useState(null); // State for the selected image in modal

// // // //   const filteredImages =
// // // //     selectedCategory === "All"
// // // //       ? images
// // // //       : images.filter((image) => image.category === selectedCategory);

// // // //   const openModal = (image) => setSelectedImage(image); // Open the modal with selected image
// // // //   const closeModal = () => setSelectedImage(null); // Close the modal

// // // //   return (
// // // //     <div className="text-center">
// // // //       <h2 className="text-4xl font-extrabold text-blue-700 mb-8">
// // // //         Photo Gallery
// // // //       </h2>

// // // //       {/* Filter Buttons */}
// // // //       <div className="flex justify-center gap-4 mb-8">
// // // //         {["All", "Agency", "CS", "LICED", "Organization"].map((category) => (
// // // //           <button
// // // //             key={category}
// // // //             className={`px-4 py-2 font-semibold rounded-lg shadow-md ${
// // // //               selectedCategory === category
// // // //                 ? "bg-blue-700 text-white"
// // // //                 : "bg-gray-200 text-gray-700 hover:bg-blue-600 hover:text-white"
// // // //             } transition-all duration-300`}
// // // //             onClick={() => setSelectedCategory(category)}
// // // //           >
// // // //             {category}
// // // //           </button>
// // // //         ))}
// // // //       </div>

// // // //       {/* Image Grid */}
// // // //       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
// // // //         {filteredImages.length > 0 ? (
// // // //           filteredImages.map((image) => (
// // // //             <div
// // // //               key={image.id}
// // // //               className="relative cursor-pointer"
// // // //               onClick={() => openModal(image)}
// // // //             >
// // // //               <img
// // // //                 src={image.src}
// // // //                 alt={image.alt}
// // // //                 className="w-full h-64 object-cover rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
// // // //               />
// // // //             </div>
// // // //           ))
// // // //         ) : (
// // // //           <p className="text-gray-500 col-span-full">
// // // //             No images available for this category.
// // // //           </p>
// // // //         )}
// // // //       </div>

// // // //       <p className="text-gray-500 mt-6">*Click images to view full size.</p>

// // // //       {/* Modal for full image view */}
// // // //       {selectedImage && (
// // // //         <div className="fixed inset-0 bg-black bg-opacity-70 z-50 flex justify-center items-center">
// // // //           <div className="relative bg-white p-4 rounded-lg shadow-lg max-w-4xl w-full">
// // // //             <button
// // // //               onClick={closeModal}
// // // //               className="absolute top-4 right-4 text-white bg-red-600  px-1 hover:bg-red-700 z-50"
// // // //             >
// // // //               ✕
// // // //             </button>
// // // //             <img
// // // //               src={selectedImage.src}
// // // //               alt={selectedImage.alt}
// // // //               className="w-full h-auto rounded-lg"
// // // //             />
// // // //             <p className="mt-4 text-gray-700 text-center">
// // // //               {selectedImage.alt}
// // // //             </p>
// // // //           </div>
// // // //         </div>
// // // //       )}
// // // //     </div>
// // // //   );
// // // // };

// // // // export default PhotosPage;
// // // import React, { useState, useEffect } from 'react';

// // // const PhotosPage = () => {
// // //   const [photos, setPhotos] = useState([]);
// // //   const [selectedCategory, setSelectedCategory] = useState('All');
// // //   const [selectedImage, setSelectedImage] = useState(null);

// // //   useEffect(() => {
// // //     fetch('http://localhost:5000/api/photos')
// // //       .then((response) => response.json())
// // //       .then((data) => setPhotos(data))
// // //       .catch((error) => console.error('Error fetching photos:', error));
// // //   }, []);

// // //   const filteredPhotos =
// // //     selectedCategory === 'All'
// // //       ? photos
// // //       : photos.filter((photo) => photo.category === selectedCategory);

// // //   return (
// // //     <div className="text-center">
// // //       <h2 className="text-4xl font-extrabold text-blue-700 mb-8">Photo Gallery</h2>

// // //       {/* Filter Buttons */}
// // //       <div className="flex justify-center gap-4 mb-8">
// // //         {['All', 'Agency', 'CS', 'LICED', 'Organization'].map((category) => (
// // //           <button
// // //             key={category}
// // //             className={`px-4 py-2 font-semibold rounded-lg shadow-md ${
// // //               selectedCategory === category
// // //                 ? 'bg-blue-700 text-white'
// // //                 : 'bg-gray-200 text-gray-700 hover:bg-blue-600 hover:text-white'
// // //             } transition-all duration-300`}
// // //             onClick={() => setSelectedCategory(category)}
// // //           >
// // //             {category}
// // //           </button>
// // //         ))}
// // //       </div>

// // //       {/* Photo Grid */}
// // //       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
// // //         {filteredPhotos.length > 0 ? (
// // //           filteredPhotos.map((photo) => (
// // //             <div
// // //               key={photo.id}
// // //               className="cursor-pointer"
// // //               onClick={() => setSelectedImage(photo)}
// // //             >
// // //               <img
// // //                 src={`http://localhost:5000${photo.src}`}
// // //                 alt={photo.category}
// // //                 className="w-full h-64 object-cover rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
// // //               />
// // //             </div>
// // //           ))
// // //         ) : (
// // //           <p className="text-gray-500 col-span-full">No photos available for this category.</p>
// // //         )}
// // //       </div>

// // //       {/* Full-Size Image Modal */}
// // //       {selectedImage && (
// // //         <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50">
// // //           <div className="bg-white rounded-lg p-4 max-w-3xl w-full relative">
// // //             <button
// // //               className="absolute top-4 right-4 text-white bg-red-600 rounded-full px-2 hover:bg-red-700"
// // //               onClick={() => setSelectedImage(null)}
// // //             >
// // //               ✕
// // //             </button>
// // //             <img src={`http://localhost:5000${selectedImage.src}`} alt={selectedImage.category} />
// // //           </div>
// // //         </div>
// // //       )}
// // //     </div>
// // //   );
// // // };

// // // export default PhotosPage;
// // import React, { useState, useEffect } from 'react';

// // const PhotosPage = () => {
// //   const [photos, setPhotos] = useState([]);
// //   const [selectedCategory, setSelectedCategory] = useState('All');

// //   useEffect(() => {
// //     fetch('http://localhost:5000/api/photos')
// //       .then((response) => response.json())
// //       .then((data) => setPhotos(data))
// //       .catch((error) => console.error('Error fetching photos:', error));
// //   }, []);

// //   const filteredPhotos =
// //     selectedCategory === 'All'
// //       ? photos
// //       : photos.filter((photo) => photo.category === selectedCategory);

// //   return (
// //     <div className="text-center">
// //       <h2 className="text-4xl font-extrabold text-blue-700 mb-8">Photo Gallery</h2>
// //       <div className="flex justify-center gap-4 mb-8">
// //         {['All', 'Agency', 'CS', 'LICED', 'Organization'].map((category) => (
// //           <button
// //             key={category}
// //             className={`px-4 py-2 font-semibold rounded-lg ${
// //               selectedCategory === category ? 'bg-blue-700 text-white' : 'bg-gray-200'
// //             }`}
// //             onClick={() => setSelectedCategory(category)}
// //           >
// //             {category}
// //           </button>
// //         ))}
// //       </div>
// //       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
// //         {filteredPhotos.length > 0 ? (
// //           filteredPhotos.map((photo) => (
// //             <div key={photo.id} className="rounded-lg shadow-lg overflow-hidden">
// //               <img
// //                 src={`http://localhost:5000${photo.src}`}
// //                 alt={photo.category}
// //                 className="w-full h-64 object-cover"
// //               />
// //             </div>
// //           ))
// //         ) : (
// //           <p>No photos available for this category.</p>
// //         )}
// //       </div>
// //     </div>
// //   );
// // };

// // export default PhotosPage;
// import React, { useState, useEffect } from 'react';

// const PhotosPage = () => {
//   const [photos, setPhotos] = useState([]); // All photos fetched from the server
//   const [selectedCategory, setSelectedCategory] = useState('All'); // Current selected category
//   const [error, setError] = useState(null); // Error state for handling fetch errors

//   // Fetch photos on component mount
//   useEffect(() => {
//     fetch('http://localhost:5000/api/photos') // API endpoint
//       .then((response) => {
//         if (!response.ok) throw new Error('Failed to fetch photos');
//         return response.json();
//       })
//       .then((data) => {
//         if (Array.isArray(data)) setPhotos(data); // Set photos if data is an array
//         else throw new Error('Unexpected response format');
//       })
//       .catch((err) => {
//         console.error('Error fetching photos:', err);
//         setError(err.message);
//       });
//   }, []);

//   // Filter photos by selected category
//   const filteredPhotos =
//     selectedCategory === 'All'
//       ? photos
//       : photos.filter((photo) => photo.category === selectedCategory);

//   return (
//     <div className="text-center">
//       <h2 className="text-4xl font-extrabold text-blue-700 mb-8">Photo Gallery</h2>

//       {error && <p className="text-red-500">{error}</p>}

//       {/* Filter Buttons */}
//       <div className="flex justify-center gap-4 mb-8">
//         {['All', 'Agency', 'CS', 'LICED', 'Organization'].map((category) => (
//           <button
//             key={category}
//             className={`px-4 py-2 font-semibold rounded-lg ${
//               selectedCategory === category ? 'bg-blue-700 text-white' : 'bg-gray-200 text-gray-700'
//             } hover:bg-blue-600 hover:text-white transition duration-300`}
//             onClick={() => setSelectedCategory(category)}
//           >
//             {category}
//           </button>
//         ))}
//       </div>

//       {/* Photo Grid */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
//         {filteredPhotos.length > 0 ? (
//           filteredPhotos.map((photo) => (
//             <div key={photo.id} className="cursor-pointer">
//               <img
//                 src={`http://localhost:5000${photo.src}`} // Access uploaded images
//                 alt={photo.category}
//                 className="w-full h-64 object-cover rounded-lg shadow-md hover:scale-105 transition-transform duration-300"
//               />
//             </div>
//           ))
//         ) : (
//           <p className="text-gray-500 col-span-full">No photos available for this category.</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default PhotosPage;
import React, { useState, useEffect } from "react";

const PhotosPage = () => {
  const [photos, setPhotos] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("http://localhost:5000/api/photos")
      .then((response) => {
        if (!response.ok) throw new Error("Failed to fetch photos");
        return response.json();
      })
      .then((data) => {
        if (Array.isArray(data)) setPhotos(data);
        else throw new Error("Unexpected response format");
      })
      .catch((err) => {
        console.error("Error fetching photos:", err);
        setError(err.message);
      });
  }, []);

  const filteredPhotos =
    selectedCategory === "All" ? photos : photos.filter((photo) => photo.category === selectedCategory);

  return (
    <div className="text-center">
      <h2 className="text-4xl font-extrabold text-blue-700 mb-8">Photo Gallery</h2>
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
        {filteredPhotos.length > 0 ? (
          filteredPhotos.map((photo) => (
            <div key={photo.id} className="cursor-pointer">
              <img
                src={`http://localhost:5000${photo.src}`}
                alt={photo.category}
                className="w-full h-64 object-cover rounded-lg shadow-md hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))
        ) : (
          <p className="text-gray-500 col-span-full">No photos available for this category.</p>
        )}
      </div>
    </div>
  );
};

export default PhotosPage;
