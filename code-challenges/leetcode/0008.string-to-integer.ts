const myAtoi = (s: string): number => {
  let sol = 0;
  let sign = 1;
  let i = 0;
  while (s[i] === " ") i++;
  if (s[i] === "+") {
    i++;
  } else if (s[i] === "-") {
    sign *= -1;
    i++;
  }
  while (!isNaN(Number(s[i])) && s[i] !== " ") sol = sol * 10 + Number(s[i++]);
  return sign * sol < -(2 ** 31)
    ? -(2 ** 31)
    : sign * sol > 2 ** 31 - 1
      ? 2 ** 31 - 1
      : sign * sol;
};

console.log(myAtoi("42"));
console.log(myAtoi("   -42"));
console.log(myAtoi("4193 with words"));
console.log(myAtoi("words and 987"));
console.log(myAtoi(".42"));
console.log(myAtoi("This is text 42"));
console.log(myAtoi("+-42"));
console.log(myAtoi("-+42"));
console.log(myAtoi(" -+42"));
console.log(myAtoi("+42"));
console.log(myAtoi("21474836460"));
