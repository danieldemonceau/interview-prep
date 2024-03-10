const plusOne = (digits: number[]): number[] => {
  let index = digits.length - 1;
  while (index > -1) {
    if (digits[index] !== 9) {
      digits[index]++;
      return digits;
    }
    digits[index] = 0;
    index--;
  }
  return [1, ...digits];
};

console.log(plusOne([1, 2, 3]));
console.log(plusOne([4, 3, 2, 1]));
console.log(plusOne([9]));
console.log(plusOne([9]));
console.log(plusOne([9, 9]));
console.log(plusOne([1, 9, 9]));
console.log(plusOne([9, 9, 9]));
console.log(plusOne([0]));
