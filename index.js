const express = require('express');
const { connectDB } = require('./Database/db');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 8080;
const url = process.env.db_url;


app.listen(port, async () => {
  try {
    await connectDB(url);
    console.log(`🚀 Server is running on port ${port}`);
  } catch (error) {
    console.error('❌ Server failed to start due to database connection error.');
    console.error(error);
  }
});


app.get('/', (req, res) => {
  const dbStatus = mongoose.connection.readyState === 1 ? '✅ Connected' : '❌ Not Connected';
  res.json({ database_status: dbStatus });
});

module.exports = app;
