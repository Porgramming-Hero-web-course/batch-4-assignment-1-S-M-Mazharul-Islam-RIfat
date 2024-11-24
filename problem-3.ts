const countWordOccurrences = (sentence: string, word: string): number => {
   let occurrences = 0
   sentence.split(" ").forEach(currentWord => {
      if (currentWord.toLowerCase() === word.toLowerCase()) {
         occurrences++;
      }
   })
   return occurrences;
}

console.log(countWordOccurrences("I love typescript", "typescript"));