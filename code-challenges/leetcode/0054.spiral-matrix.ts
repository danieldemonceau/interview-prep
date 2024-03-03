const spiralOrder = (matrix: number[][]): number[] => {
  const sol: number[] = [];
  let upperRow = 0;
  let leftCol = 0;
  let lowerRow = matrix.length - 1;
  let rightCol = matrix[0].length - 1;
  while (upperRow < lowerRow + 1 && leftCol < rightCol + 1) {
    for (let col = leftCol; col < rightCol + 1; col++) {
      sol.push(matrix[upperRow][col]);
    }
    upperRow++;
    if (upperRow > lowerRow) break;
    for (let row = upperRow; row < lowerRow + 1; row++) {
      sol.push(matrix[row][rightCol]);
    }
    rightCol--;
    if (leftCol > rightCol) break;
    for (let col = rightCol; col > leftCol - 1; col--) {
      sol.push(matrix[lowerRow][col]);
    }
    lowerRow--;
    if (upperRow > lowerRow) break;
    for (let row = lowerRow; row > upperRow - 1; row--) {
      sol.push(matrix[row][leftCol]);
    }
    leftCol++;
    if (leftCol > rightCol) break;
  }
  return sol;
};

// console.log(spiralOrder([[1, 2, 3], [4, 5, 6], [7, 8, 9]]));
// console.log(spiralOrder([[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12]]));

console.log(spiralOrder([[1, 2, 3, 4]]));
console.log(
  spiralOrder([
    [1, 2, 3, 4],
    [5, 6, 7, 8],
  ]),
);
