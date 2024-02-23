const strStr = (haystack: string, needle: string): number => {
  for (let i = 0; i < haystack.length; i++) {
    let j = 0;
    while (haystack[i + j] === needle[j] && j < needle.length) j++;
    if (j === needle.length) return i;
  }
  return -1;
};

console.log(strStr('sadbutsad', 'sad'));
console.log(strStr('leetcode', 'leeto'));
console.log(strStr('sasadbutsad', 'sad'));
console.log(strStr('a', 'a'));