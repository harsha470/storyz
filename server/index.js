const express = require("express");

const app = express();
const PORT = 3000 || process.env.PORT

app.get("/", (req, res) => {
    res.send("Welcome to StoryZ server");
});
app.get("/ping", (req, res) => {
    res.send("pong");
});

app.listen(PORT, () => {
  console.log(`StoryZ server is listening on port ${PORT}`);
});
