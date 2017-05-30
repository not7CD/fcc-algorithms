
function destroyer(arr) {
  // Remove all the values
  args = arguments;

  arr = arr.filter(function (element) {
      // NOTE: Dla tej funkcji mam zupełnie inne `arguments`!!!
      for (var i = 1; i < args.length; i++) {
        if (element == args[i]) {
          return false;
        }
      }
      return true;
    });
  console.log(arr);
  return arr;
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);
