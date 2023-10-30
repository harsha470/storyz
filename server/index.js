require("dotenv").config();
const express = require("express");
const cors = require("cors");
const { connectToMongodb } = require("./src/db/mongoose");

const app = express();
const PORT = 3000 || process.env.PORT;

connectToMongodb()
  .then(() => {
    console.log("connection established");
  })
  .catch((error) => {
    console.log(error);
  });

app.use(cors());

// server setup
app.get("/", (req, res) => {
  res.send("Welcome to StoryZ server");
});
app.get("/ping", (req, res) => {
  res.send("pong");
});

app.use("/auth", require("./src/routes/auth"));

app.listen(PORT, () => {
  console.log(`StoryZ server is listening on port ${PORT}`);
});
