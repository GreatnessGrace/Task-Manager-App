const express = require('express');
const dotenv = require('dotenv');
dotenv.config();  

const app = express();
const port = process.env.PORT ;

app.get('/', (req, res) => {
  res.send('Hello from Task Manager App!');
});

app.listen(port, () => {
  console.log(`Task Manager Server is running on http://localhost:${port}`);
});
