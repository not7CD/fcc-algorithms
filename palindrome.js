function palindrome(str) {
  str = str.toLowerCase();
  str = str.replace(/[^A-Za-z0-9]/g,"");
  restr = str.split("").reverse().join("");
  return str === restr;
}



// TESTS
var known_results = {
  "eye": true,
  "_eye": true,
  "race car": true,
  "not a palindrome": false,
  "A man, a plan, a canal. Panama": true,
  "never odd or even": true,
  "nope": false,
  "almostomla": false,
  "My age is 0, 0 si ega ym.": true,
  "1 eye for of 1 eye.": false,
  "0_0 (: /-\\ :) 0-0": true,
  "five|\\_/|four": false
};

console.log("TESTS");
var fail = 0, ok = 0;
for (var variable in known_results) {
  if (known_results.hasOwnProperty(variable)) {

    testResult = ( palindrome(variable) == known_results[variable] );
    if( !testResult ) {
      console.log(variable, testResult);
      fail++;
    } else {
      ok++;
    }
  }
};

if (fail != 0) {
  console.log("Failure ", fail, " fails out of ", ok+fail );
} else {
  console.log("OK ", ok, " tests");
}
