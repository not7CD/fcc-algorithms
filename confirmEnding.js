
function confirmEnding(str, target) {
  // "Never give up and good luck will find you."
  // -- Falcor

  ending = str.substr(str.length - target.length, target.length)

  return target === ending;
}

console.log(confirmEnding("Bastian", "n"));
