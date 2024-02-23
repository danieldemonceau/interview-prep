const removeDuplicates = (nums: number[]): number => {
  let writeIndex = 0;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i - 1] !== nums[i]) writeIndex++;
    nums[writeIndex] = nums[i];
  }
  return writeIndex + 1;
};

console.log(removeDuplicates([1, 1, 2]));
console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]));
console.log(removeDuplicates([0]));