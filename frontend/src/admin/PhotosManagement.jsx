// // // // import React, { useState } from 'react';

// // // // const PhotosManagement = () => {
// // // //   const [category, setCategory] = useState('');
// // // //   const [photo, setPhoto] = useState(null);
// // // //   const [message, setMessage] = useState('');

// // // //   const handleUpload = async (e) => {
// // // //     e.preventDefault();

// // // //     if (!photo) {
// // // //       alert('Please select a photo to upload.');
// // // //       return;
// // // //     }

// // // //     const formData = new FormData();
// // // //     formData.append('photo', photo);
// // // //     formData.append('category', category);

// // // //     try {
// // // //       const response = await fetch('http://localhost:5000/api/photos/upload', {
// // // //         method: 'POST',
// // // //         body: formData,
// // // //       });

// // // //       const data = await response.json();
// // // //       setMessage(data.message);
// // // //     } catch (error) {
// // // //       console.error('Error uploading photo:', error);
// // // //       setMessage('Failed to upload photo.');
// // // //     }
// // // //   };

// // // //   return (
// // // //     <div className="max-w-md mx-auto p-4 bg-white rounded-lg shadow-lg">
// // // //       <h2 className="text-2xl font-bold mb-4">Upload Photo</h2>
// // // //       <form onSubmit={handleUpload}>
// // // //         <div className="mb-4">
// // // //           <label className="block font-bold mb-2">Category</label>
// // // //           <select
// // // //             value={category}
// // // //             onChange={(e) => setCategory(e.target.value)}
// // // //             className="w-full border rounded p-2"
// // // //             required
// // // //           >
// // // //             <option value="">Select Category</option>
// // // //             <option value="Agency">Agency</option>
// // // //             <option value="CS">CS</option>
// // // //             <option value="LICED">LICED</option>
// // // //             <option value="Organization">Organization</option>
// // // //           </select>
// // // //         </div>
// // // //         <div className="mb-4">
// // // //           <label className="block font-bold mb-2">Select Photo</label>
// // // //           <input
// // // //             type="file"
// // // //             accept="image/*"
// // // //             onChange={(e) => setPhoto(e.target.files[0])}
// // // //             required
// // // //           />
// // // //         </div>
// // // //         <button
// // // //           type="submit"
// // // //           className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
// // // //         >
// // // //           Upload
// // // //         </button>
// // // //       </form>
// // // //       {message && <p className="mt-4 text-center">{message}</p>}
// // // //     </div>
// // // //   );
// // // // };

// // // // export default PhotosManagement;


// // // // import React, { useState, useEffect } from 'react';

// // // // const PhotosManagement = () => {
// // // //   const [category, setCategory] = useState('');
// // // //   const [photo, setPhoto] = useState(null);
// // // //   const [message, setMessage] = useState('');
// // // //   const [uploadedPhotos, setUploadedPhotos] = useState([]);

// // // //   const fetchPhotos = async () => {
// // // //     try {
// // // //       const response = await fetch('http://localhost:5000/api/photos');
// // // //       const data = await response.json();
// // // //       setUploadedPhotos(data);
// // // //     } catch (error) {
// // // //       console.error('Error fetching photos:', error);
// // // //     }
// // // //   };

// // // //   useEffect(() => {
// // // //     fetchPhotos(); // Fetch photos on component mount
// // // //   }, []);

// // // //   const handleUpload = async (e) => {
// // // //     e.preventDefault();

// // // //     if (!photo) {
// // // //       alert('Please select a photo to upload.');
// // // //       return;
// // // //     }

// // // //     const formData = new FormData();
// // // //     formData.append('photo', photo);
// // // //     formData.append('category', category);

// // // //     try {
// // // //       const response = await fetch('http://localhost:5000/api/photos/upload', {
// // // //         method: 'POST',
// // // //         body: formData,
// // // //       });

