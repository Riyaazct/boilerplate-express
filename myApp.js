require("dotenv").config();
let express = require("express");
let app = express();
// Exercise 11
let bodyParser = require("body-parser");
// Exercise 11
app.use(bodyParser.urlencoded({ extended: false }));

app.use((req, res, next) => {
  console.log(req.method + " " + req.path + " - " + req.ip);
  next();
});

app.use(express.json());

app.use("/public", express.static(__dirname + "/public"));

app.get("/", (req, res) =>
  res.sendFile(__dirname + "/views/index.html")
);

app.get("/json", (req, res) => {
  let mySecret = process.env.MESSAGE_STYLE;
  console.log(mySecret);
  if (mySecret === "uppercase") {
    res.json({ message: "Hello json".toUpperCase() });
  } else {
    res.json({ message: "Hello json" });
  }
});

// Exercise 8
app.get(
  "/now",
  (req, res, next) => {
    req.time = new Date();
    next();
  },
  (req, res) => {
    res.json({
      time: req.time.toString(),
    });
  }
);

// Exercise 9

app.get("/:word/echo", (req, res) => {
  let word = req.params.word;
  res.json({
    echo: word,
  });
});

//exercise 10
app.get("/name", (req, res) => {
  let first = req.query.first;
  let last = req.query.last;
  res.json({
    name: first + " " + last,
  });
});

// app.get("/", (req, res) => {
//   console.log("Hello World")
//   res.send("Hello Express");
// })

module.exports = app;
