// Dependencies
var express = require("express");
var exphbs = require("express-handlebars");
var bodyParser = require("body-parser");

// Create an instance of the express app.
var app = express();

// Specify the port.
var port = 3000;

// Set Handlebars as the default templating engine.
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");
app.use(express.static('public'))
app.use(bodyParser.json());

var resultArray = [{color:"redorange"},{color:"bluegreen"}];
// Routes
app.post("/api/add/", function(req, res) {
  resultArray.push(req.body);
  res.json(resultArray[resultArray.length-1]);
});

app.get("/api/all/", function(req, res) {
  res.json(resultArray);
});

app.get("/", function(req, res) {
  res.render("list");
});

app.get("/item/:id/", function(req, res) {
  var ix = parseInt(req.params.id);
  console.log(ix)
  res.render("detail",resultArray[ix]);
});

// Initiate the listener.
app.listen(port);
