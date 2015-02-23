var Add = function(arr) {
  if (arr == "") {
    return 0;
  }

  var numbers = arr.split(",")
  if (numbers.length == 1){
  	return parseInt(numbers[0])
  }

  if (numbers.length == 2) {
    var sum = parseInt(numbers[0]) + parseInt(numbers[1]);
    return sum;
  }
};