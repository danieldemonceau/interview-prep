const setZeroes = (matrix: number[][]): void => {
  const rows: Set<number> = new Set();
  const cols: Set<number> = new Set();
  for (let row = 0; row < matrix.length; row++) {
    for (let col = 0; col < matrix[row].length; col++) {
      if (matrix[row][col] === 0) {
        rows.add(row);
        cols.add(col);
      }
    }
  }
  rows.forEach((row) => {
    let col = 0;
    while (col < matrix[row].length) {
      matrix[row][col] = 0;
      col++;
    }
  });
  cols.forEach((col) => {
    let row = 0;
    while (row < matrix.length) {
      matrix[row][col] = 0;
      row++;
    }
  });
};

console.log(
  setZeroes([
    [1, 1, 1],
    [1, 0, 1],
    [1, 1, 1],
  ]),
);
console.log(
  setZeroes([
    [0, 1, 2, 0],
    [3, 4, 5, 2],
    [1, 3, 1, 5],
  ]),
);
