const express = require("express");

const app = express();
// function
const port = 9000;

app.get("/", (req, res) => {
  res.send("Time for lunch!");
});
// responding to a get of a user visiting root web server

app.listen(port, () => console.log(`Listening on port: ${port}!`));
// make another function ,back ticks
