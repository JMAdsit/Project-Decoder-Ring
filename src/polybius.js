// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  
  // encode function 
  function polyEncode(input, polybius) {
    let encrypted = "";
    let phrase = input.toLowerCase();

    // encode each character 
    for (let i = 0; i < phrase.length; i++) {
      // declare letter for this loop
      let letter = phrase[i];

      // test for non-letters
      if (letter.charCodeAt() > 122 || letter.charCodeAt() < 97) {
        encrypted += phrase[i];
        continue;
      }

      // test for exception case, "j"
      if (letter === "j") {
        encrypted += 42;
        continue;
      }

      // find and add numeric code for letter
      polybius.forEach((array, index) => {
        if(array.some((check) => check === letter)) {
          encrypted += index + 1;
          encrypted += array.indexOf(letter) + 1; 
        }
      })
    }
    return encrypted;
  }

  // decode function
  function polyDecode(input, polybius) {
    // declares returned variable
    let decrypted = "";

    // loops through each number combo/special character 
    for (let i = 0; i < input.length; i += 2) {
      
      // test for non-letters
      if (isNaN(parseInt(input[i], 10))) {
        decrypted += input[i];
        i--;
        continue;
      }

      //checks for i/j
      if (input[i] == 4 && input[i+1] == 2) {
        decrypted += "(i/j)";
        continue;
      }

      // decodes normal letters
      let decodedLetter = polybius[input[i] - 1][input[i+1] - 1];
      decrypted += decodedLetter;
    }

    return decrypted;
  }

  function polybius(input, encode = true) {
    
    // check for viable decode
    let spaceTest = input.split(' ').join('')
     if (!encode && spaceTest.length % 2 === 1) {
      return false;
    }

    // declare polybius square
    const polybius = [["a", "f", "l", "q", "v"], 
    ["b", "g", "m", "r", "w"], 
    ["c", "h", "n", "s", "x"], 
    ["d", "i", "o", "t", "y"], 
    ["e", "k", "p", "u", "z"]];

    if (encode) { 
      return polyEncode(input, polybius);
    } else {
      return polyDecode(input, polybius);
    }
    

  }

  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };
