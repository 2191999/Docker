const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("How are you doing");
});

//app.listen(8088, '0.0.0.0');

app.listen(8088, () => {
  console.log("Listening on port ");
});
