// Your task, is to create N×N multiplication table, of size provided in parameter.

// For example, when given size is 3:

// 1 2 3
// 2 4 6
// 3 6 9
// For the given example, the return value should be:

// [[1,2,3],[2,4,6],[3,6,9]]






//My Solution


multiplicationTable = function(size) {
    let result = []
    for (let i = 0; i < size; i++) {
      let row = []
      for (let j = 0; j < size; j++) {
        row.push((i + 1) * (j + 1))
      }
      result.push(row)
    }
    
    return result
}
  