const reverse = (x: number): number => {
  let sol = 0;
  while (x != 0) {
    const lastDigit = x % 10;
    sol += lastDigit;
    sol *= 10;
    x = x < 0 ? Math.ceil(x / 10) : Math.floor(x / 10);
  }
  sol /= 10;
  return (-2) ** 31 - 1 < sol && sol < 2 ** 31 ? sol : 0;
};

console.log(reverse(123));
console.log(reverse(-123));
console.log(reverse(120));
