const dotenv = require("dotenv").config();
const express = require("express");
const connectDb = require("./config/connectDb");
const mongoose = require("mongoose");
const taskRoutes = require("./routes/task-route");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(
  cors({
    origin: ["http://localhost:3000", "https://mern-task-app.onrender.com"], //  backend can be accessed from array of url from whcih the api is going to be hit
  })
);
// app.use(cors()); //  backend can be accessed from any url

app.use("/api/v1/task", taskRoutes);

// Routes
app.get("/", (req, res) => {
  res.send("Hey Boy");
});

// Database connect
mongoose
  .connect(process.env.NEW_MONGO_URI)
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((e) => {
    console.log(e);
  });
