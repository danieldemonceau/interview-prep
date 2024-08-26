const findRepeatedDnaSequences = (s: string): string[] => {
  if (s.length < 10) return [];

  const seen = new Set<string>();
  const repeated = new Set<string>();

  for (let i = 0; i + 10 < s.length + 1; i++) {
    const dnaSequence = s.slice(i, i + 10);
    seen.has(dnaSequence) ? repeated.add(dnaSequence) : seen.add(dnaSequence);
  }

  return Array.from(repeated);
};

console.log(findRepeatedDnaSequences("AAAAACCCCCAAAAACCCCCCAAAAAGGGTTT")); // ["AAAAACCCCC","CCCCCAAAAA"]
console.log(findRepeatedDnaSequences("AAAAAAAAAAAAA")); // ["AAAAAAAAAAAAA"]
console.log(findRepeatedDnaSequences("AAAAAAAAAAA")); // ["AAAAAAAAAAA"]
