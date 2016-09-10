var assert = require('assert');
var chai = require('chai');
var expect = chai.expect;
var should = chai.should();
var chaiHttp = require('chai-http');
var server = require('../app');

chai.use(chaiHttp);

describe('Gear', function() {
  it('should list ALL gear on /gear GET', function(done) {
    expect(true).to.equal(false);
    done();
  });
  it('should list a SINGLE blob on /gear/<item> GET', function(done) {
    expect(true).to.equal(false);
    done();
  });
  it('should add a SINGLE blob on /gear POST', function(done) {
    expect(true).to.equal(false);
    done();
  });
  it('should update a SINGLE blob on /gear/<item> PUT', function(done) {
    expect(true).to.equal(false);
    done();
  });
  it('should delete a SINGLE blob on /gear/<item>/delete DELETE', function(done) {
    expect(true).to.equal(false);
    done();
  });
});
