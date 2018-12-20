var _ = require("lodash");
var mysql = require("mysql");
var db = require("./db");
var currentWeekNumber = require("current-week-number");

console.log(currentWeekNumber("1-1-19"));
