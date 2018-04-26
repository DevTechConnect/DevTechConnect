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
const path = require('path');



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
//app.use(express.static("./app/client/public"));
app.use(express.static(path.resolve(__dirname,'/client/public')));

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

app.post('/api/addBookmark', function(req, res, next) {
  db.MemberLinks.create({memberId:req.body.memberid, linkId:req.body.linkid})
                .then(res.status(200).send("added bookmark"))
                .catch(function(err){console.log(err); throw err;});
});

app.post('/api/addTrack', function(req, res, next) {
  db.MemberTracks.create({memberId:req.body.memberid, trackId:req.body.trackid})
                 .then(res.status(200).send("added track"))
                 .catch(function(err){console.log(err); throw err;});
});

app.post('/api/markStepComplete', function(req, res, next) {
  var stepnumber = req.body.stepnumber;
  var completedSteps = req.body.completedSteps;
  completedSteps += ","+stepnumber;

  db.MemberTracks.update({completedSteps:completedSteps}, {where:{id:req.body.membertrackId}})
                 .then(res.status(200).send("marked step completed"))
                 .catch(function(err){console.log(err); throw err;});
});

app.post('/api/markStepIncomplete', function(req, res, next) {
  var stepnumber = req.body.stepnumber;
  var completedSteps = req.body.completedSteps;
  var completedStepsArray = completedSteps.split(",");
  completedStepsArray.splice(completedStepsArray.indexOf(stepNum),1);
  completedSteps = completedStepsArray.join();

  db.MemberTracks.update({completedSteps:completedSteps}, {where:{id:req.body.membertrackId}})
                 .then(res.status(200).send("marked step incomplete"))
                 .catch(function(err){console.log(err); throw err;});
});

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
                                db.sequelize
                                    .query( "Select * from Members where id = ?;"
                                            , { replacements: [user.id], type: db.sequelize.QueryTypes.SELECT}
                                          )
                                          .then(function(results){
                                                var theNewUser = results[0];
                                                theNewUser.password = "";
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

app.post('/api/getRelatedTracksSummary', function(req, res, next){
  var query = "Select id, trackName, description, introVideoLink, achievementLink FROM Tracks WHERE id IN (Select relatedTrackId from relatedTracks WHERE trackId = ?);";
  var parameters = {replacements:[req.body.trackId], type: db.sequelize.QueryTypes.SELECT};
  console.log(query);

  db.sequelize.query(query,parameters)
              .then(function(results){
                var relatedTrackSummaries = [];
                for(i=0; i<results.length; i++){
                var aSummary = {
                    relatedTrackId: results[i].id,
                    trackName: results[i].trackName,
                    trackDescription: results[i].description,
                    introVideoLink: results[i].introVideoLink,
                    achievementLink: results[i].achievementLink,
                  };
                  relatedTrackSummaries.push(aSummary);
                }
                res.status(200).send(JSON.stringify(relatedTrackSummaries));
              })
              .catch(function(err){
                console.log("UNABLE TO GET RELATED TRACKS", err);
                throw err;
              });
});


app.post('/api/getArticles', function(req, res, next){
  var latestNum = req.body.latestNum;
  console.log("************8latestNum", latestNum);
  var query = "Select L.linkName, L.description as linkDescription, L.url, L.isonline, L.id as linkId, L.addedDate, L.topicId, T.name as topicName, T.description as topicDescription from Links as L JOIN Topics as T ON L.topicId = T.id ORDER BY addedDate ";
  var parameters = {type: db.sequelize.QueryTypes.SELECT};
  if(latestNum!=0) {
    query += "LIMIT ?";
    parameters.replacements = [latestNum];
  }
  query+=" ;";
  console.log(query);

  db.sequelize.query(query,parameters)
              .then(function(results){
                var links = [];
                for(i=0; i<results.length; i++){
                var aLink = {
                    linkName: results[i].linkName,
                    linkDescription: results[i].linkDescription,
                    url: results[i].url,
                    isonline: results[i].isonline,
                    linkId: results[i].linkId,
                    addedDate: results[i].addedDate,
                    topicId: results[i].topicId,
                    topicName: results[i].topicName,
                    topicDescription: results[i].topicDescription
                  };
                  links.push(aLink);
                }
                res.status(200).send(JSON.stringify(links));
              })
              .catch(function(err){
                console.log("UNABLE TO GET LINKS AND ARTICLES", err);
                throw err;
              });
});

app.get("/api/getGlossary"), function(req,res){
  db.sequelize
      .query(
              "Select id, term, acronymMeaning, definition, url from Glossaries order by term;"
              , {type: db.sequelize.QueryTypes.SELECT}
            )
      .then(function(results){
        var glossary = [];
        for(i=0; i<results.length; i++){
          glossary.push({
            id: results[i].id,
            term: results[i].term,
            acronymMeaning: results[i].acronymMeaning,
            definition: results[i].definition,
            url: results[i].url
          });
        }
        res.status(200).send(JSON.stringify(glossary));
      })
      .catch(function(err){
        console.log("Error getting tracks", err); throw err;
      });
}
app.get('/api/getAllTracks', function(req, res, next){
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

          //get user bookmarks
          var bookmarkQuery = "Select L.linkName, L.description as linkDescription, L.url, L.isonline, L.id, L.topicId, ML.addedDate, "
                                +" T.name as topicName, T.description as topicDescription "
                                +" from Links as L JOIN Topics as T ON T.id = L.topicId "
                                +" JOIN memberlinks as ML ON ML.linkId = L.id "
                                +" WHERE ML.memberId = ?";


          db.sequelize.query(bookmarkQuery, {replacements:[user.id], type: db.sequelize.QueryTypes.SELECT})
                     .then(function(results){
                          var bookmarks = [];
                          for(i=0; i<results.length; i++){
                            bookmarks.push(
                                        {
                                          linkName: results[i].linkName,
                                          linkDescription: results[i].linkDescription,
                                          url: results[i].url,
                                          isonline: results[i].isonline,
                                          linkid:results[i].id,
                                          topicId: results[i].topicId,
                                          addedDate: results[i].addedDate,
                                          topicName: results[i].topicName,
                                          topicDescription: results[i].topicDescription
                                        }
                            );
                          }//close for loop

                          getUserTracks(user, function(userTracks){
                                var user = userTracks;
                                user.bookmarks = bookmarks;
                                // Passport exposes a login() function on req
                                // (also aliased as logIn()) that can be used to establish a login session.
                                req.logIn(user, function(err) {
                                  if (err) {console.log("ERROR**************",err); return next(err); }
                                    });
                                res.status(200).send(JSON.stringify(user));
                          });// close getUserTracks
                    }) //close get user bookmarks
                    .catch(function(err){
                      console.log(err);
                      throw err;
                    });

    }//close else
  })(req, res, next);
});


