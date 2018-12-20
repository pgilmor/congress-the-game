var _ = require("lodash");
var mysql = require("mysql");
var db = require("./db");

var url = "../data.json";
var values = [];
fetch(url)
  .then(response => {
    return response.json();
  })
  .then(data => {
    //Work with data here
    console.log(data.status);
  })
  .catch(err => {
    //Do something with error here
  });
