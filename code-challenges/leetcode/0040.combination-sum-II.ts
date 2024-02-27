const combinationSum2 = (candidates: number[], target: number): number[][] => {
  candidates.sort((a, b) => a - b);

  const combinationSum2Helper = (candidates: number[], target: number, startIndex = 0, path: number[] = []): number[][] => {
    if (target === 0) return [path];
    const solutions: number[][] = [];
    for (let i = startIndex; i < candidates.length; i++) {
      if (!(i > startIndex && candidates[i] === candidates[i - 1]) && target - candidates[i] >= 0)
        solutions.push(...combinationSum2Helper(candidates, target - candidates[i], i + 1, [...path, candidates[i]]));
    }
    return solutions;
  };
  return combinationSum2Helper(candidates, target);
};

console.log(combinationSum2([10, 1, 2, 7, 6, 1, 5], 8));
console.log(combinationSum2([2, 5, 2, 1, 2], 5));