const express = require('express');
const dotenv = require('dotenv');
const { connectDB } = require('./db');
dotenv.config();  
const userRouter = require("./src/routers/userRoute");
const cors = require("cors");
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT ;

connectDB();
app.use(bodyParser.json()); 
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(
  cors({
    origin: [
      "http://localhost:4200"
    ],
  })
);

app.get('/', (req, res) => {
  res.send('Hello from Task Manager App!');
});

app.use("/users", userRouter);

app.listen(port, () => {
  console.log(`Task Manager Server is running on http://localhost:${port}`);
});
