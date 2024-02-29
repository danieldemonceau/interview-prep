const isValid = (s: string): boolean => {
  const parentheses: { [key: string]: string } = {
    "(": ")",
    "{": "}",
    "[": "]",
  };
  const parenthesesStack: string[] = [];
  for (let i = 0; i < s.length; i++) {
    if (parentheses[s[i]]) parenthesesStack.push(parentheses[s[i]]);
    else if (s[i] !== parenthesesStack.pop()) return false;
  }
  return parenthesesStack.length === 0;
};

console.log(isValid("()"));
console.log(isValid("()[]{}"));
console.log(isValid("(]"));
