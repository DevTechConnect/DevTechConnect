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
const saltRounds = bcrypt.genSaltSync(10);



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
                +" MT.trackId, MT.completedSteps, count(TS.id) from Members as M "
                +" Left JOIN membertracks as MT ON M.id = MT.memberId "
                +" Left JOIN tracksteps as TS on MT.trackId = TS.trackId "
                +" WHERE M.email = ? GROUP BY TS.trackId;";
    db.sequelize
        .query(
                query
                , { replacements: [username], type: db.sequelize.QueryTypes.SELECT}
              )
        .then(function(results){
          if(results.length==0){
            console.log("NO RESULTS FOUND FOR EMAIL");
            return done(null, false, { message: 'Incorrect Login Information.' });
          } else {
            console.log("RESULTS",JSON.stringify(results[0]));
            bcrypt.compare(password, results[0].password).then(function(res) {
                if(res){
                  results[0].password = ""; //don't return the hashed password for safety reasons
                  return done(null, results[0]);
                } else {
                  return done(null, false, { message: 'Incorrect Login Information.' });
                }
            });
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
      var hash = bcrypt.hashSync(req.body.password, saltRounds);

      var newUser = { firstName: req.body.firstName, lastName: req.body.lastName, email:email, password:hash };
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
    if (!user) { res.status(404).send("Unable to login"); res.end();}
    else {
        // Passport exposes a login() function on req
        // (also aliased as logIn()) that can be used to establish a login session.
        req.logIn(user, function(err) {
          if (err) {console.log("ERROR**************",err); return next(err); }
          res.status(200).send("Logged In");
          res.end();
        });
    }
  })(req, res, next);
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
