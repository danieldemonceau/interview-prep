const largestRectangleArea = (heights: number[]): number => {
  let maxArea = 0;
  const stack: number[] = [-1];
  for (let i = 0; i < heights.length; i++) {
    while (stack.length > 1 && heights[stack[stack.length - 1]] >= heights[i])
      maxArea = Math.max(
        maxArea,
        heights[stack.pop()!] * (i - stack[stack.length - 1] - 1),
      );
    stack.push(i);
  }
  while (stack.length > 1)
    maxArea = Math.max(
      maxArea,
      heights[stack.pop()!] * (heights.length - stack[stack.length - 1] - 1),
    );
  return maxArea;
};

console.log(largestRectangleArea([1, 2, 2]));
console.log(largestRectangleArea([2, 1, 5, 6, 2, 3]));
console.log(largestRectangleArea([2, 4]));
console.log(largestRectangleArea([2, 1, 5, 1, 6, 2, 3]));
console.log(largestRectangleArea([2, 1, 5, 1, 6, 2, 3, 2]));
console.log(largestRectangleArea([1]));
console.log(largestRectangleArea([0]));
console.log(largestRectangleArea([1, 2, 3, 4, 5]));
