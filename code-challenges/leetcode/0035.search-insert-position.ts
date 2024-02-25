const searchInsert = (nums: number[], target: number): number => {
  let left = 0;
  let right = nums.length - 1;
  while (left < right + 1) {
    const mid = Math.floor((left + right) / 2);
    if (target === nums[mid]) return mid;
    if (target < nums[mid]) right = mid - 1;
    if (nums[mid] < target) left = mid + 1;
  }
  return left;
};

console.log(searchInsert([1, 3, 5, 6], 5));
console.log(searchInsert([1, 3, 5, 6], 2));
console.log(searchInsert([1, 3, 5, 6], 7));

