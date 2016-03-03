// Exercise from FreeCodeCamp.com
function palindrome(str) {
  str = str.replace(/[ .,\/#!$%\^&\*;:{}=\-_`~()]/g,"");
  str = str.toLowerCase();
  var palCheck = str.split("").reverse().join("");
  if(str !== palCheck) {
    return false;
  }
  return true;
}



palindrome("eye");
palindrome("not a palindrome");
palindrome("A man, a plan, a canal. Panama");
palindrome("never odd or even");
palindrome("nope");
palindrome("almostomla");
palindrome("My age is 0, 0 si ega ym.");
palindrome("1 eye for of 1 eye.");
palindrome("0_0 (: /-\ :) 0-0");
