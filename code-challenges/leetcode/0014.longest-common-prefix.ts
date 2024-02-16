const longestCommonPrefix = (strs: string[]): string => {
  if (strs.length === 1) return strs[0];
  for (let i = 0; i < strs[0].length; i++) {
    for (let j = 1; j < strs.length; j++) {
      if (strs[0][i] !== strs[j][i]) return strs[0].slice(0, i);
    }
  }
  return strs[0];
};

console.log(longestCommonPrefix(["flower", "flow", "flight"]));
console.log(longestCommonPrefix(["dog", "racecar", "car"]));
console.log(longestCommonPrefix(["dog"]));
console.log(longestCommonPrefix(["", "dog"]));
