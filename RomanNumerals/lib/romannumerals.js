'use strict';

var MAPPING = {
  1: 'I',
  5: 'V',
  10: 'X',
  50: 'L',
  100: 'C',
  500: 'D',
  1000: 'M'
};

module.exports.convert = function(number) {
  return MAPPING[number];
};
