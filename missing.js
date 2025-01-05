// Find the missing letter
// Write a method that takes an array of consecutive (increasing) letters as input and that returns the missing letter in the array.

// You will always get an valid array. And it will be always exactly one letter be missing. The length of the array will always be at least 2.
// The array will always contain letters in only one case.

// Example:

// ['a','b','c','d','f'] -> 'e'
// ['O','Q','R','S'] -> 'P'
// (Use the English alphabet with 26 letters!)



function findMissingLetter(array) {
    for (let i = 0; i < array.length - 1; i++) {
      // Get the ASCII code of the current letter and the next letter
      const currentCode = array[i].charCodeAt(0)
      const nextCode = array[i + 1].charCodeAt(0)
  
      // Check if the difference between consecutive letters is greater than 1
      if (nextCode - currentCode > 1) {
        // Return the missing letter
        return String.fromCharCode(currentCode + 1)
      }
    }
}