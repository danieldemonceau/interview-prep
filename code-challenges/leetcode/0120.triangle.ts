const minimumTotal = (
  triangle: number[][],
  row: number = 0,
  col: number = 0,
  cache: { [key: string]: number } = {},
): number => {
  if (row > triangle.length - 1) return 0;
  const key = row + "," + col;
  if (key in cache) return cache[key];
  cache[key] =
    triangle[row][col] +
    Math.min(
      minimumTotal(triangle, row + 1, col, cache),
      minimumTotal(triangle, row + 1, col + 1, cache),
    );
  return cache[key];
};

console.log(minimumTotal([[2], [3, 4], [6, 5, 7], [4, 1, 8, 3]]));
console.log(minimumTotal([[-10]]));
