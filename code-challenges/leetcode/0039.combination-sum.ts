const combinationSum = (candidates: number[], target: number, startIndex = 0, path: number[] = []): number[][] => {
  if (target === 0) return [path];
  const solutions: number[][] = [];
  for (let i = startIndex; i < candidates.length; i++) {
    const newTarget = target - candidates[i];
    if (newTarget >= 0) solutions.push(...combinationSum(candidates, newTarget, i, [...path, candidates[i]]));
  }
  return solutions;
}

console.log(combinationSum([2, 3, 6, 7], 7));
console.log(combinationSum([2, 3, 5], 8));
console.log(combinationSum([2], 1));
