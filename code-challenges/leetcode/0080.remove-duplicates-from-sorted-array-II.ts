const removeDuplicates = (nums: number[]): number => {
  if (nums.length < 3) return nums.length;
  let writeIndex = 2;
  for (let readIndex = 2; readIndex < nums.length; readIndex++) {
    if (nums[writeIndex - 2] !== nums[readIndex]) {
      nums[writeIndex] = nums[readIndex];
      writeIndex++;
    }
  }
  return writeIndex;
};

console.log(removeDuplicates([1, 1, 1, 2, 2, 3]));
console.log(removeDuplicates([0, 0, 1, 1, 1, 1, 2, 3, 3]));
