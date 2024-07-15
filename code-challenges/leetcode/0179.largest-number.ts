const largestNumber = (nums: number[]): string => {
  const sorted = nums.sort((a, b) => `${b}${a}`.localeCompare(`${a}${b}`));
  return sorted[0] === 0 ? "0" : sorted.join("");
};
console.log(largestNumber([10, 2])); // "210"
console.log(largestNumber([3, 30, 34, 5, 9])); // "9534330"
