const mysql = require('mysql');


const connection = mysql.createConnection({
  host: 'xinovacdb.mysql.database.azure.com',
  user: "xinovacadmin@xinovacdb",
  password: "BUmeetingroom436",
  database : "xinovac"
});

connection.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});

module.exports = connection;