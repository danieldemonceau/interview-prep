const minDistance = (word1: string, word2: string): number => {
  const [m, n] = [word1.length + 1, word2.length + 1];
  const sol: number[][] = Array.from({ length: m }, () => Array(n).fill(0));
  for (let row = 0; row < m; row++) {
    for (let col = 0; col < n; col++) {
      if (row === 0) {
        sol[row][col] = col;
        continue;
      }
      if (col === 0) {
        sol[row][col] = row;
        continue;
      }
      if (word1[row - 1] !== word2[col - 1])
        sol[row][col] =
          Math.min(
            sol[row - 1][col],
            sol[row][col - 1],
            sol[row - 1][col - 1],
          ) + 1;
      else sol[row][col] = sol[row - 1][col - 1];
    }
  }
  return sol[m - 1][n - 1];
};

// console.log(minDistance('horse', 'ros'));
// console.log(minDistance('intention', 'execution'));
console.log(minDistance("zoologicoarchaeologist", "zoogeologist"));
