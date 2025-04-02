const express = require("express");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs"); // If using password hashing
const cookieParser = require("cookie-parser");
const User = require("../models/User"); // Ensure this is your User model
require("dotenv").config();

const router = express.Router();
router.use(cookieParser());

// Generate JWT Token
const generateToken = (user) => {
  return jwt.sign({ id: user._id, username: user.username }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });
};

// 🟢 **Login Endpoint**
router.post("/login", async (req, res) => {
  try {
    const { username, password } = req.body;

    // Find the user in the database
    const user = await User.findOne({ username });
    if (!user) return res.status(400).json({ message: "Invalid credentials" });

    // If using hashed passwords, compare them
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ message: "Invalid credentials" });

    // Generate a token
    const token = generateToken(user);

    // Store token in HTTP-only cookie
    res.cookie("token", token, { httpOnly: true, secure: true, sameSite: "Strict" });

    res.status(200).json({ message: "Login successful", username: user.username });
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
});

// 🔴 **Logout Endpoint**
router.post("/logout", (req, res) => {
  res.clearCookie("token");
  res.status(200).json({ message: "Logged out successfully" });
});

// 🛡 **Middleware to Protect Routes**
const verifyToken = (req, res, next) => {
  const token = req.cookies.token;
  if (!token) return res.status(401).json({ message: "Unauthorized" });

  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) return res.status(403).json({ message: "Invalid Token" });

    req.user = decoded;
    next();
  });
};

// Example: Protect a Route
router.get("/protected", verifyToken, (req, res) => {
  res.status(200).json({ message: `Welcome, ${req.user.username}` });
});

module.exports = router;
