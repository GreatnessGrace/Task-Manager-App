const express = require('express');
const dotenv = require('dotenv');
const { connectDB } = require('./db');
dotenv.config();  

const app = express();
const port = process.env.PORT ;

connectDB();

app.get('/', (req, res) => {
  res.send('Hello from Task Manager App!');
});

app.listen(port, () => {
  console.log(`Task Manager Server is running on http://localhost:${port}`);
});
