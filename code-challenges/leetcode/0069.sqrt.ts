const mySqrt = (x: number): number => {
  if (x === 0 || x === 1) return x;
  let start = 1;
  let end = x;
  let mid: number = -1;
  while (start <= end) {
    mid = Math.floor(start + (end - start) / 2);
    if (mid * mid === x) return mid;
    if (mid * mid > x) end = mid - 1;
    if (mid * mid < x) start = mid + 1;
  }
  return Math.round(end);
};

console.log(mySqrt(4));
console.log(mySqrt(8));
console.log(mySqrt(9));
console.log(mySqrt(10));
console.log(mySqrt(15));
console.log(mySqrt(16));
