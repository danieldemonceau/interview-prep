const romanToInt = (s: string): number => {
  const map: { [key: string]: number } = {
    I: 1,
    IV: 4,
    V: 5,
    IX: 9,
    X: 10,
    XL: 40,
    L: 50,
    XC: 90,
    C: 100,
    CD: 400,
    D: 500,
    CM: 900,
    M: 1000,
  };
  let sol = 0;
  for (let i = 0; i < s.length; i++) {
    if (i + 1 < s.length && map[s[i] + s[i + 1]]) {
      sol += map[s[i] + s[i + 1]];
      i++;
    } else sol += map[s[i]];
  }
  return sol;
};

console.log(romanToInt("III"));
console.log(romanToInt("LVIII"));
console.log(romanToInt("MCMXCIV"));
