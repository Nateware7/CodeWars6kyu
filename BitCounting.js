// Write a function that takes an integer as input, and returns the number of bits that are equal to one in the binary representation of that number. You can guarantee that input is non-negative.

// Example: The binary representation of 1234 is 10011010010, so the function should return 5 in this case






//My Solutions

const countBit = function(n) {
    let ones = []
    const binary = n.toString(2)
    for(let i = 0 ; i < binary.length ; i++){
      if(binary[i] === '1'){
        ones.push(binary[i])
      }
    }
    return ones.length
}


const countBits = n => n.toString(2).split('0').join('').length