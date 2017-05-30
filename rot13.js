
function rot13(str) { // LBH QVQ VG!
  arr = [];
  for (var i = 0; i < str.length; i++) {
    arr.push(str.charCodeAt(i));
  }
  console.log(arr);
  for (var j = 0; j < arr.length; j++) {
    if(arr[j] >= 'A'.charCodeAt() && arr[j] <= 'Z'.charCodeAt()) {
      arr[j] += 13;
      if (arr[j] > 'Z'.charCodeAt()) {
        arr[j] -= 26;
      }
    }

    arr[j] = String.fromCharCode(arr[j]);

  }
  console.log(arr);
  str = arr.join('');
  return str;
}
console.log('A'.charCodeAt());
console.log('Z'.charCodeAt());

// Change the inputs below to test
console.log(rot13("ABC SERR PBQR PNZC"));
rot13("SERR PBQR PNZC");
