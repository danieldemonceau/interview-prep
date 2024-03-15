const exist = (board: string[][], word: string): boolean => {
  const path: Set<string> = new Set<string>();
  const explore = (row: number, col: number): boolean => {
    const key = row + "," + col;
    if (path.size === word.length) return true;
    if (
      row > board.length - 1 ||
      row < 0 ||
      col > board[row].length - 1 ||
      col < 0 ||
      path.has(key) ||
      word[path.size] !== board[row][col]
    )
      return false;
    path.add(key);
    const result =
      explore(row + 1, col) ||
      explore(row, col + 1) ||
      explore(row - 1, col) ||
      explore(row, col - 1);
    path.delete(key);
    return result;
  };
  for (let row = 0; row < board.length; row++) {
    for (let col = 0; col < board[row].length; col++) {
      if (board[row][col] === word[0] && explore(row, col)) return true;
    }
  }
  return false;
};

console.log(
  exist(
    [
      ["A", "B", "C", "E"],
      ["S", "F", "C", "S"],
      ["A", "D", "E", "E"],
    ],
    "ABCCED",
  ),
);
console.log(
  exist(
    [
      ["A", "B", "C", "E"],
      ["S", "F", "C", "S"],
      ["A", "D", "E", "E"],
    ],
    "SEE",
  ),
);
console.log(
  exist(
    [
      ["A", "B", "C", "E"],
      ["S", "F", "C", "S"],
      ["A", "D", "E", "E"],
    ],
    "ABCB",
  ),
);
