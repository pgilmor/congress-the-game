// const GoogleStrategy = require("passport-google-oauth20").Strategy;
const passport = require("passport"),
  LocalStrategy = require("passport-local").Strategy;
// GoogleStrategy = require("passport-google-oauth20").Strategy;
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
      "SELECT user_id, email, password FROM user where username = ? OR email = ?",
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
//     (accessToken, refreshToken, profile, done) => {
//       console.log("testing");
//       console.log(profile);
//       //See if user has google account
//       const db = require("../db");
//       db.query(
//         "SELECT google_id, user_id FROM user where email = ? ",
//         [profile.email],
//         (error, results, fields) => {
//           console.log(results[0]);
//           //   if (err) {
//           //     return done(err);
//           //   }
//           //   if (results.length === 0) {
//           //     //no user for that email. add to database.
//           //     return done(null, false);
//           //   }
//           //   const google_id = results[0].google_id;
//           //   return done(null, { user_id: results[0].user_id });
//         }
//       );
//       // if (existingUser) {
//       //   return done(null, existingUser);
//       // }
//
//       // const user =  new User({ googleId: profile.id }).save();
//       // done(null, user);
//     }
//   )
// );
