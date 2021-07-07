// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

/*The Substitution Cipher requires a standard alphabet 
and a substitution alphabet. Letters from the standard alphabet will 
be transposed to the standard alphabet. 
This cipher requires that the recipient have the substitution alphabet, 
otherwise it will be difficult for them to decode the message.

For example, in the image above, the word "HELLO" 
would be translated as follows:

"H" becomes "R".
"E" becomes "M".
"L" becomes "W".
"O" becomes "L".
This would result in the code "RMWWL". To decrypt this code, 
you would simply take the result and transpose back from 
the substitution alphabet to the standard alphabet.

substitution()
The substitution() function in the src/substitution.js 
file has three parameters:

input refers to the inputted text to be encoded or decoded.
alphabet refers to substitution alphabet.
encode refers to whether you should encode or decode the message. 
By default it is set to true.
When building the function, keep the following constraints and rules in mind:

The input could include spaces and letters as well as special characters 
such as #, $, *, etc.
Spaces should be maintained throughout.
Capital letters can be ignored.
The alphabet parameter must be a string of exactly 26 characters, 
which could include special characters such as #, $, *, etc. 
Otherwise, it should return false.
All the characters in the alphabet parameter must be unique. 
Otherwise, it should return false.
Examples*/

const substitutionModule = (function () {
  // you can add any code you want within this function scope

  function substitution(input, alphabet, encode = true) {
    // check for alphabet with 26 characters
    if (!alphabet || alphabet.length !== 26) {
      return false;
    }

    // check for duplicate characters
    for (let i = 0; i < alphabet.length; i++) {
      if (alphabet.indexOf(alphabet[i], (i+1)) != -1) {
        return false;
      }
    }

    // put phrase in lowercase, declare normal alphabet and returned value
    let phrase = input.toLowerCase();
    let normAlphabet = "abcdefghijklmnopqrstuvwxyz";
    let encrypted = "";

    // encode each character
    if (encode) {
      for (let i = 0; i < phrase.length; i++) {
        let letter = phrase[i];
        if (normAlphabet.includes(letter)) {
          encrypted += alphabet[normAlphabet.indexOf(letter)];
        } else {
          encrypted += letter;
        }
      }
    } else {
      for (let i = 0; i < phrase.length; i++) {
        let letter = phrase[i];
        if (alphabet.includes(letter)) {
          encrypted += normAlphabet[alphabet.indexOf(letter)];
        } else {
          encrypted += letter;
        }
      }
    }


    return encrypted;
  }
    

  

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
