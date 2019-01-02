// const GoogleStrategy = require("passport-google-oauth20").Strategy;
const passport = require("passport"),
  LocalStrategy = require("passport-local").Strategy;
const keys = require("../config/keys");
const bcrypt = require("bcrypt");

passport.serializeUser((userId, done) => {
  done(null, userId);
});

passport.deserializeUser((userId, done) => {
  done(null, userId);
});

passport.use(
  new LocalStrategy(function(username, password, done) {
    const db = require("../db");
    db.query(
      "SELECT * FROM user where username = ? OR email = ?",
      [username, username],
      (err, results, fields) => {
        if (err) {
          return done(err);
        }
        if (results.length === 0) {
          return done(null, false);
        }
        const hash = results[0].password.toString();
        bcrypt.compare(password, hash, (err, response) => {
          if (response === true) {
            return done(null, {
              user_id: results[0].user_id,
              username: results[0].username,
              email: results[0].email,
              first_name: results[0].first_name,
              last_name: results[0].last_name
            });
          } else {
            return done(null, false);
          }
        });
      }
    );
  })
);
