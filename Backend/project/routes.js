const express = require("express");
const Joi = require("joi"); 
const Item = require("../Items");
const User = require("../User"); // Import User model

const router = express.Router();

// Schema validation
const itemSchema = Joi.object({
  name: Joi.string().min(3).max(50).required(),
  description: Joi.string().min(5).max(200).optional(),
  created_by: Joi.string().required(), // Ensure 'created_by' is provided
});

// Fetch items with optional user filtering
router.get("/items", async (req, res) => {
  try {
    const { userId } = req.query;
    const query = userId ? { created_by: userId } : {}; // Filter by user if provided
    const items = await Item.find(query);
    res.status(200).json(items);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Fetch all users for dropdown
router.get("/users", async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Add new item
router.post("/items", async (req, res) => {
  try {
    const { error } = itemSchema.validate(req.body);
    if (error) {
      return res.status(400).json({ error: error.details[0].message });
    }

    const { name, description, created_by } = req.body;
    const newItem = new Item({ name, description, created_by });
    await newItem.save();
    res.status(201).json(newItem);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Update item
router.put("/items/:id", async (req, res) => {
  try {
    const { error } = itemSchema.validate(req.body);
    if (error) {
      return res.status(400).json({ error: error.details[0].message });
    }

    const updatedItem = await Item.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.status(200).json(updatedItem);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Delete item
router.delete("/items/:id", async (req, res) => {
  try {
    await Item.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "Item deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
