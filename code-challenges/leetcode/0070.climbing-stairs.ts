const climbStairs = (
  n: number,
  memo: { [key: number]: number } = {},
): number => {
  if (memo[n]) return memo[n];
  if (n === 0) return 1;
  memo[n] =
    (n - 1 > -1 ? climbStairs(n - 1, memo) : 0) +
    (n - 2 > -1 ? climbStairs(n - 2, memo) : 0);
  return memo[n];
};

console.log(climbStairs(2));
console.log(climbStairs(3));
console.log(climbStairs(45));
