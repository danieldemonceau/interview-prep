const trap = (height: number[]): number => {
  let left = 0;
  let right = height.length - 1;
  let maxLeft = 0;
  let maxRight = 0;
  let result = 0;

  while (left < right) {
    if (height[left] <= height[right]) {
      if (height[left] >= maxLeft) {
        maxLeft = height[left];
      } else {
        result += maxLeft - height[left];
      }
      left++;
    } else {
      if (height[right] >= maxRight) {
        maxRight = height[right];
      } else {
        result += maxRight - height[right];
      }
      right--;
    }
  }
  return result;
};

console.log(trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]));
console.log(trap([4, 2, 0, 3, 2, 5]));