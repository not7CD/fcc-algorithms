
function repeatStringNumTimes(str, num) {
  // repeat after me
  var result = '';
  for(var i = num; i > 0; i--) {
    result += str;
  }
  return result;
}

repeatStringNumTimes("abc", 3);

console.log(["a"] * 3);
