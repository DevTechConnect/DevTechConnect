
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
                      //res.body.joinDate format will be: 2018-04-16T17:29:17.000Z
                      //test that the user was created today

                      var dateArray = res.body.joinDate.split("-");
                      var expectedYear = parseInt(today.getFullYear());
                      var receivedYear = parseInt(dateArray[0]);

                      var expectedMonth = parseInt(today.getMonth())+1; //0 is the first month of the year in JS
                      var receivedMonth = parseInt(dateArray[1]);

                      var expectedDay = parseInt(today.getDate()); //0 is the first month of the year in JS
                      var receivedDay = parseInt(dateArray[2].split("T")[0]);


                      expectedYear.should.equal(receivedYear);
                      expectedMonth.should.equal(receivedMonth);
                      expectedDay.should.equal(receivedDay);

                      done();
                    });
              });
          });



}); //close Server Tests
