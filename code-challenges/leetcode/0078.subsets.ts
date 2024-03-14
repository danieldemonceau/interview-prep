const subsets = (
  nums: number[],
  start = 0,
  currentCombination: number[] = [],
): number[][] => {
  if (start > nums.length) return [];
  const allCombinations: number[][] = [currentCombination];
  for (let i = start; i < nums.length; i++) {
    for (const combination of subsets(nums, i + 1, [
      ...currentCombination,
      nums[i],
    ]))
      allCombinations.push(combination);
  }
  return allCombinations;
};

console.log(subsets([1, 2, 3]));
console.log(subsets([0]));
