let express = require("express");
let app = express();
require("dotenv").config();

app.use(express.json());

app.use("/public", express.static(__dirname + "/public"));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/views/index.html");
});

app.get("/json", (req, res) => {
  let mySecret = process.env.MESSAGE_STYLE;
  if (mySecret === "uppercase") {
    res.json({ Message: "Hello json".toUpperCase() });
  } else {
    res.json({ Message: "Hello json" });
  }
});

// app.get("/", (req, res) => {
//   console.log("Hello World")
//   res.send("Hello Express");
// })

module.exports = app;
