'use strict';

module.exports.add = function (operands) {
  var result = 0;
  if (operands !== '') {
    result = parseInt(operands);
  }
  return result;
};
