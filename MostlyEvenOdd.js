// You are given an array (which will have a length of at least 3, but could be very large) containing integers. The array is either entirely comprised of odd integers or entirely comprised of even integers except for a single integer N. Write a method that takes the array as an argument and returns this "outlier" N.

// Examples
// [2, 4, 0, 100, 4, 11, 2602, 36] -->  11 (the only odd number)

// [160, 3, 1719, 19, 11, 13, -21] --> 160 (the only even number)





//My Solutions

function findOutlier(integers) {
    let mapped = integers.map(x => (x % 2 === 0 ? 'even' : 'odd'))
  
    let isMostlyEven = mapped.filter(x => x === 'even').length >= 2

    return isMostlyEven
      ? integers.find(x => x % 2 !== 0)
      : integers.find(x => x % 2 === 0)
  }
  