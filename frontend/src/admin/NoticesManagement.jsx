// // // // // import React, { useState, useEffect } from "react";

// // // // // const NoticesManagement = () => {
// // // // //   const [notices, setNotices] = useState([]); // State to store all notices
// // // // //   const [title, setTitle] = useState(""); // State for new notice title
// // // // //   const [description, setDescription] = useState(""); // State for new notice description
// // // // //   const [message, setMessage] = useState(""); // Message state

// // // // //   // Fetch notices from the backend
// // // // //   const fetchNotices = async () => {
// // // // //     try {
// // // // //       const response = await fetch("http://localhost:5000/api/notices");
// // // // //       const data = await response.json();
// // // // //       setNotices(data);
// // // // //     } catch (error) {
// // // // //       console.error("Error fetching notices:", error);
// // // // //     }
// // // // //   };

// // // // //   useEffect(() => {
// // // // //     fetchNotices(); // Fetch notices when component mounts
// // // // //   }, []);

// // // // //   // Handle adding a new notice
// // // // //   const handleAddNotice = async (e) => {
// // // // //     e.preventDefault();

// // // // //     if (!title || !description) {
// // // // //       alert("Please fill out both fields.");
// // // // //       return;
// // // // //     }

// // // // //     try {
// // // // //       const response = await fetch("http://localhost:5000/api/notices/add", {
// // // // //         method: "POST",
// // // // //         headers: { "Content-Type": "application/json" },
// // // // //         body: JSON.stringify({ title, description }),
// // // // //       });

// // // // //       const data = await response.json();
// // // // //       setMessage(data.message);
// // // // //       setTitle(""); // Reset form fields
// // // // //       setDescription("");
// // // // //       fetchNotices(); // Refresh the list
// // // // //     } catch (error) {
// // // // //       console.error("Error adding notice:", error);
// // // // //       setMessage("Failed to add notice.");
// // // // //     }
// // // // //   };

// // // // //   // Handle deleting a notice
// // // // //   const handleDelete = async (id) => {
// // // // //     const confirmDelete = window.confirm("Are you sure you want to delete this notice?");
// // // // //     if (!confirmDelete) return;

// // // // //     try {
// // // // //       const response = await fetch(`http://localhost:5000/api/notices/${id}`, {
// // // // //         method: "DELETE",
// // // // //       });

// // // // //       if (response.ok) {
// // // // //         setMessage("Notice deleted successfully.");
// // // // //         fetchNotices(); // Refresh the list
// // // // //       } else {
// // // // //         throw new Error("Failed to delete notice.");
// // // // //       }
// // // // //     } catch (error) {
// // // // //       console.error("Error deleting notice:", error);
// // // // //       setMessage("Failed to delete notice.");
// // // // //     }
// // // // //   };

// // // // //   return (
// // // // //     <div className="max-w-5xl mx-auto p-6 bg-white rounded-lg shadow-lg">
// // // // //       <h2 className="text-4xl font-bold text-center mb-8 text-blue-700">Notice Management</h2>

// // // // //       <form onSubmit={handleAddNotice} className="mb-8">
// // // // //         <div className="mb-4">
// // // // //           <label className="block font-bold mb-2">Notice Title</label>
// // // // //           <input
// // // // //             type="text"
// // // // //             value={title}
// // // // //             onChange={(e) => setTitle(e.target.value)}
// // // // //             className="w-full border rounded p-2"
// // // // //             placeholder="Enter notice title"
// // // // //             required
// // // // //           />
// // // // //         </div>
// // // // //         <div className="mb-4">
// // // // //           <label className="block font-bold mb-2">Description</label>
// // // // //           <textarea
// // // // //             value={description}
// // // // //             onChange={(e) => setDescription(e.target.value)}
// // // // //             className="w-full border rounded p-2"
// // // // //             placeholder="Enter notice description"
// // // // //             required
// // // // //           ></textarea>
// // // // //         </div>
// // // // //         <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
// // // // //           Add Notice
// // // // //         </button>
// // // // //       </form>

// // // // //       {message && <p className="mt-4 text-center text-green-500">{message}</p>}

