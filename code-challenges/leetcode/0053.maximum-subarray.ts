const maxSubArray = (nums: number[]): number => {
  let max = -Infinity;
  let current = 0;
  for (const num of nums) {
    current += num;
    if (max < current) max = current;
    if (current < 0) current = 0;
  }
  return max;
};

console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
console.log(maxSubArray([1]));
console.log(maxSubArray([5, 4, -1, 7, 8]));
console.log(maxSubArray([-1]));
console.log(maxSubArray([-3, -2, -1]));
