// The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.

// Examples
// "din"      =>  "((("
// "recede"   =>  "()()()"
// "Success"  =>  ")())())"
// "(( @"     =>  "))((" 






















//My Solutions


function duplicateEncode(word){
    return word.toLowerCase().split('').map( function (a, i, w) {
        return w.indexOf(a) == w.lastIndexOf(a) ? '(' : ')'
      })
      .join('')
}



function duplicateEncode(word) {
    word = word.toLowerCase()
  
    const charCount = {}

    for (let i = 0; i < word.length; i++) {
      const char = word[i]
      charCount[char] = (charCount[char] || 0) + 1
    }

    let result = ''
    for (let i = 0; i < word.length; i++) {
      const char = word[i]
      result += charCount[char] > 1 ? ')' : '('
    }
    return result
}