const mongoose = require("mongoose");

const MONGODB_URI = process.env.MONGODB_URI;

async function connectToMongodb() {
  return mongoose.connect(MONGODB_URI);
}

module.exports = { connectToMongodb };
