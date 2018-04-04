// *****************************************************************************
// Server.js - This file is the initial starting point for the Node/Express server.
//
// ******************************************************************************
// *** Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
var session = require("express-session");
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;


// Sets up the Express App
// =============================================================
var app = express();

var PORT = process.env.PORT || 3001;
var SECRET = process.env.PASSPORTSECRET || "nalksfdhJKQ1oiy30491sfouts";

// Requiring our models for syncing
var db = require("./models");


// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());

// Static directory
app.use(express.static("./app/public"));
app.use(session({ secret: SECRET}));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(passport.initialize());
app.use(passport.session());

passport.use(new LocalStrategy(
  function(username, password, done) {
    db.sequelize
        .query(
                "Select * from Members where email = ? and password = ?;"
                , { replacements: [username, password], type: db.sequelize.QueryTypes.SELECT}
              )
        .then(function(results){
          if(results.length==0){
            return done(null, false, { message: 'Incorrect Login Information.' });
          } else {
            return done(null, results[0]);
          } //close else
        });
  }
));

passport.serializeUser(function(user, done) {
  done(null, user.id);
});

passport.deserializeUser(function(id, done) {
  db.sequelize
      .query(
              "Select firstName, lastName, email, joinDate from Members where id = ?;"
              , { replacements: [id], type: db.sequelize.QueryTypes.SELECT}
            )
      .then(function(results){
        if(results.length==0){
          return done(new Error("User Not Found"), null);
        } else {
          return done(null, results[0]);
        } //close else
      });
});


// Syncing our sequelize models and then starting our Express app
// =============================================================
db.sequelize.sync({ force: true }).then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});
