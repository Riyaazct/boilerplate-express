let express = require("express");
let app = express();

app.get("/", (req, res) => {
  res.send(console.log("Hello World"));
});

module.exports = app;
