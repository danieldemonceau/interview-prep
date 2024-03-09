const isNumber = (s: string): boolean => {
  let index = 0;

  if (s.charAt(index) === "+" || s.charAt(index) === "-") index++;

  let isNumeric = false;
  while (s.charAt(index).match(/[0-9]/)) {
    index++;
    isNumeric = true;
  }
  if (s.charAt(index) === ".") {
    index++;
    while (s.charAt(index).match(/[0-9]/)) {
      index++;
      isNumeric = true;
    }
  }

  if (isNumeric && (s.charAt(index) === "e" || s.charAt(index) === "E")) {
    index++;
    isNumeric = false;
    if (s.charAt(index) === "+" || s.charAt(index) === "-") index++;
    while (s.charAt(index).match(/[0-9]/)) {
      index++;
      isNumeric = true;
    }
  }

  return isNumeric && index === s.length;
};
// console.log(isNumber("0"));
// console.log(isNumber("e"));
// console.log(isNumber("."));

console.log(isNumber("2"));
console.log(isNumber("0089"));
console.log(isNumber("-0.1"));
console.log(isNumber("+3.14"));
console.log(isNumber("4."));
console.log(isNumber("-.9"));
console.log(isNumber("2e10")); // X
console.log(isNumber("-90E3"));
console.log(isNumber("3e+7")); //X
console.log(isNumber("+6e-1"));
console.log(isNumber("53.5e93"));
console.log(isNumber("-123.456e789"));

console.log("---");

console.log(isNumber("abc"));
console.log(isNumber("1a"));
console.log(isNumber("1e"));
console.log(isNumber("e3"));
console.log(isNumber("99e2.5"));
console.log(isNumber("--6"));
console.log(isNumber("-+3"));
console.log(isNumber("95a54e53"));
console.log(isNumber("."));
console.log(isNumber(".."));
console.log(isNumber("++"));

console.log("---");
