'use strict';

var stringCalculator = require('../');
var assert = require('should');

describe('stringCalculator', function () {
  describe('add', function () {
    it('should return 0 when an empty string is given', function () {
      stringCalculator.add('').should.equal(0);
    });

    describe('with a operand', function () {
      it('should return the operand', function () {
        var result = 789;
        stringCalculator.add(result).should.equal(result);
      });
    });
  });
});
