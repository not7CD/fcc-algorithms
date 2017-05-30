
function getIndexToIns(arr, num) {
  // Find my place in this sorted array.
  arr = arr.sort(function (a, b) {
    return a - b;
  });
  // console.log(arr);
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] >= num) {
        return i;
    }
  }
  return arr.length;
}

console.log(getIndexToIns([40, 60], 50));
console.log(getIndexToIns([10, 20, 30, 40, 50], 35));

getIndexToIns([40, 60], 50);
