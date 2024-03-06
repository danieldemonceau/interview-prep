const merge = (intervals: number[][]): number[][] => {
  const solution: number[][] = [];
  intervals.sort((a, b) => a[0] - b[0]);
  let lowerBound: number = intervals[0][0];
  let upperBound: number = intervals[0][1];
  for (let i = 1; i < intervals.length; i++) {
    if (upperBound < intervals[i][0]) {
      solution.push([lowerBound, upperBound]);
      lowerBound = intervals[i][0];
      upperBound = intervals[i][1];
    }
    upperBound = Math.max(upperBound, intervals[i][1]);
  }
  solution.push([lowerBound, upperBound]);
  return solution;
};

console.log(
  merge([
    [1, 3],
    [2, 6],
    [8, 10],
    [15, 18],
  ]),
);
console.log(
  merge([
    [1, 4],
    [4, 5],
  ]),
);
console.log(merge([[1, 4]]));
console.log(
  merge([
    [1, 10],
    [2, 3],
    [5, 9],
    [6, 8],
  ]),
);
