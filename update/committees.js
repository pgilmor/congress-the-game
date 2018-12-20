var _ = require("lodash");
var mysql = require("mysql");
var db = require("./db");

var url =
  "https://theunitedstates.io/congress-legislators/committees-current.json";
var values = [];
fetch(url)
  .then(response => {
    return response.json();
  })
  .then(data => {
    //Work with data here
    for (var x in data) {
      var committee_id = data[x].thomas_id;
      var name = data[x].name;
      var type = data[x].type;
      var website = data[x].url;
      var minority_url = data[x].minority_url;
      var jurisdiction = data[x].jurisdiction;
      var comm = [];
      comm.push(committee_id, name, type, website, minority_url, jurisdiction);

      for (var i in data[x].subcommittees) {
        var subcommittee = data[x].subcommittees[i];
        var subcommittee_id = committee_id + subcommittee.thomas_id;
        var sub_name = subcommittee.name;
        var sub_type = type;
        var sub = [];
        sub.push(subcommittee_id, sub_name, sub_type);
        values.push(sub);
      }
      values.push(comm);
    }
    var sql =
      "INSERT INTO committees (committee_id, name, url, minority_url, jurisdiction) VALUES ? ON DUPLICATE KEY UPDATE name=VALUES(name), url=VALUES(url), minority_url=VALUES(minority_url), jurisdiction=VALUES(jusisdiction), type=VALUES(type)";
    db.query(sql, values, function(err, result) {
      if (err) throw err;
      console.log("Number of records inserted: " + result.affectedRows);
    });
  })
  .catch(err => {
    //Do something with error here
  });
