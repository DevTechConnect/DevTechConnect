
// see https://scotch.io/tutorials/test-a-node-restful-api-with-mocha-and-chai for documentation

//During the test the env variable is set to test
process.env.NODE_ENV = 'test';

//Require the dev-dependencies
let chai = require('chai');
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

          //** Test that a new user can be added **/
          describe('/api/addUser',function() {
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

          /** Test that a duplicate email will fail **/
          describe('Add Duplicate User Email',function() {
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

}); //close Server Tests
