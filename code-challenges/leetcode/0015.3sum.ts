const threeSum = (nums: number[]): number[][] => {
  const sol: number[][] = [];
  const duplicates: Set<string> = new Set();
  nums.sort((a, b) => a - b);
  for (let i = 0; i < nums.length - 2; i++) {
    let left = i + 1;
    let right = nums.length - 1;
    while (left < right) {
      if (nums[i] + nums[left] + nums[right] === 0) {
        const key = String(nums[i] + "," + nums[left] + "," + nums[right]);
        if (!duplicates.has(key)) {
          sol.push([nums[i], nums[left], nums[right]]);
          duplicates.add(key);
        }
        left++;
        right--;
      } else if (nums[i] + nums[left] + nums[right] > 0) right--;
      else if (nums[i] + nums[left] + nums[right] < 0) left++;
    }
  }
  return sol;
};

console.log(threeSum([-1, 0, 1, 2, -1, -4]));
console.log(threeSum([0, 1, 1]));
console.log(threeSum([0, 0, 0]));
console.log(threeSum([-1, 0, 1, 2, -1, -4, -1, -4]));
console.log(threeSum([-2, 0, 1, 1, 2]));