// // // //       const data = await response.json();
// // // //       setMessage(data.message);
// // // //       fetchPhotos(); // Refresh photos after upload
// // // //     } catch (error) {
// // // //       console.error('Error uploading photo:', error);
// // // //       setMessage('Failed to upload photo.');
// // // //     }
// // // //   };

// // // //   return (
// // // //     <div className="max-w-3xl mx-auto p-6 bg-white rounded-lg shadow-lg">
// // // //       <h2 className="text-2xl font-bold mb-6">Upload Photo</h2>
// // // //       <form onSubmit={handleUpload}>
// // // //         <div className="mb-4">
// // // //           <label className="block font-bold mb-2">Category</label>
// // // //           <select
// // // //             value={category}
// // // //             onChange={(e) => setCategory(e.target.value)}
// // // //             className="w-full border rounded p-2"
// // // //             required
// // // //           >
// // // //             <option value="">Select Category</option>
// // // //             <option value="Agency">Agency</option>
// // // //             <option value="CS">CS</option>
// // // //             <option value="LICED">LICED</option>
// // // //             <option value="Organization">Organization</option>
// // // //           </select>
// // // //         </div>
// // // //         <div className="mb-4">
// // // //           <label className="block font-bold mb-2">Select Photo</label>
// // // //           <input
// // // //             type="file"
// // // //             accept="image/*"
// // // //             onChange={(e) => setPhoto(e.target.files[0])}
// // // //             required
// // // //           />
// // // //         </div>
// // // //         <button
// // // //           type="submit"
// // // //           className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
// // // //         >
// // // //           Upload
// // // //         </button>
// // // //       </form>
// // // //       {message && <p className="mt-4 text-center">{message}</p>}
// // // //     </div>
// // // //   );
// // // // };

// // // // export default PhotosManagement;
// // // import React, { useState, useEffect } from 'react';

// // // const PhotosManagement = () => {
// // //   const [category, setCategory] = useState('');
// // //   const [photo, setPhoto] = useState(null);
// // //   const [message, setMessage] = useState('');
// // //   const [uploadedPhotos, setUploadedPhotos] = useState([]);

// // //   const fetchPhotos = async () => {
// // //     try {
// // //       const response = await fetch('http://localhost:5000/api/photos');
// // //       const data = await response.json();
// // //       setUploadedPhotos(data);
// // //     } catch (error) {
// // //       console.error('Error fetching photos:', error);
// // //     }
// // //   };

// // //   useEffect(() => {
// // //     fetchPhotos(); // Fetch photos on component mount
// // //   }, []);

// // //   const handleUpload = async (e) => {
// // //     e.preventDefault();

// // //     if (!photo) {
// // //       alert('Please select a photo to upload.');
// // //       return;
// // //     }

// // //     const formData = new FormData();
// // //     formData.append('photo', photo);
// // //     formData.append('category', category);

// // //     try {
// // //       const response = await fetch('http://localhost:5000/api/photos/upload', {
// // //         method: 'POST',
// // //         body: formData,
// // //       });

// // //       const data = await response.json();
// // //       setMessage(data.message);
// // //       fetchPhotos(); // Refresh photos after upload
// // //     } catch (error) {
// // //       console.error('Error uploading photo:', error);
// // //       setMessage('Failed to upload photo.');
// // //     }
// // //   };

