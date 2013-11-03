var alphanumericPropertyValidator = require('../');
var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
var Q = require('q');

require('mocha-as-promised')();

chai.should();
chai.use(chaiAsPromised);

var validate = Q.denodeify(alphanumericPropertyValidator);

/* global describe, it */

describe('Alphanumeric property validator', function () {

  it('should provide an error message if value is not alphanumeric', function () {
    return validate('username', 'user name', { username: '¡€#å∫ç' }).should.eventually.equal('user name must be alphanumeric');
  });

  it('should not provide an error message if value is alphanumeric', function () {
    return validate('username', 'user name', { username: '123abc' }).should.eventually.be.undefined;
  });

});
