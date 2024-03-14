const combine = (
  n: number,
  k: number,
  start = 1,
  currentCombination: number[] = [],
): number[][] => {
  if (currentCombination.length === k) return [currentCombination];
  const allCombinations: number[][] = [];
  for (let i = start; i < n + 1; i++) {
    for (const combination of combine(n, k, i + 1, [...currentCombination, i]))
      allCombinations.push(combination);
  }
  return allCombinations;
};

console.log(combine(4, 2));
console.log(combine(1, 1));
