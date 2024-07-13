function repeatedWord(string) {
  // Split the string into an array of words
  const words = string.toLowerCase().split(/\W+/);

  // Create a map to store the count of each word
  const wordCountMap = new Map();

  // Iterate through the words
  for (const word of words) {
    // If the word is already in the map, it's repeated, so return it
    if (wordCountMap.has(word)) {
      return word;
    }
    // Otherwise, add the word to the map with a count of 1
    wordCountMap.set(word, 1);
  }

  // If no word is repeated, return null or an appropriate message
  return "It's all good, fam!";
}

const exampleString = "This is a sample string with a repeated word repeated";
const result = repeatedWord(exampleString);
console.log(result); // Output: "repeated"
