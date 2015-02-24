'use strict';

var romannumerals = require('../');
var assert = require('should');

describe('Roman numerals', function () {

  var convertsTo = function(dec, rom) {
    return function() {
      romannumerals.convert(dec).should.equal(rom);
    }
  };

  [
    [1, 'I'],
    [5, 'V'],
    [10, 'X'],
    [50, 'L'],
    [100, 'C'],
    [500, 'D'],
    [1000, 'M'],
    [2, 'II'],
    [20, 'XX'],
    [200, 'CC'],
    [3000, 'MMM'],
    [4, 'IV']
        ].forEach(function(pair){
          it('returns "'+ pair[1] + '" for ' + pair[0],
             convertsTo(pair[0], pair[1]));
          })
});
