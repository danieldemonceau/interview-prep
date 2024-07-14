const titleToNumber = (columnTitle: string): number => {
  columnTitle.codePointAt(0);
  let result = 0;
  let multiplier = 1;
  for (let i = columnTitle.length - 1; i > -1; i--) {
    result += (columnTitle.codePointAt(i)! - 64) * multiplier;
    multiplier *= 26;
  }
  return result;
};

console.log(titleToNumber("A")); // 1
console.log(titleToNumber("AB")); // 28
console.log(titleToNumber("ZY")); // 701
console.log(titleToNumber("DANIEL")); // 701
console.log(titleToNumber("FXSHRXW")); // 2147483647
