
function titleCase(str) {
  str = str.toLowerCase();
  var arr = str.split(" ");
  console.log(arr);
  for (var i = 0; i < arr.length; i++) {
    wordArr = arr[i].split("");
    wordArr[0] = wordArr[0].toUpperCase();
    arr[i] = wordArr.join("");
  }
  str = arr.join(" ");
  console.log(str);
  return str;
}

titleCase("I'm a little tea pot");
