const permute = (nums: number[], path: number[] = []): number[][] => {
  if (nums.length === 0) return [path];
  const solution: number[][] = [];
  for (let i = 0; i < nums.length; i++)
    for (const permutation of permute(
      [...nums.slice(0, i), ...nums.slice(i + 1)],
      [...path, nums[i]],
    ))
      solution.push(permutation);
  return solution;
};

console.log(permute([1, 2, 3]));
console.log(permute([1]));
