const express = require("express");
const db = require("../Database/database");

const router = express.Router();

router.get("/entities/:userId", (req, res) => {
  const userId = req.params.userId;
  db.query("SELECT * FROM entities WHERE created_by = ?", [userId], (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(results);
  });
});

module.exports = router;
