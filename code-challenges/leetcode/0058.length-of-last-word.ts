const lengthOfLastWord = (s: string): number => {
  let endIndex = -1;
  for (let i = s.length - 1; i > -1; i--) {
    if (endIndex < 0 && s[i] !== " ") endIndex = i;
    if (endIndex > -1 && s[i] === " ") return endIndex - i;
  }
  return endIndex + 1;
};

console.log(lengthOfLastWord("Hello World"));
console.log(lengthOfLastWord("   fly me   to   the moon  "));
console.log(lengthOfLastWord("luffy is still joyboy"));
console.log(lengthOfLastWord("a"));
console.log(lengthOfLastWord("a "));
console.log(lengthOfLastWord(" a "));
console.log(lengthOfLastWord(" a"));
