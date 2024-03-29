const generate = (numRows: number): number[][] => {
  const rows: number[][] = [];
  for (let depth = 0; depth < numRows; depth++) {
    const row: number[] = [];
    for (let col = 0; col < depth + 1; col++) {
      if (col === 0 || col === depth) row.push(1);
      else
        row.push(rows[rows.length - 1][col - 1] + rows[rows.length - 1][col]);
    }
    rows.push(row);
  }
  return rows;
};

console.log(generate(5));
console.log(generate(1));
