
function slasher(arr, howMany) {
  // it doesn't always pay to be first
  return arr.slice(howMany-1);
}

console.log(slasher([1, 2, 3], 2));
