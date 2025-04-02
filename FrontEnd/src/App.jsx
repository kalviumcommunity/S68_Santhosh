import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { AuthProvider } from "../context/AuthContext";
import Home from "./pages/Home";
import Login from "./components/Login";
import ProtectedPage from "./pages/ProtectedPage";

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/protected" element={<ProtectedPage />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default App;
