var assert = require('assert');
var server = require('../server');
var chai = require('chai');
var chaiHttp = require('chai-http');

chai.should();
chai.use(chaiHttp);

describe('BackendTest', function(){
    describe('Test the GET', () => {
        it('should return Hello world', (done) => {
            chai.request(server)
            .get('/')
            .end((err, response) => {
                response.should.have.status(200);
                response.body.should.be.a('object');
                response.body.should.have.property('message');
                response.body.should.have.property('message').eql('Hello World');
                done();
            })
        });
    });
});