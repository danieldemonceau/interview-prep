const convertToTitle = (columnNumber: number): string => {
  let result = "";
  while (columnNumber > 0) {
    columnNumber--;
    result = String.fromCharCode((columnNumber % 26) + 65) + result;
    columnNumber = Math.floor(columnNumber / 26);
  }
  return result;
};

console.log(convertToTitle(1));
console.log(convertToTitle(28));
console.log(convertToTitle(701));

console.log(convertToTitle(26));
console.log(convertToTitle(27));
