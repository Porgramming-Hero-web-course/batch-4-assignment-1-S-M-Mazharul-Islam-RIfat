const sumArray = (numbers: number[]): number => {
   const totalSum = numbers.reduce((currentSum, value) => currentSum + value, 0);
   return totalSum;
}

console.log(sumArray([1, 2, 3, 4, 5]));