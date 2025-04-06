// import React from 'react';
// import { Navigate } from 'react-router-dom';

// const ProtectedRoute = ({ children }) => {
//   const token = localStorage.getItem('token'); // Check for token in localStorage

//   if (!token) {
//     return <Navigate to="/admin" replace />; // Redirect to login if no token
//   }

//   return children; // Render the child route (dashboard) if authenticated
// };

// export default ProtectedRoute;
import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const isAuthenticated = localStorage.getItem("token");

  return isAuthenticated ? children : <Navigate to="/admin/login" />;
};

export default ProtectedRoute;