function getNewTrack(){
  return { trackId: "", achievementLink:"", trackName:"", trackIntroVideoLink:"",
             trackDescription: "", trackAddedDate:"", membertrackId:"", trackCompletedSteps: "",
             trackMarkedComplete: "", steps:[]};
}

function getCompletedStepsArray(stepsArrayString){
  return stepsArrayString ? stepsArrayString.split(",") : [];
}

function getUserTracks(user, cb){
  db.sequelize
      .query(
              " Select MT.id as membertrackId, MT.addedDate, MT.completedSteps, MT.markedComplete, T.id as trackid, "
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
              aTrack.membertrackId = results[i].membertrackId;
              aTrack.trackIntroVideoLink = results[i].introVideoLink;
              var aStep = { trackNumber:results[i].id, stepNumber:results[i].stepNumber,
                            stepLink: results[i].stepLink,stepdescription: results[i].stepdescription,
                            stepComplete:completedSteps.includes(results[i].stepNumber)};
              aTrack.steps.push(aStep);
          }//close for loop
          if(aTrack.trackId!==""){tracks.push(aTrack)}; //add the last track that was built,  but dont add a blank track

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
          cb(newUser);
      });
}

app.post('/api/logout', function(req, res){
  req.session.destroy(function(err) {
    req.logout();
    res.status(200).send("logged out");
  });
});

app.get("*", function(req,res){
  res.sendFile(path.resolve(__dirname, 'client/build/public/index.html'));
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
