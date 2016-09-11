var assert = require('assert');
var chai = require('chai');
var expect = chai.expect;
var should = chai.should();
var chaiHttp = require('chai-http');
var server = require('../app');

chai.use(chaiHttp);

describe('Gear', function() {
    it('should list ALL gear on /gear GET', function(done) {
      chai.request(server)
      .get('/gear')
      .end(function(err, res){
        res.should.have.status(200);
        res.should.be.json;
        res.body.should.be.a('array');
        res.body.length.should.be.above(0);
        done();
      });
    });
  it('should list a SINGLE gear item on /gear/<item> GET', function(done) {
    chai.request(server)
    .get('/gear/57c75e85004598ce935aa39b')
    .end(function(err, res){
      res.should.have.status(200);
      res.should.be.json;
      res.body.should.be.a('object');
      res.body.should.have.property('_id');
      done();
    });
  });
  // it('should add a SINGLE gear item on /gear POST', function(done) {
  //   expect(true).to.equal(false);
  //   done();
  // });
  // it('should update a SINGLE gear item on /gear/<item> PUT', function(done) {
  //   expect(true).to.equal(false);
  //   done();
  // });
  // it('should delete a SINGLE gear item on /gear/<item>/delete DELETE', function(done) {
  //   expect(true).to.equal(false);
  //   done();
  // });
});
