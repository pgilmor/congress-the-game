const { validationResult } = require("express-validator/check");
const bcrypt = require("bcrypt");
const saltRounds = 10;
const passport = require("passport");

const v = require("../middlewares/validation");

module.exports = app => {
  app.post("/user/register", v.registerValidation, (req, res) => {
    const errors = validationResult(req).formatWith(v.registerErrors);

    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() });
    }

    const { username, email, password } = req.body;

    const db = require("../db");

    bcrypt.hash(password, saltRounds, (err, hash) => {
      db.query(
        "INSERT INTO user (username, email, password) VALUES (?,?,?)",
        [username, email, hash],
        (error, results, fields) => {
          if (error) throw error;
          var userId = results.insertId;
          req.login(userId, function(err) {
            res.redirect("/profile");
          });
        }
      );
    });
  });

  app.post(
    "/user/login",
    passport.authenticate("local", { failureRedirect: "/login" }),
    function(req, res) {
      res.redirect("/profile");
    }
  );

  app.get("/api/current_user", (req, res) => {
    res.json(req.user);
    return;
  });

  app.get("/api/logout", function(req, res) {
    req.logout();
    res.redirect("/");
  });
};
