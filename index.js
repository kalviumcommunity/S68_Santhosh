const express = require('express');
const connectDB  = require('./Database/db');
const router = require('./project/routes');


const app = express();
require('dotenv').config();

const port = process.env.PORT || 8080;
const url = process.env.db_url;

app.use(express.json()); 
app.use('/route', router); 

app.listen(port, async () => {
  try {
    await connectDB(url);
    console.log(`🚀 Server is running on port ${port}`);
  } catch (error) {
    console.error(error);
  }
});
