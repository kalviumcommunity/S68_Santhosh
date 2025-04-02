import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // Check if user is logged in on app load
  useEffect(() => {
    axios.get("http://localhost:8080/auth/protected", { withCredentials: true })
      .then((res) => setUser(res.data.message))
      .catch(() => setUser(null));
  }, []);

  const login = async (username, password) => {
    try {
      await axios.post("http://localhost:8080/auth/login", { username, password }, { withCredentials: true });
      setUser(username);
    } catch (error) {
      console.error("Login failed:", error.response?.data?.message);
    }
  };

  const logout = async () => {
    try {
      await axios.post("http://localhost:8080/auth/logout", {}, { withCredentials: true });
      setUser(null);
    } catch (error) {
      console.error("Logout failed:", error.response?.data?.message);
    }
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
