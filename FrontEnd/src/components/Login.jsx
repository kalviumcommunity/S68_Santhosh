import { useState } from "react";
import { useAuth } from "../context/authContext";

const Login = () => {
  const { user, login, logout } = useAuth();
  const [username, setUsername] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    if (username.trim()) {
      await login(username);
      setUsername("");
    }
  };

  return (
    <div className="login-container">
      {user ? (
        <>
          <h2>Welcome, {user}!</h2>
          <button onClick={logout}>Logout</button>
        </>
      ) : (
        <form onSubmit={handleLogin}>
          <input
            type="text"
            placeholder="Enter username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <button type="submit">Login</button>
        </form>
      )}
    </div>
  );
};

export default Login;
