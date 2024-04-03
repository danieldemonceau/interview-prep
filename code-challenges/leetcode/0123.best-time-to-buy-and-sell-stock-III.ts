const maxProfit = (prices: number[]): number => {
  if (!prices.length) return 0;

  const n = prices.length;
  const k = 2;
  const dp: number[] = Array(n).fill(0);
  let dpPrev: number[] = Array(n).fill(0);

  for (let i = 1; i <= k; i++) {
    let localMax = dpPrev[0] - prices[0];
    for (let j = 1; j < n; j++) {
      dp[j] = Math.max(dp[j - 1], prices[j] + localMax);
      localMax = Math.max(localMax, dpPrev[j] - prices[j]);
    }
    dpPrev = [...dp];
  }

  return dp[n - 1];
};

console.log(maxProfit([3, 3, 5, 0, 0, 3, 1, 4]));
console.log(maxProfit([1, 2, 3, 4, 5]));
console.log(maxProfit([7, 6, 4, 3, 1]));
