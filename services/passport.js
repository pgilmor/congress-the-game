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
      "SELECT user_id, password FROM user where username = ?",
      [username],
      (err, results, fields) => {
        if (err) {
          return done(err);
        }
        if (results.length === 0) {
          return done(null, false);
        }
        const hash = results[0].password.toString();
        console.log(hash);
        bcrypt.compare(password, hash, (err, response) => {
          if (response === true) {
            return done(null, { user_id: results[0].user_id });
          } else {
            return done(null, false);
          }
        });
      }
    );
  })
);

// passport.use(
//   new GoogleStrategy(
//     {
//       clientID: keys.googleClientID,
//       clientSecret: keys.googleClientSecret,
//       callbackURL: "/auth/google/callback",
//       proxy: true
//     },
//     async (accessToken, refreshToken, profile, done) => {
//       const existingUser = await User.findOne({ googleId: profile.id });
//
//       if (existingUser) {
//         return done(null, existingUser);
//       }
//
//       const user = await new User({ googleId: profile.id }).save();
//       done(null, user);
//     }
//   )
// );
