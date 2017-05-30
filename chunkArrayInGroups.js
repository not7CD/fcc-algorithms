
function chunkArrayInGroups(arr, size) {
  // Break it up.
  var sliced = [];
  for (var i = 0; i < arr.length; i+=size) {
    sliced.push(arr.slice(i,i+size));
  }
  return sliced;
}

console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2));
console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 2));
