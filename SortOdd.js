// Task
// You will be given an array of numbers. You have to sort the odd numbers in ascending order while leaving the even numbers at their original positions.

// Examples
// [7, 1]  =>  [1, 7]
// [5, 8, 6, 3, 4]  =>  [3, 8, 6, 5, 4]
// [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]  =>  [1, 8, 3, 6, 5, 4, 7, 2, 9, 0]



//My Solutions


function sortArray(array) {
    let Odd = []
    
    for (let i = 0; i < array.length; i++) {
      if (array[i] % 2 !== 0) {
        Odd.push(array[i])
      }
    }
    
    Odd.sort((a, b) => a - b)
  
    let oddIndex = 0
    return array.map(num => (num % 2 !== 0 ? Odd[oddIndex++] : num))
}

const result = sortArray([5, 8, 6, 3, 4, 9, 2, 7]);
console.log(result);


function sortArray(array) {
    const odd = array.filter((x) => x % 2).sort((a, b) => a - b).reverse()
    return array.map((x) => x % 2 ? odd.pop() : x)
}
