const express = require("express");
const mysql = require("mysql");
const bodyParser = require("body-parser");
const expressValidator = require("express-validator");
const session = require("express-session");
const cookieParser = require("cookie-parser");
const passport = require("passport"),
  LocalStrategy = require("passport-local").Strategy;
const MySQLStore = require("express-mysql-session")(session);
const db = require("./db");
const keys = require("./config/keys");
require("./services/passport");

const sessionStore = new MySQLStore({} /* session store options */, db);

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(expressValidator());
//app.set("trust proxy", 1); // trust first proxy
app.use(
  session({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    secret: [keys.cookieKey],
    resave: false,
    name: "SessionID",
    store: sessionStore,
    saveUninitialized: false
  })
);
app.use(passport.initialize());
app.use(passport.session());

require("./routes/userRoutes")(app);
require("./routes/leagueRoutes")(app);
require("./routes/updateRoutes")(app);

if (process.env.NODE_ENV === "production") {
  // Express will serve up production assets
  // like our main.js file, or main.css file!
  app.use(express.static("client/build"));

  // Express will serve up the index.html file
  // if it doesn't recognize the route
  const path = require("path");
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

const PORT = process.env.PORT || 5000;
app.listen(PORT);
