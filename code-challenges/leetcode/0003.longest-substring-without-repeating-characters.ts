function lengthOfLongestSubstring(s: string): number {
  if (s.length < 2) return s.length;
  const hash: { [key: string]: number } = {};
  let leftPointer = 0;
  let longestSubstring = 0;
  for (let rightPointer = 0; rightPointer < s.length; rightPointer++) {
    if (hash[s.charAt(rightPointer)] !== undefined)
      leftPointer = Math.max(leftPointer, hash[s.charAt(rightPointer)] + 1);
    hash[s.charAt(rightPointer)] = rightPointer;
    longestSubstring = Math.max(
      longestSubstring,
      rightPointer - leftPointer + 1,
    );
  }
  return longestSubstring;
}

console.log(lengthOfLongestSubstring("abcabcbb"));
console.log(lengthOfLongestSubstring("bbbbb"));
console.log(lengthOfLongestSubstring("pwwkew"));
console.log(lengthOfLongestSubstring("p"));
console.log(lengthOfLongestSubstring("bb"));
console.log(lengthOfLongestSubstring("abba"));
