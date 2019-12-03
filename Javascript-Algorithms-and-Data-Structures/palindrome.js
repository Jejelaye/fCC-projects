// This checks if the word passed in is spelled the same way forward and backwards - without spaces, and other weird punctuation forms .
// it looks for letters and digits alone.

function palindrome(str) {
  let pattern = /[a-z]|\d/ig;
  // Good luck!
  let strReversed = str.trim().match(pattern).reverse().join("").toLowerCase(); 
  
  if (strReversed == str.toLowerCase().match(pattern).join("")) {
    return true;
  } 
  
  return false;
}



palindrome("eye");