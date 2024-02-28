const jump = (nums: number[]): number => {
  let steps = 0;
  let end = 0;
  let maxIndex = 0;
  for (let i = 0; i < nums.length - 1; i++) {
    maxIndex = Math.max(maxIndex, i + nums[i]);
    if (i === end) {
      steps++;
      end = maxIndex;
    }
  }
  return steps;
};

console.log(jump([2, 3, 1, 1, 4]));
console.log(jump([2, 3, 0, 1, 4]));
console.log(jump([2, 3, 0, 2, 0, 1]));
console.log(jump([1]));
console.log(jump([7, 0, 9, 6, 9, 6, 1, 7, 9, 0, 1, 2, 9, 0, 3]));
console.log(jump([3, 3, 3, 0, 3, 3, 3, 3]));
console.log(jump([0]));
