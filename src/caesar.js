// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope

  function caesar(input, shift, encode = true) {
    //check for unusable shift values
    if (!shift || shift > 25 || shift < -25) {
      return false;
    }
    
    //make all inputs lowercase, check encode/decode, and declare returned variable
    let phrase = input.toLowerCase();
    let encrypted = "";
    let shiftValue = shift;
    if (!encode) {
      shiftValue = -shift;
    }
    
    //shift each string character according to the shift value
    for (let i = 0; i < phrase.length; i++) {
      let thisLetter = phrase.charCodeAt(i);
      let letterCode = thisLetter + shiftValue;

      //check for non-letters
      if (thisLetter > 122 || thisLetter < 97) {
        encrypted += phrase[i];
        continue;
      }
      
      //make sure letters wrap around ends of alphabet 
      if (letterCode > 122) {letterCode -= 26;}
      if (letterCode < 97) {letterCode += 26}
      
      //add result to returned string
      encrypted += String.fromCharCode(letterCode);
    }
    
    return encrypted;
  }

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
