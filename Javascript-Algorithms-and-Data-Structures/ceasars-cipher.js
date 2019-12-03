// this cipher rotates a letter of the alphabet by 13 places
function rot13(str) { // LBH QVQ VG!
  let alpha = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l",      "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  let strArr = str.toLowerCase().split("");
  let _strArr = strArr.map(x => {
    if (alpha.indexOf(x) !== -1) {
      // return alpha.indexOf(x);
      if (alpha.indexOf(x) > 12) {
        return alpha[alpha.indexOf(x) - 13]
      } else {
        return alpha[alpha.indexOf(x) + 13];
      }
    } else {
      return x;
    }
  })
  return (_strArr.join("").toUpperCase());
}

// Change the inputs below to test
rot13("SERR PBQR PNZC");