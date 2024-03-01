const permuteUnique = (nums: number[], path: number[] = []): number[][] => {
  if (nums.length === 0) return [path];
  nums.sort((a, b) => a - b);
  const solution: number[][] = [];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i - 1] === nums[i]) continue;
    const permutations = permuteUnique(
      [...nums.slice(0, i), ...nums.slice(i + 1)],
      [...path, nums[i]],
    );
    for (const permutation of permutations) solution.push(permutation);
  }
  return solution;
};

console.log(permuteUnique([1, 1, 2]));
console.log(permuteUnique([1, 2, 3]));

console.log(permuteUnique([1, 2, 1, 2]));
