
function largestOfFour(arr) {
  result = [];
  for (var i = 0; i < arr.length; i++) {
    result.push(arr[i][0]); //bug possible
    for (var j = 0; j < arr[i].length; j++) {
      if ( arr[i][j] > result[i] ) {
        result[i] = arr[i][j];
      }
    }
    arr[i]
  }
  return result;
}

console.log(largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]));
