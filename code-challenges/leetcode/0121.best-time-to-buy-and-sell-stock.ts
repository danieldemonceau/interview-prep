const maxProfit = (prices: number[]): number => {
  let minPrice = Infinity;
  let maxGain = 0;
  for (const price of prices) {
    if (minPrice > price) minPrice = price;
    maxGain = Math.max(maxGain, price - minPrice);
  }
  return maxGain;
};

console.log(maxProfit([7, 1, 5, 3, 6, 4]));
console.log(maxProfit([7, 6, 4, 3, 1]));
