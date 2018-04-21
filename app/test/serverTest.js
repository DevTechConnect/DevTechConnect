
// see https://scotch.io/tutorials/test-a-node-restful-api-with-mocha-and-chai for documentation

//During the test the env variable is set to test
process.env.NODE_ENV = 'test';

//Require the dev-dependencies
let chai = require('chai');
var expect = require('chai').expect;
let chaiHttp = require('chai-http');
let server = require('../server');
let should = chai.should();
chai.use(chaiHttp);

  describe("Server Tests", function(){
          before(function(done) {
            this.timeout(65000); //giving time for seuqlize to load the DB tables
            server.on('serverStarted', function(){
              done();
            });
          });

          describe('Test POST that a new user can be added /api/addUser',function() {
              it('it should POST new user information to the DB', function(done) {
                let newUser = {firstName:"TestFirstName", lastName:"TestLastName", email:"testEmail@testEmail.com", password:"12345"};
                chai.request(server)
                    .post('/api/addUser')
                    .send(newUser)
                    .end(function(err, res){
                        res.should.have.status(200);
                      done();
                    });
              });
          });

          describe('Test that a duplicate email will fail',function() {
              it('it should refuse the duplicate email, even though the case is different', function(done) {
                let newUser = {firstName:"TestFirstName", lastName:"TestLastName", email:"tEStEmail@testEmail.com", password:"12345"};
                chai.request(server)
                    .post('/api/addUser')
                    .send(newUser)
                    .end(function(err, res){
                        res.should.have.status(409);
                      done();
                    });
              });
          });


          describe('Test the LogIn With Email not Found',function() {
              it('Should return Incorrect Login Information. message', function(done) {
                let credentials = {username:"tEStEmaaaaail@testEmaillllll.com", password:"12345"};
                chai.request(server)
                    .post('/api/login')
                    .send(credentials)
                    .end(function(err, res){
                      res.should.have.status(404);
                      expect(res.text).to.be.equal("Incorrect Login Information.");
                      done();
                    });
              });
          });

          describe('Test the LogIn With Email not Found',function() {
              it('Should return Incorrect Login Information. message', function(done) {
                let credentials = {username:"tEStEmail@testEmail.com", password:"54321"};
                chai.request(server)
                    .post('/api/login')
                    .send(credentials)
                    .end(function(err, res){
                      res.should.have.status(404);
                      expect(res.text).to.be.equal("incorrect login information.");
                      done();
                    });
              });
          });

          describe('Test the LogIn With Correct Information',function() {
              it('Should return the newly created user', function(done) {
                let credentials = {username:"tEStEmail@testEmail.com", password:"12345"};
                chai.request(server)
                    .post('/api/login')
                    .send(credentials)
                    .end(function(err, res){
                      res.should.have.status(200);
                      res.body.email.should.equal("testemail@testemail.com");
                      res.body.email.should.not.equal("tEStEmail@testEmail.com");//should be all lower case
                      res.body.firstName.should.equal("TestFirstName");
                      res.body.lastName.should.equal("TestLastName");
                      res.body.password.should.equal("");//should have been blanked out


                      var today = new Date();
                      //res.body.joinDate and lastLogin format will be: 2018-04-16T17:29:17.000Z
                      //test that the user was created today


                      var expectedYear = parseInt(today.getFullYear());
                      var expectedMonth = parseInt(today.getMonth())+1; //0 is the first month of the year in JS
                      var expectedDay = parseInt(today.getDate());
                      var joinDateArray = res.body.joinDate.split("-");
                      var receivedMonthJoin = parseInt(joinDateArray[1]);
                      var receivedYearJoin = parseInt(joinDateArray[0]);
                      var receivedDayJoin = parseInt(joinDateArray[2].split("T")[0]);


                      var lastLoginDateArray = res.body.lastLogin.split("-");
                      var receivedMonthLogin = parseInt(lastLoginDateArray[1]);
                      var receivedYearLogin = parseInt(lastLoginDateArray[0]);
                      var receivedDayLogin = parseInt(lastLoginDateArray[2].split("T")[0]);

                      expectedYear.should.equal(receivedYearJoin);
                      expectedMonth.should.equal(receivedMonthJoin);
                      expectedDay.should.equal(receivedDayJoin);

                      expectedYear.should.equal(receivedYearLogin);
                      expectedMonth.should.equal(receivedMonthLogin);
                      expectedDay.should.equal(receivedDayLogin);

                      done();
                    });
              });
          });

          describe('Test Get All Tracks',function() {
              it('Should return all the tracks', function(done) {
                chai.request(server)
                    .post('/api/getAllTracks')
                    .end(function(err, res){
                      res.should.have.status(200);
                      expect(res.text).to.be.equal("incorrect login information.");
                      done();
                    });
              });
          });



}); //close Server Tests
