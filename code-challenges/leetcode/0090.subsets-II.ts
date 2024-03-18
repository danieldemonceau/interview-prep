const subsetsWithDup = (nums: number[]): number[][] => {
  nums.sort((a, b) => a - b);
  const solutions: number[][] = [];
  const subsetsWithDupHelper = (start = 0, path: number[] = []) => {
    solutions.push(path);
    for (let i = start; i < nums.length; i++) {
      if (i === start + 1 && nums[i - 1] === nums[i]) continue;
      subsetsWithDupHelper(i + 1, [...path, nums[i]]);
    }
  };
  subsetsWithDupHelper();
  return solutions;
};

console.log(subsetsWithDup([1, 2, 2]));
console.log(subsetsWithDup([0]));
