const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const db = require("./db");
const commentRouter = require("./routes/comment-router");

const app = express();
const apiPort = process.env.PORT || 8080;

app.use(cors());
app.options("*", cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

db.on("error", console.error.bind(console, "MongoDB connection error:"));

app.use("/api", commentRouter);

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
app.listen(apiPort, () => console.log(`Server running on port ${apiPort}`));
