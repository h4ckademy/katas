'use strict';

function isInt(candidate) {
  return parseInt(candidate).toString() === candidate;
}

function sum(a, b) {
  return a + b;
}

function toInt(item) {
  return parseInt(item, 10);
}

module.exports.add = function (operands) {
  return operands.split(/,|\n/)
      .filter(isInt)
      .map(toInt)
      .reduce(sum, 0);
};
