const canJump = (nums: number[]): boolean => {
  let maxIndex = 0;
  for (let i = 0; i < nums.length; i++) {
    if (maxIndex < i) return false;
    maxIndex = Math.max(maxIndex, i + nums[i]);
    if (maxIndex >= nums.length - 1) return true;
  }
  return false;
};

console.log(canJump([2, 3, 1, 1, 4]));
console.log(canJump([3, 2, 1, 0, 4]));
console.log(canJump([]));
console.log(canJump([2]));
