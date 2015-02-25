"use strict";

var Add = function(operands) {

  var result;

  if (operands == "") {
    result = 0;
  } else {
    result = sumOperandsFromString(operands);
  }

  function sumOperandsFromString(string) {
    var operandsArray = convertStringToArray(string);
    var result = operandsArray.reduce(function(previousVal, currentVal) {
      return parseInt(previousVal) + parseInt(currentVal);
    });

    return parseInt(result);
  }

  function convertStringToArray(string) {
    var regexp = /,|\n/
    var arr = string.split(regexp);
    arr.forEach(function(item) {
      if (item == "") {
        throw new Error("Delimiter misplace");
      }
    })
    return arr;
  }

  function toInt(element) {
    return parseInt(element, 10);
  }

  return result;
};

