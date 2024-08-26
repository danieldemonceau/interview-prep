/**
 Do not return anything, modify nums in-place instead.
 */
const rotateArray = (nums: number[], k: number): void => {
  if (nums.length === 1) return;
  const end = nums.splice(nums.length - (k % nums.length));
  nums.unshift(...end);
};

console.log(rotateArray([1, 2, 3, 4, 5, 6, 7], 3)); // [5,6,7,1,2,3,4]
console.log(rotateArray([-1, -100, 3, 99], 2)); // [3,99,-1,-100]
console.log(rotateArray([1, 2, 3, 4, 5, 6, 7], 10)); // [5,6,7,1,2,3,4]
console.log(rotateArray([-1, -100, 3, 99], 6)); // [3,99,-1,-100]