// // // // //       <h3 className="text-xl font-bold mt-8">All Notices</h3>
// // // // //       <div className="overflow-x-auto mt-4">
// // // // //         <table className="w-full table-auto border-collapse border border-gray-200">
// // // // //           <thead>
// // // // //             <tr className="bg-gray-100">
// // // // //               <th className="border border-gray-300 px-4 py-2">Title</th>
// // // // //               <th className="border border-gray-300 px-4 py-2">Description</th>
// // // // //               <th className="border border-gray-300 px-4 py-2">Actions</th>
// // // // //             </tr>
// // // // //           </thead>
// // // // //           <tbody>
// // // // //             {notices.map((notice) => (
// // // // //               <tr key={notice.id}>
// // // // //                 <td className="border border-gray-300 px-4 py-2">{notice.title}</td>
// // // // //                 <td className="border border-gray-300 px-4 py-2">{notice.description}</td>
// // // // //                 <td className="border border-gray-300 px-4 py-2 text-center">
// // // // //                   <button
// // // // //                     onClick={() => handleDelete(notice.id)}
// // // // //                     className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
// // // // //                   >
// // // // //                     Delete
// // // // //                   </button>
// // // // //                 </td>
// // // // //               </tr>
// // // // //             ))}
// // // // //           </tbody>
// // // // //         </table>
// // // // //       </div>
// // // // //     </div>
// // // // //   );
// // // // // };

// // // // // export default NoticesManagement;
// // // // import React, { useState, useEffect } from "react";

// // // // const NoticesManagement = () => {
// // // //   const [notices, setNotices] = useState([]); // Notices state
// // // //   const [title, setTitle] = useState(""); // Title input state
// // // //   const [pdf, setPdf] = useState(null); // PDF file input state
// // // //   const [message, setMessage] = useState(""); // Success/Error message

// // // //   // Fetch notices
// // // //   const fetchNotices = async () => {
// // // //     try {
// // // //       const response = await fetch("http://localhost:5000/api/notices/uploads");
// // // //       const data = await response.json();
// // // //       setNotices(data);
// // // //     } catch (error) {
// // // //       console.error("Error fetching notices:", error);
// // // //     }
// // // //   };

// // // //   useEffect(() => {
// // // //     fetchNotices(); // Fetch notices on component mount
// // // //   }, []);

// // // //   // Handle adding a new notice
// // // //   const handleAddNotice = async (e) => {
// // // //     e.preventDefault();

// // // //     if (!title || !pdf) {
// // // //       alert("Please fill out the title and select a PDF file.");
// // // //       return;
// // // //     }

// // // //     const formData = new FormData();
// // // //     formData.append("title", title);
// // // //     formData.append("pdf", pdf);

// // // //     try {
// // // //       const response = await fetch("http://localhost:5000/api/notices/add", {
// // // //         method: "POST",
// // // //         body: formData,
// // // //       });

// // // //       const data = await response.json();
// // // //       setMessage(data.message);
// // // //       setTitle("");
// // // //       setPdf(null);
// // // //       fetchNotices(); // Refresh notices
// // // //     } catch (error) {
// // // //       console.error("Error uploading notice:", error);
// // // //       setMessage("Failed to add notice.");
// // // //     }
// // // //   };

// // // //   // Handle deleting a notice
// // // //   const handleDelete = async (id) => {
// // // //     const confirmDelete = window.confirm("Are you sure you want to delete this notice?");
// // // //     if (!confirmDelete) return;

// // // //     try {
// // // //       const response = await fetch(`http://localhost:5000/api/notices/${id}`, {
// // // //         method: "DELETE",
// // // //       });

// // // //       if (response.ok) {
// // // //         setMessage("Notice deleted successfully.");
// // // //         fetchNotices();
// // // //       } else {
// // // //         throw new Error("Failed to delete notice.");
// // // //       }
// // // //     } catch (error) {
// // // //       console.error("Error deleting notice:", error);
// // // //       setMessage("Failed to delete notice.");
// // // //     }
// // // //   };

// // // //   return (
// // // //     <div className="max-w-5xl mx-auto p-6 bg-white rounded-lg shadow-lg">
// // // //       <h2 className="text-4xl font-bold text-center mb-8 text-blue-700">Notice Management</h2>

// // // //       <form onSubmit={handleAddNotice} className="mb-8">
// // // //         <div className="mb-4">
// // // //           <label className="block font-bold mb-2">Notice Title</label>
// // // //           <input
// // // //             type="text"
// // // //             value={title}
// // // //             onChange={(e) => setTitle(e.target.value)}
// // // //             className="w-full border rounded p-2"
// // // //             placeholder="Enter notice title"
// // // //             required
// // // //           />
// // // //         </div>
// // // //         <div className="mb-4">
// // // //           <label className="block font-bold mb-2">Upload PDF</label>
// // // //           <input
// // // //             type="file"
// // // //             accept="application/pdf"
// // // //             onChange={(e) => setPdf(e.target.files[0])}
// // // //             required
// // // //           />
// // // //         </div>
// // // //         <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
// // // //           Add Notice
// // // //         </button>
// // // //       </form>