// // //   return (
// // //     <div className="max-w-3xl mx-auto p-6 bg-white rounded-lg shadow-lg">
// // //       <h2 className="text-2xl font-bold mb-6">Upload Photo</h2>
// // //       <form onSubmit={handleUpload}>
// // //         <div className="mb-4">
// // //           <label className="block font-bold mb-2">Category</label>
// // //           <select
// // //             value={category}
// // //             onChange={(e) => setCategory(e.target.value)}
// // //             className="w-full border rounded p-2"
// // //             required
// // //           >
// // //             <option value="">Select Category</option>
// // //             <option value="Agency">Agency</option>
// // //             <option value="CS">CS</option>
// // //             <option value="LICED">LICED</option>
// // //             <option value="Organization">Organization</option>
// // //           </select>
// // //         </div>
// // //         <div className="mb-4">
// // //           <label className="block font-bold mb-2">Select Photo</label>
// // //           <input
// // //             type="file"
// // //             accept="image/*"
// // //             onChange={(e) => setPhoto(e.target.files[0])}
// // //             required
// // //           />
// // //         </div>
// // //         <button
// // //           type="submit"
// // //           className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
// // //         >
// // //           Upload
// // //         </button>
// // //       </form>
// // //       {message && <p className="mt-4 text-center">{message}</p>}
// // //     </div>
// // //   );
// // // };

// // // export default PhotosManagement;
// // import React, { useState, useEffect } from 'react';

// // const PhotosManagement = () => {
// //   const [category, setCategory] = useState('');
// //   const [photo, setPhoto] = useState(null);
// //   const [message, setMessage] = useState('');
// //   const [uploadedPhotos, setUploadedPhotos] = useState([]);

// //   const fetchPhotos = async () => {
// //     try {
// //       const response = await fetch('http://localhost:5000/api/photos');
// //       const data = await response.json();
// //       setUploadedPhotos(data);
// //     } catch (error) {
// //       console.error('Error fetching photos:', error);
// //     }
// //   };

// //   useEffect(() => {
// //     fetchPhotos(); // Fetch photos when the component mounts
// //   }, []);

// //   const handleUpload = async (e) => {
// //     e.preventDefault();
// //     if (!photo) {
// //       alert('Please select a photo to upload.');
// //       return;
// //     }

// //     const formData = new FormData();
// //     formData.append('photo', photo);
// //     formData.append('category', category);

// //     try {
// //       const response = await fetch('http://localhost:5000/api/photos/upload', {
// //         method: 'POST',
// //         body: formData,
// //       });

// //       const data = await response.json();
// //       setMessage(data.message);
// //       fetchPhotos(); // Refresh the list after uploading
// //     } catch (error) {
// //       console.error('Error uploading photo:', error);
// //       setMessage('Failed to upload photo.');
// //     }
// //   };

// //   return (
// //     <div className="max-w-3xl mx-auto p-6 bg-white rounded-lg shadow-lg">
// //       <h2 className="text-2xl font-bold mb-6">Upload Photo</h2>
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
// //           <label className="block font-bold mb-2">Select Photo</label>
// //           <input
// //             type="file"
// //             accept="image/*"
// //             onChange={(e) => setPhoto(e.target.files[0])}
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

// // export default PhotosManagement;
// // import React, { useState, useEffect } from "react";

// // const PhotosManagement = () => {
// //   const [category, setCategory] = useState("");
// //   const [photo, setPhoto] = useState(null);
// //   const [message, setMessage] = useState("");
// //   const [uploadedPhotos, setUploadedPhotos] = useState([]);

// //   const fetchPhotos = async () => {
// //     try {
// //       const response = await fetch("http://localhost:5000/api/photos");
// //       const data = await response.json();
// //       setUploadedPhotos(data);
// //     } catch (error) {
// //       console.error("Error fetching photos:", error);
// //     }
// //   };

// //   useEffect(() => {
// //     fetchPhotos();
// //   }, []);

// //   const handleUpload = async (e) => {
// //     e.preventDefault();
// //     if (!photo) {
// //       alert("Please select a photo to upload.");
// //       return;
// //     }

// //     const formData = new FormData();
// //     formData.append("photo", photo);
// //     formData.append("category", category);

// //     try {
// //       const response = await fetch("http://localhost:5000/api/photos/upload", {
// //         method: "POST",
// //         body: formData,
// //       });

// //       const data = await response.json();
// //       setMessage(data.message);
// //       fetchPhotos();
// //     } catch (error) {
// //       console.error("Error uploading photo:", error);
// //       setMessage("Failed to upload photo.");
// //     }
// //   };

