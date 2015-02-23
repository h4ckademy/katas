'use strict';

function isInt(candidate) {
  return parseInt(candidate, 10).toString() === candidate;
}

function sum(a, b) {
  return a + b;
}

function toInt(item) {
  return parseInt(item, 10);
}

function isNegative (number) {
  if (number < 0) {
    throw new Error('negatives not allowed: ' + number);
  }
}

var InputObject = function(rawInput) {
  this.rawInput = rawInput;

  this.setSeparator();
  this.setOperands();
  this.assertNotNegativeOperands();
};

InputObject.prototype.assertNotNegativeOperands = function () {
  this.operands.forEach(isNegative);
};

InputObject.prototype.setOperands = function() {
  if (this.containsDelimiter()) {
    this.operands = this.rawInput.substr(4).split(this.separator);
  } else {
    this.operands = this.rawInput.split(this.separator);
  }
};

InputObject.prototype.setSeparator = function() {
  var separator = '';
  if (this.containsDelimiter()) {
    separator = this.rawInput.charAt(2);
  } else {
    separator = ',|\n';
  }
  this.separator = new RegExp(separator);
};

InputObject.prototype.containsDelimiter = function() {
  return this.rawInput.indexOf('//') !== -1;
};

module.exports.add = function (rawInput) {
  var validInput = new InputObject(rawInput);

  return validInput.operands
    .filter(isInt)
    .map(toInt)
    .reduce(sum, 0);
};
