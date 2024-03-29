const getRow = (numRows: number): number[] => {
  let beforeLastRow: number[] = [];
  let lastRow: number[] = [];
  for (let depth = 0; depth < numRows + 1; depth++) {
    lastRow = [];
    for (let col = 0; col < depth + 1; col++) {
      if (col === 0 || col === depth) lastRow.push(1);
      else lastRow.push(beforeLastRow[col - 1] + beforeLastRow[col]);
    }
    beforeLastRow = lastRow;
  }
  return lastRow;
};

// 2nd solution: using factorials
// const getRow = (numRows: number): number[] => {
//   const row: number[] = [];
//   for (let i = 0; i < numRows + 1; i++) row.push(factorial(numRows) / (factorial(i) * factorial(numRows - i)));
//   return row;
// };

// const factorial = (num: number): number => {
//   let result = 1;
//   for (let i = 2; i <= num; i++) {
//     result *= i;
//   }
//   return result;
// };

console.log(getRow(3));
console.log(getRow(0));
console.log(getRow(1));
