const singleNumber = (nums: number[]): number =>
  nums.reduce((acc, num) => acc ^ num, 0);

console.log(singleNumber([2, 2, 1]));
console.log(singleNumber([4, 1, 2, 1, 2]));
console.log(singleNumber([1]));
