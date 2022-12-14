const mongoose = require("mongoose");
const { MONGO_URI } = process.env;

mongoose.connect(MONGO_URI)

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
  console.log("Connected successfully");
});

module.exports = db;