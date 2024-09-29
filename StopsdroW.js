// Write a function that takes in a string of one or more words, and returns the same string, but with all words that have five or more letters reversed (Just like the name of this Kata). Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.

// Examples:

// "Hey fellow warriors"  --> "Hey wollef sroirraw" 
// "This is a test        --> "This is a test" 
// "This is another test" --> "This is rehtona test"





//My Solutions


function spinWords(string){
    return string.split(" ").map(x => x.length >= 5 ? x.split("").reverse().join("") : x).join(" ")
}



function spinWords(string) {
    let words = string.split(' ')
    
    for (let i = 0; i < words.length; i++){
      if (words[i].length >= 5){
        words[i] = words[i].split('').reverse().join('')
      }
    }
    return words.join(' ')
}
  