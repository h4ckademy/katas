'use strict';

require('should');

var stringCalculator = require('../'),
    assert = require('assert');

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

      it('works with "\\n" as a separator', function() {
        stringCalculator.add('1\n2').should.equal(3);
      });

      it('works with "\n" and "," as separators', function() {
        stringCalculator.add('1\n2,3').should.equal(6);
      });

      describe('with ";" as delimiter', function () {
        it('should return 3 for "\/\/;\n1;2"', function () {
          stringCalculator.add('//;\n1;2').should.equal(3);
        });
      });
    });

    describe('given negative numbers', function () {
      it('should throw an exception', function () {
        assert.throws(
          function() {
            stringCalculator.add('1,-2');
          }
        );
      });

      it('should throw an exception with the "negatives not allowed:" message and the negative number', function() {
        assert.throws(
          function() {
            stringCalculator.add('1,-2');
          },
          /negatives not allowed: -2/
        );
      });

      it('should throw an exception with the message and all the negative numbers separated by commas', function () {
        assert.throws(
          function() {
            stringCalculator.add('-1,-2');
          },
          /negatives not allowed: -1,-2/
        );
      });
    });
  });
});
