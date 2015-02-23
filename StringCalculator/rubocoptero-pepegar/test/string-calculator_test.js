'use strict';

var stringCalculator = require('../');
var assert = require('should');

describe('stringCalculator', function () {
  describe('add', function () {
    it('should return 0 when an empty string is given', function () {
      stringCalculator().add("").should.equal(0);
    });
  })
});
