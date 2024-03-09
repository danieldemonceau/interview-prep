const uniquePaths = (m: number, n: number): number => {
  const solution: number[][] = Array.from({ length: m }, () =>
    Array(n).fill(1),
  );
  for (let row = 1; row < m; row++) {
    for (let col = 1; col < n; col++) {
      solution[row][col] = solution[row - 1][col] + solution[row][col - 1];
    }
  }
  return solution[m - 1][n - 1];
};

console.log(uniquePaths(3, 7));
console.log(uniquePaths(3, 2));
