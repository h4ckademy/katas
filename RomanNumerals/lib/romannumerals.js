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

var keys = [];
for(var key in MAPPING){
  keys.push(~~key);
}

var closestLowerKey = function(num){
  var candidate = 1;
  for(var i = 0, len = keys.length; i < len; i++) {
    if(keys[i] > candidate && keys[i] <= num) {
      candidate = keys[i];
    }
  }
  return candidate;
};

var repeatChar =function(char, num){
   var result = char;
   for(var i = 1; i < num; i++){
     result += char;
   }
   return result;
};

module.exports.convert = function converter(number) {
  var key = closestLowerKey(number);
  var div = Math.floor(number / key);
  var letter = MAPPING[key];

  return repeatChar(letter, div);
};
