// Dependencies
var mysql = require("mysql");
var express = require("express");
var exphbs = require("express-handlebars");

// Create an instance of the express app.
var app = express();

// Specify the port.
var port = 3000;

// Set Handlebars as the default templating engine.
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");
app.use(express.static('public'))

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "password",
  database: "ice_creamDB"
});
connection.connect(function(err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId);
});

// Routes
app.get("/icecream/:name", function(req, res) {
  connection.query("SELECT * FROM products WHERE flavor = ?", 
  [req.params.name], 
  function(err, result) {
    if (err) throw err;
    result = JSON.parse(JSON.stringify(result));
    console.log(result[0])
    res.render("icecream", result[0]);
  });
});

app.get("/icecreams", function(req, res) {
  connection.query("SELECT * FROM products", 
  function(err, result) {
    if (err) throw err;
    result = JSON.parse(JSON.stringify(result));
    res.render("icecreams", {"ics":result});
  });
});

// Initiate the listener.
app.listen(port);
