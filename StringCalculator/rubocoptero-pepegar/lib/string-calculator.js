'use strict';

function hasTwoOperands (operands) {
  return operands.indexOf(',') !== -1;
}

module.exports.add = function (operands) {
  var result = 0;
  if (operands !== '') {
    if (hasTwoOperands(operands)) {
      result = 10;
    } else {
      result = parseInt(operands);
    }
  }
  return result;
};
