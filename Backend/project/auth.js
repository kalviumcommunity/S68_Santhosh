const express = require("express");
const router = express.Router();
const cookieParser = require("cookie-parser");

router.use(cookieParser());


router.post("/login", (req, res) => {
    const { username } = req.body;
    if (!username) {
        return res.status(400).json({ error: "Username is required" });
    }

    res.cookie("username", username, { httpOnly: true, secure: false }); 
    res.json({ message: "Login successful", username });
});


router.post("/logout", (req, res) => {
    res.clearCookie("username");
    res.json({ message: "Logged out successfully" });
});

router.get("/user", (req, res) => {
    const username = req.cookies.username;
    if (!username) {
        return res.status(401).json({ message: "Not logged in" });
    }
    res.json({ username });
});

module.exports = router;
