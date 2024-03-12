const searchMatrix = (matrix: number[][], target: number): boolean => {
  const [m, n] = [matrix.length, matrix[0].length];
  let low = 0;
  let high = m * n - 1;
  while (low <= high) {
    const mid = Math.floor((low + high) / 2);
    const val = matrix[Math.floor(mid / n)][mid % n];
    if (val === target) return true;
    if (val < target) low = mid + 1;
    else high = mid - 1;
  }
  return false;
};

console.log(
  searchMatrix(
    [
      [1, 3, 5, 7],
      [10, 11, 16, 20],
      [23, 30, 34, 60],
    ],
    3,
  ),
);
console.log(
  searchMatrix(
    [
      [1, 3, 5, 7],
      [10, 11, 16, 20],
      [23, 30, 34, 60],
    ],
    13,
  ),
);
console.log(
  searchMatrix(
    [
      [1, 3, 5, 7],
      [10, 11, 16, 20],
      [23, 30, 34, 60],
    ],
    61,
  ),
);
console.log(
  searchMatrix(
    [
      [1, 3, 5, 7],
      [10, 11, 16, 20],
      [23, 30, 34, 60],
    ],
    0,
  ),
);
