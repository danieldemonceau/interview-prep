const twoSum = (nums: number[], target: number): number[] => {
  const lookUp: { [key: number]: number } = {};
  for (let i = 0; i < nums.length; i++) {
    if (lookUp[target - nums[i]] !== undefined)
      return [lookUp[target - nums[i]], i];
    lookUp[nums[i]] = i;
  }
  return [];
};

console.log(twoSum([2, 7, 11, 15], 9));
console.log(twoSum([3, 2, 4], 6));
console.log(twoSum([3, 3], 6));
console.log(twoSum([3, 0, 3], 6));
console.log(twoSum([3, 0, 0], 0));
console.log(twoSum([3, 0, -3], 0));