// // // //       {message && <p className="mt-4 text-center text-green-500">{message}</p>}

// // // //       <h3 className="text-xl font-bold mt-8">All Notices</h3>
// // // //       <div className="overflow-x-auto mt-4">
// // // //         <table className="w-full table-auto border-collapse border border-gray-200">
// // // //           <thead>
// // // //             <tr className="bg-gray-100">
// // // //               <th className="border border-gray-300 px-4 py-2">Title</th>
// // // //               <th className="border border-gray-300 px-4 py-2">PDF</th>
// // // //               <th className="border border-gray-300 px-4 py-2">Actions</th>
// // // //             </tr>
// // // //           </thead>
// // // //           <tbody>
// // // //             {notices.map((notice) => (
// // // //               <tr key={notice.id}>
// // // //                 <td className="border border-gray-300 px-4 py-2">{notice.title}</td>
// // // //                 <td className="border border-gray-300 px-4 py-2 text-blue-500">
// // // //                   <a href={`http://localhost:5000${notice.pdf_path}`} target="_blank" rel="noopener noreferrer">
// // // //                     View PDF
// // // //                   </a>
// // // //                 </td>
// // // //                 <td className="border border-gray-300 px-4 py-2 text-center">
// // // //                   <button
// // // //                     onClick={() => handleDelete(notice.id)}
// // // //                     className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
// // // //                   >
// // // //                     Delete
// // // //                   </button>
// // // //                 </td>
// // // //               </tr>
// // // //             ))}
// // // //           </tbody>
// // // //         </table>
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // };

// // // // export default NoticesManagement;
// // // import React, { useState, useEffect } from "react";

// // // const NoticesManagement = () => {
// // //   const [notices, setNotices] = useState([]); // Notices state
// // //   const [title, setTitle] = useState(""); // Title input state
// // //   const [pdf, setPdf] = useState(null); // PDF file input state
// // //   const [message, setMessage] = useState(""); // Success/Error message

// // //   // Fetch notices
// // //   const fetchNotices = async () => {
// // //     try {
// // //       const response = await fetch("http://localhost:5000/api/notices");
// // //       const data = await response.json();
// // //       setNotices(data);
// // //     } catch (error) {
// // //       console.error("Error fetching notices:", error);
// // //     }
// // //   };

// // //   useEffect(() => {
// // //     fetchNotices(); // Fetch notices on component mount
// // //   }, []);

// // //   // Handle adding a new notice
// // //   const handleAddNotice = async (e) => {
// // //     e.preventDefault();

// // //     if (!title || !pdf) {
// // //       alert("Please fill out the title and select a PDF file.");
// // //       return;
// // //     }

// // //     const formData = new FormData();
// // //     formData.append("title", title);
// // //     formData.append("pdfFile", pdf);

// // //     try {
// // //       const response = await fetch("http://localhost:5000/api/notices/upload", {
// // //         method: "POST",
// // //         body: formData,
// // //       });

// // //       const data = await response.json();
// // //       setMessage(data.message);
// // //       setTitle("");
// // //       setPdf(null);
// // //       fetchNotices(); // Refresh notices
// // //     } catch (error) {
// // //       console.error("Error uploading notice:", error);
// // //       setMessage("Failed to add notice.");
// // //     }
// // //   };

// // //   // Handle deleting a notice
// // //   const handleDelete = async (id) => {
// // //     const confirmDelete = window.confirm("Are you sure you want to delete this notice?");
// // //     if (!confirmDelete) return;

// // //     try {
// // //       const response = await fetch(`http://localhost:5000/api/notices/${id}`, {
// // //         method: "DELETE",
// // //       });

// // //       if (response.ok) {
// // //         setMessage("Notice deleted successfully.");
// // //         fetchNotices();
// // //       } else {
// // //         throw new Error("Failed to delete notice.");
// // //       }
// // //     } catch (error) {
// // //       console.error("Error deleting notice:", error);
// // //       setMessage("Failed to delete notice.");
// // //     }
// // //   };

// // //   return (
// // //     <div className="max-w-5xl mx-auto p-6 bg-white rounded-lg shadow-lg">
// // //       <h2 className="text-4xl font-bold text-center mb-8 text-blue-700">Notice Management</h2>

