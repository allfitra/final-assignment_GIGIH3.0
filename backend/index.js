const express = require("express");
require("dotenv").config();
const bodyParser = require("body-parser");
const errorHandle = require("./middlewares/error");
const mongoose = require("mongoose");
const videoRoutes = require("./routes/videos");
const commentRoutes = require("./routes/comments");

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.DATABASE_URL);
    console.log(`Database connected: ${conn.connection.host}`);
  } catch (error) {
    console.log(error);
  }
};

connectDB();

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.use("/api/videos", videoRoutes);
app.use("/api/comments", commentRoutes);

app.use(errorHandle);

app.listen(port, () => {
  console.log("Server started listening on ", port);
});
