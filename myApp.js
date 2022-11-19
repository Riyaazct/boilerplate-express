let express = require("express");
let app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/views/index.html");
});

// app.get("/", (req, res) => {
//   console.log("Hello World")
//   res.send("Hello Express");
// })

module.exports = app;
