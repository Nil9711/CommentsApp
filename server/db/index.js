const mongoose = require("mongoose");

mongoose
  .connect(process.env.MONGODB_URI || "mongodb://localhost/test", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .catch((e) => {
    console.error("Connection error", e.message);
  });

const db = mongoose.connection;

module.exports = db;
