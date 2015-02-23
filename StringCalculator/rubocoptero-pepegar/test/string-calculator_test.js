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
        var input = '789',
            output = 789;
        stringCalculator.add(input).should.equal(output);
      });

      it('should return the sum of two numbers if a string containing two numbers is given', function() {
        var input = "4,6",
            output = 10;
        stringCalculator.add(input).should.equal(output);
      });
    });
  });
});
