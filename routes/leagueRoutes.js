const bcrypt = require("bcrypt");
const saltRounds = 10;
const v = require("../middlewares/validation");

module.exports = app => {
  app.post("/api/create_league", (req, res) => {
    const { league_name, password } = req.body;
    const commissioner_id = req.user.user_id;
    const db = require("../db");
    bcrypt.hash(password, saltRounds, (err, hash) => {
      db.query(
        "INSERT INTO league (league_name, password, commissioner_id) VALUES (?,?,?)",
        [username, hash, commissioner_id],
        (error, results, fields) => {
          if (error) throw error;
          res.redirect("/profile");
        }
      );
    });
  });

  // app.get("/api/current_league", (req, res) => {
  //     const db = require("../db");
  //     db.query("SELECT * FROM league WHERE league_id = "1")
  //   res.json(req.user);
  // });
};
