const letterCombinations = (digits: string): string[] => {
  if (digits.length === 0) return [];
  const solution: string[] = [];
  const combination = (digits: string, i: number = 0, sol: string = "") => {
    if (digits.length === i) {
      solution.push(sol);
      return;
    }
    const letters = mapping[digits[i]];
    for (let j = 0; j < letters.length; j++)
      combination(digits, i + 1, sol + letters[j]);
  };
  combination(digits);
  return solution;
};

const mapping: { [key: string]: string } = {
  "2": "abc",
  "3": "def",
  "4": "ghi",
  "5": "jkl",
  "6": "mno",
  "7": "pqrs",
  "8": "tuv",
  "9": "wxyz",
};

console.log(letterCombinations("23"));
console.log(letterCombinations(""));
console.log(letterCombinations("2"));
console.log(letterCombinations("234"));
