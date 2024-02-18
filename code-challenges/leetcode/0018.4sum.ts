const fourSum = (nums: number[], target: number): number[][] => {
  nums.sort((a, b) => a - b);
  const solution: number[][] = [];
  const quadruplet: number[] = [];
  const kSum = (k: number, start: number, target: number) => {
    if (k != 2) {
      for (let i = start; i < nums.length - k + 1; i++) {
        if (i > start && nums[i] === nums[i - 1]) continue;
        quadruplet.push(nums[i]);
        kSum(k - 1, i + 1, target - nums[i]);
        quadruplet.pop();
      }
      return;
    }
    let left = start;
    let right = nums.length - 1;
    while (left < right) {
      if (nums[left] + nums[right] < target) left++;
      else if (nums[left] + nums[right] > target) right--;
      else {
        solution.push([...quadruplet, nums[left], nums[right]]);
        left++;
        while (left < right && nums[left] === nums[left - 1]) left++;
      }
    }
  };
  kSum(4, 0, target);
  return solution;
};

console.log(fourSum([1, 0, -1, 0, -2, 2], 0));
console.log(fourSum([2, 2, 2, 2, 2], 8));
console.log(fourSum([2, 2, 2, 2], 6));
console.log(fourSum([2, 2, 2], 4));
console.log(fourSum([2, 2], 2));
console.log(fourSum([2], 0));
// -2,-1,0,0,1,2
