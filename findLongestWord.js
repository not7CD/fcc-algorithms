
function findLongestWord(str) {
  arr = str.split(" ");
  longest = arr[0].length;
  for (var i = 0; i < arr.length; i++) {
    if (arr[i].length > longest) {
      longest = arr[i].length;
    }

  }
  return longest;
}

console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));
