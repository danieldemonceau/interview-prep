const threeSumClosest = (nums: number[], target: number): number => {
  let closestSum = Infinity;
  nums.sort((a, b) => a - b);
  for (let i = 0; i < nums.length - 2; i++) {
    let left = i + 1;
    let right = nums.length - 1;
    while (left < right) {
      const sum = nums[i] + nums[left] + nums[right];
      if (target === sum) return sum;
      if (Math.abs(target - closestSum) > Math.abs(target - sum))
        closestSum = sum;
      if (target > sum) left++;
      if (target < sum) right--;
    }
  }
  return closestSum;
};

console.log(threeSumClosest([-1, 2, 1, -4], 1));
console.log(threeSumClosest([0, 0, 0], 1));
console.log(threeSumClosest([-1, 0, 1], 0));
console.log(threeSumClosest([-2, -1, 0], -3));
