const numDistinct = (
  s: string,
  t: string,
  sIndex: number = 0,
  tIndex: number = 0,
  cache: { [key: string]: number } = {},
): number => {
  if (t.length === tIndex) return 1;
  if (s.length === sIndex || s.length - sIndex < t.length - tIndex) return 0;

  const key = sIndex + "," + tIndex;

  if (key in cache) return cache[key];

  cache[key] = numDistinct(s, t, sIndex + 1, tIndex, cache);

  if (s[sIndex] === t[tIndex])
    cache[key] += numDistinct(s, t, sIndex + 1, tIndex + 1, cache);

  return cache[key];
};

console.log(numDistinct("rabbbit", "rabbit"));
console.log(numDistinct("babgbag", "bag"));
