const intToRoman = (num: number): string => {
  const romanToInteger: [string, number][] = [
    ["I", 1],
    ["IV", 4],
    ["V", 5],
    ["IX", 9],
    ["X", 10],
    ["XL", 40],
    ["L", 50],
    ["XC", 90],
    ["C", 100],
    ["CD", 400],
    ["D", 500],
    ["CM", 900],
    ["M", 1000],
  ];
  let sol = "";
  for (let mapIndex = romanToInteger.length - 1; mapIndex > -1; mapIndex--) {
    while (num / romanToInteger[mapIndex][1] >= 1) {
      sol += romanToInteger[mapIndex][0];
      num -= romanToInteger[mapIndex][1];
    }
  }
  return sol;
};

console.log(intToRoman(3));
console.log(intToRoman(58));
console.log(intToRoman(1994));
console.log(intToRoman(4));
console.log(intToRoman(6));
console.log(intToRoman(7));
console.log(intToRoman(8));
console.log(intToRoman(9));