// //   return (
// //     <div className="max-w-3xl mx-auto p-6 bg-white rounded-lg shadow-lg">
// //       <h2 className="text-2xl font-bold mb-6">Upload Photo</h2>
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
// //           <label className="block font-bold mb-2">Select Photo</label>
// //           <input
// //             type="file"
// //             accept="image/*"
// //             onChange={(e) => setPhoto(e.target.files[0])}
// //             required
// //           />
// //         </div>
// //         <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
// //           Upload
// //         </button>
// //       </form>
// //       {message && <p className="mt-4 text-center">{message}</p>}
// //     </div>
// //   );
// // };

// // export default PhotosManagement;
// import React, { useState, useEffect } from "react";

// const PhotosManagement = () => {
//   const [category, setCategory] = useState("");
//   const [photo, setPhoto] = useState(null);
//   const [message, setMessage] = useState("");
//   const [uploadedPhotos, setUploadedPhotos] = useState([]);

//   // Fetch photos from the server
//   const fetchPhotos = async () => {
//     try {
//       const response = await fetch("http://localhost:5000/api/photos");
//       const data = await response.json();
//       setUploadedPhotos(data);
//     } catch (error) {
//       console.error("Error fetching photos:", error);
//     }
//   };

//   // Upload photo
//   const handleUpload = async (e) => {
//     e.preventDefault();
//     if (!photo) {
//       alert("Please select a photo to upload.");
//       return;
//     }

//     const formData = new FormData();
//     formData.append("photo", photo);
//     formData.append("category", category);

//     try {
//       const response = await fetch("http://localhost:5000/api/photos/upload", {
//         method: "POST",
//         body: formData,
//       });

//       const data = await response.json();
//       setMessage(data.message);
//       fetchPhotos(); // Refresh the table after upload
//     } catch (error) {
//       console.error("Error uploading photo:", error);
//       setMessage("Failed to upload photo.");
//     }
//   };

//   // Delete photo by ID
//   const handleDelete = async (id) => {
//     const confirmDelete = window.confirm("Are you sure you want to delete this photo?");
//     if (!confirmDelete) return;

//     try {
//       const response = await fetch(`http://localhost:5000/api/photos/${id}`, {
//         method: "DELETE",
//       });

//       if (response.ok) {
//         setMessage("Photo deleted successfully.");
//         fetchPhotos(); // Refresh the table after deletion
//       } else {
//         throw new Error("Failed to delete photo.");
//       }
//     } catch (error) {
//       console.error("Error deleting photo:", error);
//       setMessage("Failed to delete photo.");
//     }
//   };

//   useEffect(() => {
//     fetchPhotos(); // Fetch photos when component mounts
//   }, []);

//   return (
//     <div className="max-w-5xl mx-auto p-6 bg-white rounded-lg shadow-lg">
//       <h2 className="text-2xl font-bold mb-6">Upload Photo</h2>
//       <form onSubmit={handleUpload} className="mb-6">
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
//           <label className="block font-bold mb-2">Select Photo</label>
//           <input
//             type="file"
//             accept="image/*"
//             onChange={(e) => setPhoto(e.target.files[0])}
//             required
//           />
//         </div>
//         <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
//           Upload
//         </button>
//       </form>
//       {message && <p className="mt-4 text-center text-green-600">{message}</p>}

