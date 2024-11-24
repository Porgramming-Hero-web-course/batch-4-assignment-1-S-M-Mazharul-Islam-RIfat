const removeDuplicates = (numbers: number[]): number[] => {
   let previousValue: number = numbers[0], ans: number[] = [];
   numbers.forEach(currentValue => {
      if (currentValue != previousValue) {
         ans.push(previousValue);
         previousValue = currentValue;
      }
   })
   ans.push(previousValue);
   return ans;
}

console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5]));