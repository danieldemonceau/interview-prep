const isPalindrome = (x: number): boolean => {
  if (x < 0) return false;
  const digits: number[] = [];
  while (x >= 1) {
    digits.push(x % 10);
    x = Math.floor(x / 10);
  }
  let left = 0;
  let right = digits.length - 1;
  while (left < right) if (digits[left++] !== digits[right--]) return false;
  return true;
};

console.log(isPalindrome(121));
console.log(isPalindrome(-121));
console.log(isPalindrome(10));
console.log(isPalindrome(1221));
console.log(isPalindrome(1000021));