// // //       <form onSubmit={handleAddNotice} className="mb-8">
// // //         <div className="mb-4">
// // //           <label className="block font-bold mb-2">Notice Title</label>
// // //           <input
// // //             type="text"
// // //             value={title}
// // //             onChange={(e) => setTitle(e.target.value)}
// // //             className="w-full border rounded p-2"
// // //             placeholder="Enter notice title"
// // //             required
// // //           />
// // //         </div>
// // //         <div className="mb-4">
// // //           <label className="block font-bold mb-2">Upload PDF</label>
// // //           <input
// // //             type="file"
// // //             accept="application/pdf"
// // //             onChange={(e) => setPdf(e.target.files[0])}
// // //             required
// // //           />
// // //         </div>
// // //         <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
// // //           Add Notice
// // //         </button>
// // //       </form>

// // //       {message && <p className="mt-4 text-center text-green-500">{message}</p>}

// // //       <h3 className="text-xl font-bold mt-8">All Notices</h3>
// // //       <div className="overflow-x-auto mt-4">
// // //         <table className="w-full table-auto border-collapse border border-gray-200">
// // //           <thead>
// // //             <tr className="bg-gray-100">
// // //               <th className="border border-gray-300 px-4 py-2">Title</th>
// // //               <th className="border border-gray-300 px-4 py-2">PDF</th>
// // //               <th className="border border-gray-300 px-4 py-2">Actions</th>
// // //             </tr>
// // //           </thead>
// // //           <tbody>
// // //             {notices.map((notice) => (
// // //               <tr key={notice.id}>
// // //                 <td className="border border-gray-300 px-4 py-2">{notice.title}</td>
// // //                 <td className="border border-gray-300 px-4 py-2 text-blue-500">
// // //                   <a href={`http://localhost:5000${notice.pdfPath}`} target="_blank" rel="noopener noreferrer">
// // //                     View PDF
// // //                   </a>
// // //                 </td>
// // //                 <td className="border border-gray-300 px-4 py-2 text-center">
// // //                   <button
// // //                     onClick={() => handleDelete(notice.id)}
// // //                     className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
// // //                   >
// // //                     Delete
// // //                   </button>
// // //                 </td>
// // //               </tr>
// // //             ))}
// // //           </tbody>
// // //         </table>
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default NoticesManagement;
// // import React, { useState, useEffect } from "react";

// // const NoticesManagement = () => {
// //   const [notices, setNotices] = useState([]);
// //   const [title, setTitle] = useState("");
// //   const [pdf, setPdf] = useState(null);
// //   const [message, setMessage] = useState("");
// //   const [loading, setLoading] = useState(false);

// //   const fetchNotices = async () => {
// //     setLoading(true);
// //     try {
// //       const response = await fetch("http://localhost:5000/api/notices");
// //       if (!response.ok) throw new Error("Failed to fetch notices");
// //       const data = await response.json();
// //       setNotices(data);
// //     } catch (error) {
// //       console.error("Error fetching notices:", error);
// //       setMessage(`Error: ${error.message}`);
// //     } finally {
// //       setLoading(false);
// //     }
// //   };

// //   useEffect(() => {
// //     fetchNotices();
// //   }, []);

// //   const handleAddNotice = async (e) => {
// //     e.preventDefault();
// //     if (!title || !pdf) {
// //       alert("Please provide a title and select a PDF.");
// //       return;
// //     }

// //     const formData = new FormData();
// //     formData.append("title", title);
// //     formData.append("pdfFile", pdf);

// //     try {
// //       const response = await fetch("http://localhost:5000/api/notices/uploads", {
// //         method: "POST",
// //         body: formData,
// //       });
// //       const data = await response.json();
// //       setMessage(data.message);
// //       setTitle("");
// //       setPdf(null);
// //       fetchNotices();
// //     } catch (error) {
// //       console.error("Error uploading notice:", error);
// //       setMessage("Failed to add notice.");
// //     }
// //   };

// //   const handleDelete = async (id) => {
// //     if (!window.confirm("Are you sure you want to delete this notice?")) return;

// //     try {
// //       const response = await fetch(`http://localhost:5000/api/notices/${id}`, {
// //         method: "DELETE",
// //       });

// //       if (response.ok) {
// //         setMessage("Notice deleted successfully.");
// //         fetchNotices();
// //       } else {
// //         throw new Error("Failed to delete notice.");
// //       }
// //     } catch (error) {
// //       console.error("Error deleting notice:", error);
// //       setMessage("Failed to delete notice.");
// //     }
// //   };

