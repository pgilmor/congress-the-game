const { check, validationResult } = require("express-validator/check");

module.exports = app => {
  app.post("/user/register", (req, res) => {
    const username = req.body.username;
    const email = req.body.email;
    const password = req.body.password;

    const db = require("../db");
    db.query(
      "INSERT INTO user (username, email, password) VALUES (?,?,?)",
      [username, email, password],
      function(error, results, fields) {
        if (error) throw error;
        res.redirect("/");
      }
    );
  });
};
