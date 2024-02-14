const longestPalindrome = (s: string): string => {
  let left = 0;
  let right = 0;
  for (let i = 0; i < s.length; i += 0.5) {
    let leftLetterIndex = Math.floor(i);
    let rightLetterIndex = Math.ceil(i);
    while (
      leftLetterIndex > -1 &&
      rightLetterIndex < s.length &&
      s[leftLetterIndex] === s[rightLetterIndex]
    ) {
      if (right - left < rightLetterIndex - leftLetterIndex) {
        left = leftLetterIndex;
        right = rightLetterIndex;
      }
      leftLetterIndex--;
      rightLetterIndex++;
    }
  }
  return s.slice(left, right + 1);
};

console.log(longestPalindrome("babad"));
console.log(longestPalindrome("cbbd"));
console.log(longestPalindrome("a"));