// //   return (
// //     <div className="max-w-5xl mx-auto p-6 bg-white rounded-lg shadow-lg">
// //       <h2 className="text-4xl font-bold text-center mb-8 text-blue-700">Notice Management</h2>
// //       <form onSubmit={handleAddNotice} className="mb-8">
// //         <div className="mb-4">
// //           <label className="block font-bold mb-2">Notice Title</label>
// //           <input
// //             type="text"
// //             value={title}
// //             onChange={(e) => setTitle(e.target.value)}
// //             className="w-full border rounded p-2"
// //             placeholder="Enter notice title"
// //             required
// //           />
// //         </div>
// //         <div className="mb-4">
// //           <label className="block font-bold mb-2">Upload PDF</label>
// //           <input
// //             type="file"
// //             accept="application/pdf"
// //             onChange={(e) => setPdf(e.target.files[0])}
// //             required
// //           />
// //         </div>
// //         <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
// //           Add Notice
// //         </button>
// //       </form>

// //       {message && <p className="mt-4 text-center text-green-500">{message}</p>}

// //       <h3 className="text-xl font-bold mt-8">All Notices</h3>
// //       <div className="mt-4">
// //         {loading ? (
// //           <p className="text-center text-gray-500">Loading notices...</p>
// //         ) : notices.length > 0 ? (
// //           notices.map((notice) => (
// //             <div key={notice.id} className="mb-4 p-4 bg-gray-100 rounded-lg shadow-sm">
// //               <h4 className="font-semibold">{notice.title}</h4>
// //               <a
// //                 href={`http://localhost:5000${notice.pdfPath}`}
// //                 target="_blank"
// //                 rel="noopener noreferrer"
// //                 className="text-blue-600 underline"
// //               >
// //                 View PDF
// //               </a>
// //               <button
// //                 onClick={() => handleDelete(notice.id)}
// //                 className="ml-4 bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
// //               >
// //                 Delete
// //               </button>
// //             </div>
// //           ))
// //         ) : (
// //           <p className="text-center text-gray-500">No notices available.</p>
// //         )}
// //       </div>
// //     </div>
// //   );
// // };

// // export default NoticesManagement;
// import React, { useState, useEffect } from "react";

// const NoticesManagement = () => {
//   const [notices, setNotices] = useState([]);
//   const [title, setTitle] = useState("");
//   const [pdf, setPdf] = useState(null);
//   const [message, setMessage] = useState("");

//   const fetchNotices = async () => {
//     try {
//       const response = await fetch("http://localhost:5000/api/notices");
//       if (!response.ok) throw new Error("Failed to fetch notices");
//       const data = await response.json();
//       setNotices(data);
//     } catch (error) {
//       console.error("Error fetching notices:", error);
//       setMessage("Error fetching notices");
//     }
//   };

//   useEffect(() => {
//     fetchNotices();
//   }, []);

//   const handleAddNotice = async (e) => {
//     e.preventDefault();

//     if (!title.trim() || !pdf) {
//       alert("Please fill out the title and select a PDF file.");
//       return;
//     }

//     const formData = new FormData();
//     formData.append("title", title);
//     formData.append("pdfFile", pdf);

//     try {
//       const response = await fetch("http://localhost:5000/api/notices/uploads", {
//         method: "POST",
//         body: formData,
//       });

//       const data = await response.json();
//       setMessage(data.message);
//       setTitle("");
//       setPdf(null);
//       fetchNotices();
//     } catch (error) {
//       console.error("Error uploading notice:", error);
//       setMessage("Failed to upload notice.");
//     }
//   };

//   const handleDelete = async (id) => {
//     if (!window.confirm("Are you sure you want to delete this notice?")) return;

//     try {
//       const response = await fetch(`http://localhost:5000/api/notices/${id}`, {
//         method: "DELETE",
//       });

//       if (response.ok) {
//         setMessage("Notice deleted successfully.");
//         fetchNotices();
//       } else {
//         throw new Error("Failed to delete notice.");
//       }
//     } catch (error) {
//       console.error("Error deleting notice:", error);
//       setMessage("Failed to delete notice.");
//     }
//   };

