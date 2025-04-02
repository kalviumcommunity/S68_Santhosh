import React from "react";
import { useAuth } from "../context/authContext";
import { Navigate } from "react-router-dom";

const ProtectedPage = () => {
  const { user } = useAuth();

  if (!user) return <Navigate to="/login" />;
  
  return (
    <div>
      <h2>Protected Content</h2>
      <p>You can only see this if you are logged in.</p>
    </div>
  );
};

export default ProtectedPage;
