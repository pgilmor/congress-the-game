var _ = require("lodash");
var mysql = require("mysql");
const fetch = require("node-fetch");
var db = require("../db");

var url =
  "https://theunitedstates.io/congress-legislators/legislators-social-media.json";
var values = [];
fetch(url)
  .then(response => {
    return response.json();
  })
  .then(data => {
    //Work with data here
    for (var x in data) {
      var member_id = data[x].id.bioguide;
      var twitter = data[x].social.twitter;
      var facebook = data[x].social.facebook;
      var youtube = data[x].social.youtube_id;
      var social = [];
      social.push(member_id, twitter, facebook, youtube);
      values.push(social);
    }
    var sql =
      "INSERT INTO member (member_id, twitter, facebook, youtube) VALUES ? ON DUPLICATE KEY UPDATE twitter=VALUES(twitter), facebook=VALUES(facebook), youtube=VALUES(youtube)";
    db.query(sql, [values], function(err, result) {
      if (err) throw err;
      console.log(
        "Socials: Number of records inserted: " + result.affectedRows
      );
    });
  })
  .catch(err => {
    //Do something with error here
  });
