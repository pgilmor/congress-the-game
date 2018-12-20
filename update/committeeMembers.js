var _ = require("lodash");
var mysql = require("mysql");
var db = require("./db");

var url =
  "https://theunitedstates.io/congress-legislators/committee-membership-current.json";
var values = [];
fetch(url)
  .then(response => {
    return response.json();
  })
  .then(data => {
    //Work with data here
    for (var x in data) {
      for (var i in data[x]) {
        var member_id = data[x][i].bioguide;
        var committee_id = x;
        var party = data[x][i].party;
        var title = data[x][i].title;
        var rank = data[x][i].rank;
        var value = [];
        value.push(member_id, committee_id, party, title, rank);
        values.push(value);
      }
    }

    var sql =
      "INSERT INTO committee_member (member_id, committee_id, party, title, rank) VALUES ? ON DUPLICATE KEY UPDATE member_id=VALUES(member_id), title=VALUES(title)";
    db.query(sql, values, function(err, result) {
      if (err) throw err;
      console.log("Number of records inserted: " + result.affectedRows);
    });
  })
  .catch(err => {
    //Do something with error here
  });