//   return (
//     <div className="max-w-5xl mx-auto p-6 bg-white rounded-lg shadow-lg">
//       <h2 className="text-4xl font-bold text-center mb-8 text-blue-700">Notice Management</h2>
//       <form onSubmit={handleAddNotice} className="mb-8">
//         <div className="mb-4">
//           <label className="block font-bold mb-2">Notice Title</label>
//           <input
//             type="text"
//             value={title}
//             onChange={(e) => setTitle(e.target.value)}
//             className="w-full border rounded p-2"
//             placeholder="Enter notice title"
//             required
//           />
//         </div>
//         <div className="mb-4">
//           <label className="block font-bold mb-2">Upload PDF</label>
//           <input
//             type="file"
//             accept="application/pdf"
//             onChange={(e) => setPdf(e.target.files[0])}
//             required
//           />
//         </div>
//         <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
//           Add Notice
//         </button>
//       </form>

//       {message && <p className="mt-4 text-center text-green-500">{message}</p>}

//       <h3 className="text-xl font-bold mt-8">All Notices</h3>
//       <div className="overflow-x-auto mt-4">
//         {notices.map((notice) => (
//           <div key={notice.id} className="mb-4 p-4 bg-gray-100 rounded-lg shadow-sm">
//             <h4 className="font-semibold">{notice.title}</h4>
//             <a href={`http://localhost:5000${notice.pdfPath}`} target="_blank" rel="noopener noreferrer">
//               View PDF
//             </a>
//             <button
//               onClick={() => handleDelete(notice.id)}
//               className="ml-4 bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
//             >
//               Delete
//             </button>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default NoticesManagement;
import React, { useState, useEffect } from "react";

const NoticesManagement = () => {
  const [notices, setNotices] = useState([]);
  const [title, setTitle] = useState("");
  const [pdf, setPdf] = useState(null);
  const [message, setMessage] = useState("");

  const fetchNotices = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/notices");
      if (!response.ok) throw new Error("Failed to fetch notices");
      const data = await response.json();
      setNotices(data);
    } catch (error) {
      console.error("Error fetching notices:", error);
      setMessage("Error fetching notices");
    }
  };

  useEffect(() => {
    fetchNotices();
  }, []);

  const handleAddNotice = async (e) => {
    e.preventDefault();

    if (!title.trim() || !pdf) {
      alert("Please fill out the title and select a PDF file.");
      return;
    }

    const formData = new FormData();
    formData.append("title", title);
    formData.append("pdfFile", pdf);

    try {
      const response = await fetch("http://localhost:5000/api/notices/upload", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();
      setMessage(data.message);
      setTitle("");
      setPdf(null);
      fetchNotices();
    } catch (error) {
      console.error("Error uploading notice:", error);
      setMessage("Failed to upload notice.");
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this notice?")) return;

    try {
      const response = await fetch(`http://localhost:5000/api/notices/${id}`, {
        method: "DELETE",
      });

      if (response.ok) {
        setMessage("Notice deleted successfully.");
        fetchNotices();
      } else {
        throw new Error("Failed to delete notice.");
      }
    } catch (error) {
      console.error("Error deleting notice:", error);
      setMessage("Failed to delete notice.");
    }
  };

  return (
    <div className="max-w-5xl mx-auto p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-4xl font-bold text-center mb-8 text-blue-700">Notice Management</h2>
      <form onSubmit={handleAddNotice} className="mb-8">
        <div className="mb-4">
          <label className="block font-bold mb-2">Notice Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full border rounded p-2"
            placeholder="Enter notice title"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block font-bold mb-2">Upload PDF</label>
          <input
            type="file"
            accept="application/pdf"
            onChange={(e) => setPdf(e.target.files[0])}
            required
          />
        </div>
        <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
          Add Notice
        </button>
      </form>

      {message && <p className="mt-4 text-center text-green-500">{message}</p>}

      <h3 className="text-xl font-bold mt-8">All Notices</h3>
      <div className="overflow-x-auto mt-4">
        <table className="w-full border-collapse border border-gray-200">
          <thead>
            <tr className="bg-gray-100">
              <th className="border border-gray-300 px-4 py-2">Title</th>
              <th className="border border-gray-300 px-4 py-2">PDF</th>
              <th className="border border-gray-300 px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {notices.map((notice) => (
              <tr key={notice.id}>
                <td className="border border-gray-300 px-4 py-2">{notice.title}</td>
                <td className="border border-gray-300 px-4 py-2">
                  <a href={`http://localhost:5000${notice.pdfPath}`} target="_blank" rel="noopener noreferrer">
                    View PDF
                  </a>
                </td>
                <td className="border border-gray-300 px-4 py-2 text-center">
                  <button
                    onClick={() => handleDelete(notice.id)}
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

export default NoticesManagement;
