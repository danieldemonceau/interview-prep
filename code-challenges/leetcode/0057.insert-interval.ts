const insert = (intervals: number[][], newInterval: number[]): number[][] => {
  let index = 0;
  while (index < intervals.length) {
    if (newInterval[0] <= intervals[index][1]) {
      if (newInterval[1] < intervals[index][0])
        return [
          ...intervals.slice(0, index),
          newInterval,
          ...intervals.slice(index),
        ];
      const lowerBound = Math.min(intervals[index][0], newInterval[0]);
      let upperBound = Math.max(intervals[index][1], newInterval[1]);
      const startIndex = index;
      while (index < intervals.length && intervals[index][0] <= upperBound) {
        upperBound = Math.max(upperBound, intervals[index][1]);
        index++;
      }
      return [
        ...intervals.slice(0, startIndex),
        [lowerBound, upperBound],
        ...intervals.slice(index),
      ];
    }
    index++;
  }
  return [...intervals, newInterval];
};

console.log(
  insert(
    [
      [1, 3],
      [6, 9],
    ],
    [2, 5],
  ),
);
console.log(
  insert(
    [
      [1, 2],
      [3, 5],
      [6, 7],
      [8, 10],
      [12, 16],
    ],
    [4, 8],
  ),
);
console.log(
  insert(
    [
      [1, 2],
      [3, 5],
      [6, 7],
      [8, 10],
      [12, 16],
    ],
    [0, 16],
  ),
);
console.log(
  insert(
    [
      [1, 2],
      [3, 5],
      [6, 7],
      [8, 10],
      [12, 16],
    ],
    [18, 20],
  ),
);
console.log(
  insert(
    [
      [3, 5],
      [6, 7],
      [8, 10],
      [12, 16],
    ],
    [1, 2],
  ),
);
console.log(insert([], [4, 5]));
