// // import React, { useState } from 'react';
// // import { useNavigate } from 'react-router-dom';

// // const LoginForm = ({ setIsAuthenticated }) => {
// //   const [email, setEmail] = useState('');
// //   const [password, setPassword] = useState('');
// //   const [error, setError] = useState('');
// //   const navigate = useNavigate();

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();

// //     try {
// //       const response = await fetch('http://localhost:5000/api/admin/login', {
// //         method: 'POST',
// //         headers: { 'Content-Type': 'application/json' },
// //         body: JSON.stringify({ email, password }),
// //       });

// //       const data = await response.json();

// //       if (data.success) {
// //         localStorage.setItem('token', data.token); // Store JWT token in localStorage
// //         setIsAuthenticated(true); // Set authentication to true
// //         navigate('/admin/dashboard'); // Redirect to Admin Dashboard
// //       } else {
// //         setError(data.message); // Show error message
// //       }
// //     } catch (error) {
// //       console.error('Error during login:', error);
// //       setError('An error occurred. Please try again.');
// //     }
// //   };

// //   return (
// //     <div className="container mx-auto py-10 px-6">
// //       <h2 className="text-3xl font-bold text-center mb-6">Admin Login</h2>
// //       <form onSubmit={handleSubmit} className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-lg">
// //         <div className="mb-4">
// //           <label className="block text-sm font-bold mb-2">Email</label>
// //           <input
// //             type="email"
// //             value={email}
// //             onChange={(e) => setEmail(e.target.value)}
// //             className="w-full border-gray-300 rounded-md p-2"
// //             placeholder="Enter your email"
// //             required
// //           />
// //         </div>
// //         <div className="mb-4">
// //           <label className="block text-sm font-bold mb-2">Password</label>
// //           <input
// //             type="password"
// //             value={password}
// //             onChange={(e) => setPassword(e.target.value)}
// //             className="w-full border-gray-300 rounded-md p-2"
// //             placeholder="Enter your password"
// //             required
// //           />
// //         </div>
// //         {error && <p className="text-red-600 text-center mb-4">{error}</p>}
// //         <button
// //           type="submit"
// //           className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition duration-300"
// //         >
// //           Login
// //         </button>
// //       </form>
// //     </div>
// //   );
// // };

// // export default LoginForm;
// import React, { useState } from 'react';

// const LoginForm = ({ setIsAuthenticated }) => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const response = await fetch('http://localhost:5000/api/admin/login', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ email, password }),
//       });

//       const data = await response.json();

//       if (data.success) {
//         localStorage.setItem('token', data.token); // Store JWT token
//         setIsAuthenticated(true); // Set authentication to true
//         alert('Login successful!');
//         // Open Admin Dashboard in new tab
//         window.open('/admin/dashboard', '_blank'); // Opens in a new tab
//       } else {
//         setError(data.message); // Show error message
//       }
//     } catch (error) {
//       console.error('Error during login:', error);
//       setError('An error occurred. Please try again.');
//     }
//   };

//   return (
//     <div className="container mx-auto py-10 px-6">
//       <h2 className="text-3xl font-bold text-center mb-6">Admin Login</h2>
//       <form onSubmit={handleSubmit} className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-lg">
//         <div className="mb-4">
//           <label className="block text-sm font-bold mb-2">Email</label>
//           <input
//             type="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             className="w-full border-gray-300 rounded-md p-2"
//             placeholder="Enter your email"
//             required
//           />
//         </div>
//         <div className="mb-4">
//           <label className="block text-sm font-bold mb-2">Password</label>
//           <input
//             type="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             className="w-full border-gray-300 rounded-md p-2"
//             placeholder="Enter your password"
//             required
//           />
//         </div>
//         {error && <p className="text-red-600 text-center mb-4">{error}</p>}
//         <button
//           type="submit"
//           className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition duration-300"
//         >
//           Login
//         </button>
//       </form>
//     </div>
//   );
// };

// export default LoginForm;
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginForm = ({ onLoginSuccess }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    // Clear any errors when the form loads
    setError('');
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:5000/api/admin/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (data.success) {
        localStorage.setItem('token', data.token); // Store JWT token
        alert('Login successful!');
        onLoginSuccess(); // Trigger redirect
        navigate('/admin/dashboard'); // Redirect to admin dashboard
      } else {
        setError(data.message || 'Invalid email or password. Please try again.');
      }
    } catch (error) {
      console.error('Error during login:', error);
      setError('An error occurred. Please try again.');
    }
  };

  return (
    <div className="container mx-auto py-10 px-6">
      <h2 className="text-3xl text-black font-bold text-center mb-6">Admin Login</h2>
      <form onSubmit={handleSubmit} className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-lg">
        <div className="mb-4">
          <label className="block text-sm font-bold mb-2">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border-gray-300 rounded-md p-2 text-black"
            placeholder="Enter your email"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-bold mb-2">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full border-gray-300 rounded-md p-2 text-black"
            placeholder="Enter your password"
            required
          />
        </div>
        {error && <p className="text-red-600 text-center mb-4">{error}</p>}
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition duration-300"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
