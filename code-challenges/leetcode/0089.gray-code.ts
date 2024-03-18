const grayCode = (n: number): number[] =>
  Array.from({ length: 1 << n }, (_, i) => i ^ (i >> 1));

console.log(grayCode(2));
console.log(grayCode(1));
console.log(grayCode(3));
