'use strict';

var romannumerals = require('../');
var assert = require('should');

describe('Roman numerals', function () {

  it('should return "I" for 1', function () {
    romannumerals.convert(1).should.equal('I');
  });

  it('should return "X" for 10', function() {
    romannumerals.convert(10).should.equal('X');
  });

});
