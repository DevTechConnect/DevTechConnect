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
    db.Members.findAll({
                        where: {email:username}
                      })
        .then(function(results){
          if(results.length==0){
            return done(null, false, { message: 'Incorrect Login Information.' });
          } else {
            var match = bcrypt.compareSync(password, results[0].password);
            match = password=== results[0].password; //TODO remove before dedployment
            console.log("Remove line above before deployment");
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
      hash = req.body.password; //TODO remove before deployment
      console.log("Remove line above before deployment");
      var newUser = { firstName: req.body.firstName, lastName: req.body.lastName,
                       email:email, password:hash, lastLogin:db.sequelize.fn('NOW') };
      // search for attributes
      db.Members.count({ where: {email: email} })
                .then(function(count){
                  if(count==0){ //create a new user
                    db.Members.create(newUser)
                              .then(function(user) {
                                user.password = ""; //dont return hashed password
                                console.log("RESULT", JSON.stringify(user));
                                db.sequelize
                                    .query( "Select * from Members where id = ?;"
                                            , { replacements: [user.id], type: db.sequelize.QueryTypes.SELECT}
                                          )
                                          .then(function(results){
                                                var theNewUser = results[0];
                                                theNewUser.password = "";
                                                console.log("TheNewUser", theNewUser);
                                                req.logIn(theNewUser, function(err) {
                                                  if (err) {console.log("ERROR HERE**************",err); throw err; }
                                                });
                                                res.status(200).send(JSON.stringify(theNewUser));
                                              })
                                          .catch(function(err){
                                            console.log(err);
                                            throw err;
                                          });
                              }).catch(function(err){
                                console.log(err);
                                throw err;
                              });
                  } else {
                    res.status(409).send('Duplicate Email');
                  }
              });//close then
});

app.post('/api/getAllTracks', function(req, res, next){
  db.sequelize
      .query(
              " Select T.id as trackid, T.trackname , T.achievementLink, T.description as trackDescription, T.introVideoLink, TS.link as stepLink, "
              +" TS.description as stepdescription, TS.stepNumber FROM tracks as T JOIN tracksteps as TS ON T.id = TS.trackId "
              +" ORDER BY T.id, TS.stepNumber;"
              , {type: db.sequelize.QueryTypes.SELECT}
            )
      .then(function(results){
        var currentTrack;
        var tracks = [];
        var aTrack =  { trackId: "", trackName:"", trackIntroVideoLink:"",
                   trackDescription: "", steps:[]};

        for(i=0; i<results.length; i++){
            if(i==0){
              //initial set up
              currentTrack = results[i].trackname;
            }
            if(results[i].trackname !== currentTrack){
                //finish the old track and start a new track
                tracks.push(aTrack);
                aTrack = { trackId: "", trackName:"", trackIntroVideoLink:"",
                           trackDescription: "", steps:[]};
                currentTrack = results[i].trackname;
            }
            aTrack.trackId  = results[i].trackid;
            aTrack.achievementLink = results[i].achievementLink;
            aTrack.trackName = results[i].trackname;
            aTrack.trackDescription = results[i].trackDescription;
            aTrack.trackIntroVideoLink = results[i].introVideoLink;

            var aStep = { trackNumber:results[i].id, stepNumber:results[i].stepNumber,
                          stepLink: results[i].stepLink,stepdescription: results[i].stepdescription};
            aTrack.steps.push(aStep);
        }//close for loop
        tracks.push(aTrack); //add the last track that was built
        console.log(JSON.stringify(tracks, null, 2));
        res.status(200).send(JSON.stringify(tracks));

      })
      .catch(function(err){console.log("Error getting tracks", err); throw err;});

}); //close /api/getAllTracks
app.post('/api/login', function(req, res, next) {
  passport.authenticate('local', function(err, user, info) {
    if (err) { console.log(err); return next(err); }
    if (!user) { res.status(404).send(info.message); res.end();}
    else {
          //set the last login date since login was successful
          db.Members.update(
                    {lastLogin: db.sequelize.fn('NOW')} ,
                    {where: {id: user.id}}
                  ).catch(function(err){console.log(err)});//no need to wait for the promise to return

          //get the tracks and track information for this user
          db.sequelize
              .query(
                      " Select MT.addedDate, MT.completedSteps, MT.markedComplete, T.id as trackid, "
                      +" T.trackname, T.description, T.achievementLink, T.introVideoLink, TS.link as stepLink, "
                      +" TS.description as stepdescription, TS.stepNumber from membertracks as MT  "
                      +" JOIN tracks as T ON MT.trackId = T.id JOIN tracksteps as TS ON T.id = TS.trackId "
                      + " WHERE MT.memberId = ? ORDER BY T.id, TS.stepNumber;"
                      , { replacements: [user.id], type: db.sequelize.QueryTypes.SELECT}
                    )
              .then(function(results){
                var tracksCompleted = 0;
                var currentTrack;
                var completedSteps;
                var tracks = [];
                var aTrack =  getNewTrack();
                for(i=0; i<results.length; i++){
                    if(i==0){
                      //initial set up
                      currentTrack = results[i].trackname;
                      completedSteps = getCompletedStepsArray(results[i].completedSteps);
                      console.log("completed?",results[i].markedComplete);
                      if(results[i].markedComplete===1){
                        tracksCompleted++;
                      }
                    }
                    if(results[i].trackname !== currentTrack){
                        //finish the old track and start a new track
                        tracks.push(aTrack);
                        aTrack = getNewTrack();
                        currentTrack = results[i].trackname;
                        completedSteps = getCompletedStepsArray(results[i].completedSteps);
                        if(results[i].markedComplete===1){
                          tracksCompleted++;
                        }
                    }
                    aTrack.trackName = results[i].trackname;
                    aTrack.achievementLink = results[i].achievementLink;
                    aTrack.description = results[i].description;
                    aTrack.trackAddedDate = results[i].addedDate;
                    aTrack.trackCompletedSteps = results[i].completedSteps
                    aTrack.trackMarkedComplete = results[i].markedComplete;
                    aTrack.trackId  = results[i].trackid;
                    aTrack.trackIntroVideoLink = results[i].introVideoLink;
                    var aStep = { trackNumber:results[i].id, stepNumber:results[i].stepNumber,
                                  stepLink: results[i].stepLink,stepdescription: results[i].stepdescription,
                                  stepComplete:completedSteps.includes(results[i].stepNumber)};
                    aTrack.steps.push(aStep);
                }//close for loop
                tracks.push(aTrack); //add the last track that was built

                var newUser = {
                  id:user.id,
                  firstName:user.firstName,
                  lastName:user.lastName,
                  email:user.email,
                  joinDate:user.joinDate,
                  lastLogin:user.lastLogin,
                  tracksCompleted:tracksCompleted,
                  tracks:tracks
                }
                user = newUser;
                // Passport exposes a login() function on req
                // (also aliased as logIn()) that can be used to establish a login session.
                console.log("COMPLETE USER", JSON.stringify(user, null, 2));
                req.logIn(user, function(err) {
                  if (err) {console.log("ERROR**************",err); return next(err); }
                    });

                res.status(200).send(JSON.stringify(user));
              });

    }
  })(req, res, next);
});


function getNewTrack(){
  return { trackId: "", achievementLink:"", trackName:"", trackIntroVideoLink:"",
             trackDescription: "", trackAddedDate:"", trackCompletedSteps: "",
             trackMarkedComplete: "", steps:[]};
}

function getCompletedStepsArray(stepsArrayString){
  return stepsArrayString ? stepsArrayString.split(",") : [];
}

app.post('/api/logout', function(req, res){
  req.session.destroy(function(err) {
    req.logout();
  });
});



// Syncing our sequelize models and then starting our Express app
// =============================================================
db.sequelize.sync({ force: false }).then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
    app.emit('serverStarted'); //used for testing so that the tests know the server has started before running
  });
});

module.exports = app; //for testing
