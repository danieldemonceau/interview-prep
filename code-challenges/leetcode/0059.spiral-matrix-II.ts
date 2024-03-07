const generateMatrix = (n: number): number[][] => {
  let leftBound = -1;
  let rightBound = n;
  let upperBound = -1;
  let lowerBound = n;
  const solution: number[][] = Array.from({ length: n }, () => Array(n));
  let index = 1;
  let row = 0;
  let col = 0;
  while (index < n ** 2 + 1) {
    for (col = leftBound + 1; col < rightBound; col++)
      solution[row][col] = index++;
    col = rightBound - 1;
    upperBound++;
    for (row = upperBound + 1; row < lowerBound; row++)
      solution[row][col] = index++;
    row = lowerBound - 1;
    rightBound--;
    for (col = rightBound - 1; col > leftBound; col--)
      solution[row][col] = index++;
    col = leftBound + 1;
    lowerBound--;
    for (row = lowerBound - 1; row > upperBound; row--)
      solution[row][col] = index++;
    row = upperBound + 1;
    leftBound++;
  }
  return solution;
};

console.log(generateMatrix(3));
console.log(generateMatrix(1));
