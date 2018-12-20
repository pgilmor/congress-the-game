const express = require("express");
const mysql = require("mysql");
const bodyParser = require("body-parser");
const expressValidator = require("express-validator");
const keys = require("./config/keys");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(expressValidator());

require("./routes/userRoutes")(app);

app.get("/", (req, res) => {
  res.send({ hi: "there" });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT);
