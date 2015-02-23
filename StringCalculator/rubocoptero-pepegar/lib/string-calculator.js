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

var InputObject = function(rawInput) {
  this.rawInput = rawInput;

  this.generateSeparator();
  this.generateOperands();
};

InputObject.prototype.generateOperands = function() {
  if (this.containsDelimiter()) {
    this.operands = this.rawInput.substr(4).split(this.separator);
  } else {
    this.operands = this.rawInput.split(this.separator);
  }
};

InputObject.prototype.generateSeparator = function() {
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
}

module.exports.add = function (rawInput) {
  var validInput = new InputObject(rawInput);

  return validInput.operands
    .filter(isInt)
    .map(toInt)
    .reduce(sum, 0);
};
