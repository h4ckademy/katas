"use strict";

var Add = function(operands) {

  var result;

  if (operands == "") {
    result = 0;
  } else {
    result = sumArray(operands);
  }

  function sumArray(string) {
    var numbers = string.split(",");

    var sum = sumArrayOfStrings(numbers);

    return parseInt(sum);
  }

  function sumArrayOfStrings(arr) {
    var result = arr.reduce(function(previousVal, currentVal) {
      return parseInt(previousVal) + parseInt(currentVal);
    });

    return result;
  }

  function returnInt(element) {
    return parseInt(element, 10);
  }

  return result;
};