//       <h3 className="text-xl font-bold mt-8">Uploaded Photos</h3>
//       <div className="overflow-x-auto mt-4">
//         <table className="w-full table-auto border-collapse border border-gray-200">
//           <thead>
//             <tr className="bg-gray-100">
//               <th className="border border-gray-300 px-4 py-2">Photo</th>
//               <th className="border border-gray-300 px-4 py-2">Category</th>
//               <th className="border border-gray-300 px-4 py-2">Uploaded At</th>
//               <th className="border border-gray-300 px-4 py-2">Actions</th>
//             </tr>
//           </thead>
//           <tbody>
//             {uploadedPhotos.length > 0 ? (
//               uploadedPhotos.map((photo) => (
//                 <tr key={photo.id} className="text-center">
//                   <td className="border border-gray-300 px-4 py-2">
//                     <img
//                       src={`http://localhost:5000${photo.src}`}
//                       alt={photo.category}
//                       className="w-20 h-20 object-cover rounded"
//                     />
//                   </td>
//                   <td className="border border-gray-300 px-4 py-2">{photo.category}</td>
//                   <td className="border border-gray-300 px-4 py-2">{new Date(photo.uploaded_at).toLocaleString()}</td>
//                   <td className="border border-gray-300 px-4 py-2">
//                     <button
//                       onClick={() => handleDelete(photo.id)}
//                       className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
//                     >
//                       Delete
//                     </button>
//                   </td>
//                 </tr>
//               ))
//             ) : (
//               <tr>
//                 <td colSpan="4" className="border border-gray-300 px-4 py-4 text-gray-500">
//                   No photos available.
//                 </td>
//               </tr>
//             )}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default PhotosManagement;
import React, { useState, useEffect } from "react";

const PhotosManagement = () => {
  const [category, setCategory] = useState("");
  const [photo, setPhoto] = useState(null);
  const [message, setMessage] = useState("");
  const [uploadedPhotos, setUploadedPhotos] = useState([]);

  const fetchPhotos = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/photos");
      const data = await response.json();
      setUploadedPhotos(data);
    } catch (error) {
      console.error("Error fetching photos:", error);
    }
  };

  const handleUpload = async (e) => {
    e.preventDefault();
    if (!photo) {
      alert("Please select a photo to upload.");
      return;
    }

    const formData = new FormData();
    formData.append("photo", photo);
    formData.append("category", category);

    try {
      const response = await fetch("http://localhost:5000/api/photos/upload", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();
      setMessage(data.message);
      fetchPhotos();
    } catch (error) {
      console.error("Error uploading photo:", error);
      setMessage("Failed to upload photo.");
    }
  };

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this photo?");
    if (!confirmDelete) return;

    try {
      const response = await fetch(`http://localhost:5000/api/photos/${id}`, {
        method: "DELETE",
      });

      if (response.ok) {
        setMessage("Photo deleted successfully.");
        fetchPhotos();
      } else {
        throw new Error("Failed to delete photo.");
      }
    } catch (error) {
      console.error("Error deleting photo:", error);
      setMessage("Failed to delete photo.");
    }
  };

  useEffect(() => {
    fetchPhotos();
  }, []);

  return (
    <div className="max-w-5xl mx-auto p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-6">Upload Photo</h2>
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
          <label className="block font-bold mb-2">Select Photo</label>
          <input
            type="file"
            accept="image/*"
            onChange={(e) => setPhoto(e.target.files[0])}
            required
          />
        </div>
        <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
          Upload
        </button>
      </form>
      {message && <p className="mt-4 text-center">{message}</p>}

      <h3 className="text-xl font-bold mt-8">Uploaded Photos</h3>
      <div className="overflow-x-auto mt-4">
        <table className="w-full table-auto border-collapse border border-gray-200">
          <thead>
            <tr className="bg-gray-100">
              <th className="border border-gray-300 px-4 py-2">Photo</th>
              <th className="border border-gray-300 px-4 py-2">Category</th>
              <th className="border border-gray-300 px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {uploadedPhotos.map((photo) => (
              <tr key={photo.id} className="text-center">
                <td className="border border-gray-300 px-4 py-2">
                  <img src={`http://localhost:5000${photo.src}`} alt={photo.category} className="w-20 h-20" />
                </td>
                <td className="border border-gray-300 px-4 py-2">{photo.category}</td>
                <td className="border border-gray-300 px-4 py-2">
                  <button
                    onClick={() => handleDelete(photo.id)}
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

export default PhotosManagement;
