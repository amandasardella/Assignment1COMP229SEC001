/*
  File: express.ejs
  Student Name: Amanda Nunes Sardella
  Student ID: #301288044
  COMP229 - SEC001 - SUMMER 2023 - CENNTENIAL COLLEGE
  June 9th, 2023
*/

var express = require("express"),
  morgan = require("morgan"),
  compress = require("compression"),
  bodyParser = require("body-parser"),
  methodOverride = require("method-override");

module.exports = function () {
  var app = express();
  if (process.env.NODE_ENV === "development") {
    app.use(morgan("dev"));
  } else if (process.env.NODE_ENV === "production") {
    app.use(compress());
  }

  app.use(
    bodyParser.urlencoded({
      extended: true,
    })
  );
  app.use(bodyParser.json());
  app.use(methodOverride());
  app.set("views", "./app/views");
  app.set("view engine", "ejs");
  app.use("/", require("../app/routes/index.server.routes.js"));
  //require('../app/routes/index.server.routes.js')(app);
  app.use(express.static("./public"));
  app.use(express.static("./node_modules"));

  //needs to be after the route
  app.use(express.static("./public"));
  return app;
};
