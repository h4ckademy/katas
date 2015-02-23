'use strict';

require('should');

var stringCalculator = require('../');

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
    });

    describe('with two or more operands', function () {
      it('should return the sum of them', function() {
        var fixtures = {
          "4,6": 10,
          "1,2,3,4,5": 15,
        };

        for (var key in fixtures) {
          stringCalculator.add(key).should.equal(fixtures[key]);
        }
      });
    });
  });
});
