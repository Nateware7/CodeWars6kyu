// The number 89 is the first integer with more than one digit that fulfills the property partially introduced in the title of this kata.
// What's the use of saying "Eureka"? Because this sum gives the same number: 89 = 8^1 + 9^2

// The next number with this property is 135:
// 135 = 1^1 + 3^2 + 5^3

// Task
// We need a function to collect these numbers. It should receive two integers a and b,
// defining the range [a, b] (inclusive), and output a list of the sorted numbers in the range
// that fulfill the property described above.

// Examples
// 1, 10  --> [1, 2, 3, 4, 5, 6, 7, 8, 9]
// 1, 100 --> [1, 2, 3, 4, 5, 6, 7, 8, 9, 89]
// 90, 100 --> []

// If there are no numbers of this kind in the range [a, b],
// the function should output an empty list.

// Enjoy it!!

function sumDigPow(a, b) {
  const result = []
  for (let i = a; i <= b; i++) {
    const sum = i
      .toString()
      .split('')
      .reduce((acc, digit, index) => acc + Math.pow(Number(digit), index + 1), 0)
    if (sum === i) {
      result.push(i)
    }
  }
  return result
}