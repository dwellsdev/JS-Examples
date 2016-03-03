// Exercise from FreeCodeCamp.com
function reverseString(str) {
  var revStr = str.split("");
  revStr.reverse();
  str = revStr.join("");
  return str;
}

console.log(reverseString("Well, hellow there!"));
