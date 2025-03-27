import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // Check if user is already logged in
  useEffect(() => {
    axios.get("http://localhost:8080/auth/user", { withCredentials: true })
      .then(response => setUser(response.data.username))
      .catch(() => setUser(null));
  }, []);

  const login = async (username) => {
    await axios.post("http://localhost:8080/auth/login", { username }, { withCredentials: true });
    setUser(username);
  };

  const logout = async () => {
    await axios.post("http://localhost:8080/auth/logout", {}, { withCredentials: true });
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
