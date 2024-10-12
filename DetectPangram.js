// A pangram is a sentence that contains every single letter of the alphabet at least once. For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).

// Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.

// StringsData StructuresFundamentals



//My Solution


function isPangram(string) {
    const alphabet = [...Array(26)].map((_, i) => String.fromCharCode(97 + i))
    const lowerCaseString = string.toLowerCase()
    return alphabet.every(letter => lowerCaseString.includes(letter))
}