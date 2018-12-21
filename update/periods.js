function pad(d) {
  return d < 10 ? "0" + d.toString() : d.toString();
}

var _ = require("lodash");
var mysql = require("mysql");
var db = require("../db");
var fetch = require("node-fetch");
var currentWeekNumber = require("current-week-number");
var today = new Date();
var year = today.getFullYear();
var currentPeriod = "" + year + pad(currentWeekNumber());
var activePeriod = Number(currentPeriod) + 1;
if (currentWeekNumber() == 52) {
  var nextYear = year + 1;
  var activePeriod = "" + nextYear + "01";
}

var sql =
  "UPDATE period SET active = CASE WHEN (period_id < " +
  activePeriod +
  ") THEN 0 WHEN (period_id = " +
  activePeriod +
  ") THEN 1 ELSE 2 END ";
db.query(sql, function(err, result) {
  if (err) throw err;
  console.log("Number of records inserted: " + result.affectedRows);
});
