const uniquePathsWithObstacles = (obstacleGrid: number[][]): number => {
  const m = obstacleGrid.length;
  const n = obstacleGrid[0].length;

  for (let row = 0; row < m; row++) {
    for (let col = 0; col < n; col++) {
      if (obstacleGrid[row][col] === 1) obstacleGrid[row][col] = 0;
      else if (row === 0 && col === 0) obstacleGrid[row][col] = 1;
      else if (row === 0) obstacleGrid[row][col] = obstacleGrid[row][col - 1];
      else if (col === 0) obstacleGrid[row][col] = obstacleGrid[row - 1][col];
      else
        obstacleGrid[row][col] =
          obstacleGrid[row - 1][col] + obstacleGrid[row][col - 1];
    }
  }
  return obstacleGrid[m - 1][n - 1];
};

console.log(
  uniquePathsWithObstacles([
    [0, 0, 0],
    [0, 1, 0],
    [0, 0, 0],
  ]),
);
console.log(
  uniquePathsWithObstacles([
    [0, 1],
    [0, 0],
  ]),
);
