const express = require("express");
const PORT = process.env.PORT || 5000
const app = express();

app.get("/", (req, res) => {
  res.send("Hello World!!!!!!");
});

app.listen(5000, () => {
  console.log("now running on port 5000");
});
