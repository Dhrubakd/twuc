// // // import React from "react";

// // // const VideoManagement = () => {
// // //   return (
// // //     <div>
// // //       <h2 className="text-3xl font-bold text-teal-600 mb-6">Video Management</h2>
// // //       <p className="text-gray-700">Manage videos in the gallery here. You can add, edit, or delete videos as needed.</p>
// // //     </div>
// // //   );
// // // };

// // // export default VideoManagement;
// // import React, { useState, useEffect } from 'react';

// // const VideosManagement = () => {
// //   const [category, setCategory] = useState('');
// //   const [video, setVideo] = useState(null);
// //   const [message, setMessage] = useState('');
// //   const [videos, setVideos] = useState([]);

// //   const fetchVideos = async () => {
// //     try {
// //       const response = await fetch('http://localhost:5000/api/videos');
// //       const data = await response.json();
// //       setVideos(data);
// //     } catch (error) {
// //       console.error('Error fetching videos:', error);
// //     }
// //   };

// //   useEffect(() => {
// //     fetchVideos();
// //   }, []);

// //   const handleUpload = async (e) => {
// //     e.preventDefault();
// //     if (!video) {
// //       alert('Please select a video to upload.');
// //       return;
// //     }

// //     const formData = new FormData();
// //     formData.append('video', video);
// //     formData.append('category', category);

// //     try {
// //       const response = await fetch('http://localhost:5000/api/videos/upload', {
// //         method: 'POST',
// //         body: formData,
// //       });

// //       const data = await response.json();
// //       setMessage(data.message);
// //       fetchVideos();
// //     } catch (error) {
// //       console.error('Error uploading video:', error);
// //       setMessage('Failed to upload video.');
// //     }
// //   };

// //   return (
// //     <div className="max-w-3xl mx-auto p-6 bg-white rounded-lg shadow-lg">
// //       <h2 className="text-2xl font-bold mb-6">Upload Video</h2>
// //       <form onSubmit={handleUpload}>
// //         <div className="mb-4">
// //           <label className="block font-bold mb-2">Category</label>
// //           <select
// //             value={category}
// //             onChange={(e) => setCategory(e.target.value)}
// //             className="w-full border rounded p-2"
// //             required
// //           >
// //             <option value="">Select Category</option>
// //             <option value="Agency">Agency</option>
// //             <option value="CS">CS</option>
// //             <option value="LICED">LICED</option>
// //             <option value="Organization">Organization</option>
// //           </select>
// //         </div>
// //         <div className="mb-4">
// //           <label className="block font-bold mb-2">Select Video</label>
// //           <input
// //             type="file"
// //             accept="video/*"
// //             onChange={(e) => setVideo(e.target.files[0])}
// //             required
// //           />
// //         </div>
// //         <button
// //           type="submit"
// //           className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
// //         >
// //           Upload
// //         </button>
// //       </form>
// //       {message && <p className="mt-4 text-center">{message}</p>}
// //     </div>
// //   );
// // };

// // export default VideosManagement;
// import React, { useState, useEffect } from "react";

// const VideosManagement = () => {
//   const [category, setCategory] = useState("");
//   const [video, setVideo] = useState(null);
//   const [message, setMessage] = useState("");
//   const [uploadedVideos, setUploadedVideos] = useState([]);

//   const fetchVideos = async () => {
//     try {
//       const response = await fetch("http://localhost:5000/api/videos");
//       const data = await response.json();
//       setUploadedVideos(data);
//     } catch (error) {
//       console.error("Error fetching videos:", error);
//     }
//   };

//   useEffect(() => {
//     fetchVideos(); // Fetch videos when the component mounts
//   }, []);

//   const handleUpload = async (e) => {
//     e.preventDefault();
//     if (!video) {
//       alert("Please select a video to upload.");
//       return;
//     }

//     const formData = new FormData();
//     formData.append("video", video);
//     formData.append("category", category);

//     try {
//       const response = await fetch("http://localhost:5000/api/videos/upload", {
//         method: "POST",
//         body: formData,
//       });

//       const data = await response.json();
//       setMessage(data.message);
//       fetchVideos(); // Refresh the list after uploading
//     } catch (error) {
//       console.error("Error uploading video:", error);
//       setMessage("Failed to upload video.");
//     }
//   };

