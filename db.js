const mysql = require("mysql");
const keys = require("./config/keys");
const connection = mysql.createConnection(keys.dbUrl);

connection.connect();

connection.query("SELECT 1 + 1 AS solution", function(err, rows, fields) {
  if (err) throw err;

  console.log("The solution is: ", rows[0].solution);
});

module.exports = connection;
