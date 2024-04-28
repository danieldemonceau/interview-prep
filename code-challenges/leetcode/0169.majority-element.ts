const majorityElement = (nums: number[]): number => {
  let candidate: number = Infinity;
  let count = 0;
  let index = 0;
  while (index < nums.length) {
    if (candidate === nums[index]) {
      count++;
    } else {
      count != 0 && count--;
    }
    if (count === 0) {
      candidate = nums[index];
    }
    index++;
  }
  return candidate;
};

console.log(majorityElement([3, 2, 3]));
console.log(majorityElement([2, 2, 1, 1, 1, 2, 2]));

console.log(majorityElement([2, 1]));
