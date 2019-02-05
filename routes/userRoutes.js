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

    const {
      usernameReg,
      emailReg,
      passwordReg,
      first_name,
      last_name
    } = req.body;

    const db = require("../db");

    bcrypt.hash(passwordReg, saltRounds, (err, hash) => {
      db.query(
        "INSERT INTO user (username, email, password, first_name, last_name) VALUES (?,?,?,?,?)",
        [usernameReg, emailReg, hash, first_name, last_name],
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

  app.post("/user/login", passport.authenticate("local", {}), function(
    req,
    res
  ) {
    res.send(req.user);
  });

  app.get("/api/current_user", (req, res) => {
    if (req.user === undefined) {
      res.send(null);
    } else {
      res.send(req.user);
    }
  });

  app.get("/api/logout", function(req, res) {
    req.logout();
    res.redirect("/");
  });
};
