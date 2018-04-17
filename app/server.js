// *****************************************************************************
// Server.js - This file is the initial starting point for the Node/Express server.
//
// ******************************************************************************
// *** Dependencies
// =============================================================
const express = require("express");
const bodyParser = require("body-parser");
const session = require("express-session");
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcryptjs');



// Sets up the Express App
// =============================================================
const app = express();

const PORT = process.env.PORT || 5000;
const SECRET = process.env.PASSPORTSECRET || "nalksfdhJKQ1oiy30491sfouts";

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
    var query = "Select M.id, M.email, M.firstName, M.lastName, M.joinDate, M.password, "
                +" M.lastLogin from Members as M WHERE M.email = ?;";
    db.Members.findAll({
                        where: {email:username}
                      })
        .then(function(results){
          if(results.length==0){
            return done(null, false, { message: 'Incorrect Login Information.' });
          } else {
            var match = bcrypt.compareSync(password, results[0].password);
            if(match){
              results[0].password = ""; //don't return the hashed password for safety reasons
              return done(null, results[0]);
            } else {
              return done(null, false, { message: 'incorrect login information.' });
            }
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
              "Select id, firstName, lastName, email, joinDate from Members where id = ?;"
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


//********************* ROUTES *******************************//
app.post('/api/addUser', (req, res) => {
      var email = req.body.email.toLowerCase();
      var hash = bcrypt.hashSync(req.body.password, 10);
      var newUser = { firstName: req.body.firstName, lastName: req.body.lastName,
                       email:email, password:hash, lastLogin:db.sequelize.fn('NOW') };
      // search for attributes
      db.Members.count({ where: {email: email} })
                .then(function(count){
                  if(count<=0){
                    db.Members.create(newUser)
                              .then(function(result) {
                                res.json(result);
                              }).catch(function(err){
                                console.log(err);
                                throw err;
                              });
                  } else {
                    res.status(409).send('Duplicate Email');
                  }
              });//close then
});

app.post('/api/login', function(req, res, next) {
  passport.authenticate('local', function(err, user, info) {
    if (err) { console.log(err); return next(err); }
    if (!user) { res.status(404).send(info.message); res.end();}
    else {
        // Passport exposes a login() function on req
        // (also aliased as logIn()) that can be used to establish a login session.
        req.logIn(user, function(err) {
          if (err) {console.log("ERROR**************",err); return next(err); }
          //set the last login date since login was successful
          db.Members.update(
                    {lastLogin: db.sequelize.fn('NOW')} ,
                    {where: {id: user.id}}
                  ).catch(function(err){console.log(err)});//no need to wait for the promise to return

          //get the tracks and track information for this user
          db.sequelize
              .query(
                      " Select MT.addedDate, MT.completedSteps, MT.markedComplete, T.id as trackid, "
                      +" T.trackname, T.description, T.introVideoLink, TS.link as stepLink, "
                      +" TS.description as stepdescription, TS.stepNumber from membertracks as MT  "
                      +" JOIN tracks as T ON MT.trackId = T.id JOIN tracksteps as TS ON T.id = TS.trackId "
                      + " WHERE MT.memberId = ? ORDER BY T.id, TS.stepNumber;"
                      , { replacements: [user.id], type: db.sequelize.QueryTypes.SELECT}
                    )
              .then(function(results){
                console.log(JSON.stringify(results));

              });



          console.log("user "+JSON.stringify(user));
          res.status(200).json(user);
        });
    }
  })(req, res, next);
});


app.post('/api/logout', function(req, res){
  req.session.destroy(function(err) {
    req.logout();
  });
});



// Syncing our sequelize models and then starting our Express app
// =============================================================
db.sequelize.sync({ force: true }).then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
    app.emit('serverStarted'); //used for testing so that the tests know the server has started before running
  });
});

module.exports = app; //for testing
