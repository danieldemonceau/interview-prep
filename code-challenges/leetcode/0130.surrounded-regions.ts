const solve = (board: string[][]): void => {
  const notToFlip = new Set<string>();
  const explore = (row: number, col: number) => {
    const key = row + "," + col;
    if (
      row < 0 ||
      row > board.length - 1 ||
      col < 0 ||
      col > board[row].length - 1 ||
      notToFlip.has(key) ||
      board[row][col] !== "O"
    )
      return;
    board[row][col] = "E";
    explore(row + 1, col);
    explore(row, col + 1);
    explore(row - 1, col);
    explore(row, col - 1);
  };

  for (let col = 0; col < board[0].length; col++) {
    explore(0, col);
    explore(board.length - 1, col);
  }
  for (let row = 1; row < board.length - 1; row++) {
    explore(row, 0);
    explore(row, board[row].length - 1);
  }

  for (let row = 0; row < board.length; row++) {
    for (let col = 0; col < board[row].length; col++) {
      if (board[row][col] === "O") board[row][col] = "X";
      if (board[row][col] === "E") board[row][col] = "O";
    }
  }
};

console.log(
  solve([
    ["X", "X", "X", "X"],
    ["X", "O", "O", "X"],
    ["X", "X", "O", "X"],
    ["X", "O", "X", "X"],
  ]),
);
console.log(solve([["X"]]));
console.log(
  solve([
    ["O", "O"],
    ["O", "O"],
  ]),
);
