import React from "react";
import { useAuth } from "../context/AuthContext";
import { Link } from "react-router-dom";

const Home = () => {
  const { user, logout } = useAuth();

  return (
    <div>
      <h1>Welcome {user ? user : "Guest"}</h1>
      {user ? (
        <>
          <button onClick={logout}>Logout</button>
          <Link to="/protected">Go to Protected Page</Link>
        </>
      ) : (
        <Link to="/login">Login</Link>
      )}
    </div>
  );
};

export default Home;