//   return (
//     <div className="max-w-3xl mx-auto p-6 bg-white rounded-lg shadow-lg">
//       <h2 className="text-2xl font-bold mb-6">Upload Video</h2>
//       <form onSubmit={handleUpload}>
//         <div className="mb-4">
//           <label className="block font-bold mb-2">Category</label>
//           <select
//             value={category}
//             onChange={(e) => setCategory(e.target.value)}
//             className="w-full border rounded p-2"
//             required
//           >
//             <option value="">Select Category</option>
//             <option value="Agency">Agency</option>
//             <option value="CS">CS</option>
//             <option value="LICED">LICED</option>
//             <option value="Organization">Organization</option>
//           </select>
//         </div>
//         <div className="mb-4">
//           <label className="block font-bold mb-2">Select Video</label>
//           <input
//             type="file"
//             accept="video/*"
//             onChange={(e) => setVideo(e.target.files[0])}
//             required
//           />
//         </div>
//         <button type="submit" className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700">
//           Upload
//         </button>
//       </form>
//       {message && <p className="mt-4 text-center">{message}</p>}
//     </div>
//   );
// };

// export default VideosManagement;
import React, { useState, useEffect } from "react";

const VideosManagement = () => {
  const [category, setCategory] = useState("");
  const [video, setVideo] = useState(null);
  const [message, setMessage] = useState("");
  const [uploadedVideos, setUploadedVideos] = useState([]);

  const fetchVideos = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/videos");
      const data = await response.json();
      setUploadedVideos(data);
    } catch (error) {
      console.error("Error fetching videos:", error);
    }
  };

  const handleUpload = async (e) => {
    e.preventDefault();
    if (!video) {
      alert("Please select a video to upload.");
      return;
    }

    const formData = new FormData();
    formData.append("video", video);
    formData.append("category", category);

    try {
      const response = await fetch("http://localhost:5000/api/videos/upload", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();
      setMessage(data.message);
      fetchVideos(); // Refresh the list after uploading
    } catch (error) {
      console.error("Error uploading video:", error);
      setMessage("Failed to upload video.");
    }
  };

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this video?");
    if (!confirmDelete) return;

    try {
      const response = await fetch(`http://localhost:5000/api/videos/${id}`, {
        method: "DELETE",
      });

      if (response.ok) {
        setMessage("Video deleted successfully.");
        fetchVideos(); // Refresh the list after deleting
      } else {
        throw new Error("Failed to delete video.");
      }
    } catch (error) {
      console.error("Error deleting video:", error);
      setMessage("Failed to delete video.");
    }
  };

  useEffect(() => {
    fetchVideos(); // Fetch videos when the component mounts
  }, []);

  return (
    <div className="max-w-5xl mx-auto p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-6">Upload Video</h2>
      <form onSubmit={handleUpload}>
        <div className="mb-4">
          <label className="block font-bold mb-2">Category</label>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full border rounded p-2"
            required
          >
            <option value="">Select Category</option>
            <option value="Agency">Agency</option>
            <option value="CS">CS</option>
            <option value="LICED">LICED</option>
            <option value="Organization">Organization</option>
          </select>
        </div>
        <div className="mb-4">
          <label className="block font-bold mb-2">Select Video</label>
          <input
            type="file"
            accept="video/*"
            onChange={(e) => setVideo(e.target.files[0])}
            required
          />
        </div>
        <button type="submit" className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700">
          Upload
        </button>
      </form>
      {message && <p className="mt-4 text-center">{message}</p>}

      <h3 className="text-xl font-bold mt-8">Uploaded Videos</h3>
      <div className="overflow-x-auto mt-4">
        <table className="w-full table-auto border-collapse border border-gray-200">
          <thead>
            <tr className="bg-gray-100">
              <th className="border border-gray-300 px-4 py-2">Video</th>
              <th className="border border-gray-300 px-4 py-2">Category</th>
              <th className="border border-gray-300 px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {uploadedVideos.map((video) => (
              <tr key={video.id} className="text-center">
                <td className="border border-gray-300 px-4 py-2">
                  <video controls src={`http://localhost:5000${video.src}`} className="w-32 h-20"></video>
                </td>
                <td className="border border-gray-300 px-4 py-2">{video.category}</td>
                <td className="border border-gray-300 px-4 py-2">
                  <button
                    onClick={() => handleDelete(video.id)}
                    className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default VideosManagement;
