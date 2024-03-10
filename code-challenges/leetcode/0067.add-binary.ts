const addBinary = (a: string, b: string): string => {
  const length = Math.max(a.length, b.length);
  a = a.padStart(length, "0");
  b = b.padStart(length, "0");

  let carry = 0;
  let sol = "";

  for (let i = length - 1; i > -1; i--) {
    const sum = +a[i] + +b[i] + carry;
    carry = Math.floor(sum / 2);
    sol = (sum % 2) + sol;
  }

  if (carry) sol = "1" + sol;

  return sol;
};

console.log(addBinary("11", "1"));
console.log(addBinary("1010", "1011"));
console.log(addBinary("0", "0"));
console.log(addBinary("0", "1"));
console.log(addBinary("1", "0"));
console.log(addBinary("1", "1"));
console.log(addBinary("1", "100000"));
console.log(addBinary("1111", "1111"));
