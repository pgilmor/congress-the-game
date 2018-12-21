var _ = require("lodash");
var mysql = require("mysql");
const fetch = require("node-fetch");
var db = require("../db");

var url =
  "https://theunitedstates.io/congress-legislators/legislators-current.json";
var values = [];
fetch(url)
  .then(response => {
    return response.json();
  })
  .then(data => {
    //console.log(data);
    //Work with data here
    for (var x in data) {
      var member_id = data[x].id.bioguide;
      var first_name = data[x].name.first;
      var last_name = data[x].name.last;
      var full_name = data[x].name.official_full;
      var birthday = data[x].bio.birthday;
      var gender = data[x].bio.gender;
      var cspan = data[x].id.cspan;
      var current_term = _.findLastIndex(data[x].terms, "type");
      var type = data[x].terms[current_term].type;
      var state = data[x].terms[current_term].state;
      var district = data[x].terms[current_term].district;
      var sen_class = data[x].terms[current_term].class;
      var state_rank = data[x].terms[current_term].state_rank;
      var website = data[x].terms[current_term].url;
      var phone = data[x].terms[current_term].phone;
      var start_date = data[x].terms[current_term].start;
      var end_date = data[x].terms[current_term].end;
      var party = data[x].terms[current_term].party;

      var member = [];
      member.push(
        member_id,
        first_name,
        last_name,
        full_name,
        birthday,
        gender,
        cspan,
        type,
        state,
        district,
        sen_class,
        state_rank,
        website,
        phone,
        start_date,
        end_date,
        party
      );
      values.push(member);
    }
    var sql =
      "INSERT INTO member (member_id, first_name, last_name, full_name, birthday, gender, cspan, type, state, district, class, state_rank, url, phone, start_date, end_date, party) VALUES ? ON DUPLICATE KEY UPDATE first_name=VALUES(first_name), last_name=VALUES(last_name), full_name=VALUES(full_name), birthday=VALUES(birthday), gender=VALUES(gender), cspan=VALUES(cspan), type=VALUES(type), state=VALUES(state), district=VALUES(district), class=VALUES(class), state_rank=VALUES(state_rank), url=VALUES(url), phone=VALUES(phone), start_date=VALUES(start_date), end_date=VALUES(end_date), party=VALUES(party)";
    db.query(sql, [values], function(err, result) {
      if (err) throw err;
      console.log(
        "Members: Number of records inserted: " + result.affectedRows
      );
    });
  })
  .catch(err => {
    //Do something with error here
    console.error(err);
  });
