// import files and packages up here
const express = require("express");
const morgan = require("morgan");
const data = require("../../startnow-web101-san-diego-top-spots/data.json");
const path = require("path");

// create your express server below
var app = express();
app.use(morgan("dev"));
app.use(express.static(path.join(__dirname,"../../startnow-web101-san-diego-top-spots/")));

// add your routes and middleware below

app.get("/data", function (request, response) {
    response.send(data);
})


// finally export the express application
module.exports = app;
