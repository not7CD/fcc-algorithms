
function bouncer(arr) {
  // Don't show a false ID to this bouncer.
  arr = arr.filter(function (element) {
    if (Boolean(element)) {
      return element;
    }
  });
  return arr;
}

console.log(bouncer([7, "ate", "", false, 9]));
