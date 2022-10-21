var assert = require('assert');
var server = require('../src/index');
var chai = require('chai');
var chaiHttp = require('chai-http');

chai.should();
chai.use(chaiHttp);

describe('BackendTest', function(){
    describe('Test the GET of users', () => {
        it('should return all users', (done) => {
            chai.request(server)
            .get('/user')
            .end((err, response) => {
                response.should.have.status(200);
                response.body.should.be.a('array');
                done();
            })
        });
    });

    describe('Test the POST of users', () => {
        it('should post a user', (done) => {
            let user = {
                "user" : {
                    "username" : "Stefan",
                    "password" : 123
                }
            };

            chai.request(server)
            .post('/user')
            .send(user)
            .end((err, response) => {
                response.should.have.status(200);
                response.body.should.be.a('object');
                response.body.should.have.property('loggedIn');
                response.body.should.have.property('status');
                response.body.should.have.property('loggedIn').eql(true);
                response.body.should.have.property('status').eql('Everything went well!');
              done();
            })
        });
    });
});