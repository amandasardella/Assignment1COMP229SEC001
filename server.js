/*
  File: server.js
  Student Name: Amanda Nunes Sardella
  Student ID: #301288044
  COMP229 - SEC001 - SUMMER 2023 - CENNTENIAL COLLEGE
  June 9th, 2023
*/
process.env.NODE_ENV = process.env.NODE_ENV || "development";
var express = require("./config/express");
var app = express();
app.listen(3000);
module.exports = app;

console.log("Server running at http://localhost:3000/");
