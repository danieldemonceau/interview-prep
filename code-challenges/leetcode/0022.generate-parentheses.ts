const generateParenthesis = (n: number): string[] => {
  const solutions: string[] = [];
  const generateParenthesisHelper = (numOfOpened = 0, numOfClosed = 0, path = '') => {
    if (numOfClosed === n) {
      solutions.push(path);
      return;
    }
    if (numOfOpened < n) generateParenthesisHelper(numOfOpened + 1, numOfClosed, path + '(');
    if (numOfClosed < numOfOpened) generateParenthesisHelper(numOfOpened, numOfClosed + 1, path + ')');
  }
  generateParenthesisHelper();
  return solutions;
};

console.log(generateParenthesis(3));
console.log(generateParenthesis(1));
