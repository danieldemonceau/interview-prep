const rotate = (matrix: number[][]): void => {
  for (let row = 0; row < matrix.length; row++)
    for (let col = row + 1; col < matrix[row].length; col++)
      [matrix[row][col], matrix[col][row]] = [
        matrix[col][row],
        matrix[row][col],
      ];
  for (let row = 0; row < matrix.length; row++)
    for (let col = 0; col < matrix[row].length / 2; col++)
      [matrix[row][col], matrix[row][matrix[row].length - 1 - col]] = [
        matrix[row][matrix[row].length - 1 - col],
        matrix[row][col],
      ];
};

console.log(
  rotate([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ]),
);
console.log(
  rotate([
    [5, 1, 9, 11],
    [2, 4, 8, 10],
    [13, 3, 6, 7],
    [15, 14, 12, 16],
  ]),
);
