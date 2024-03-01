const groupAnagrams = (strs: string[]): string[][] => {
  const anagrams: { [key: string]: string[] } = {};
  for (const str of strs) {
    const anagramKey = str.split("").sort().join("");
    anagramKey in anagrams
      ? anagrams[anagramKey].push(str)
      : (anagrams[anagramKey] = [str]);
  }
  return Object.values(anagrams);
};

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));
console.log(groupAnagrams([""]));
console.log(groupAnagrams(["a"]));
