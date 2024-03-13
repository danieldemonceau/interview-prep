const sortColors = (nums: number[]): void => {
  let p0 = 0;
  let p1 = 0;
  let p2 = nums.length - 1;

  while (p1 <= p2) {
    if (nums[p1] === 0) {
      [nums[p0], nums[p1]] = [nums[p1], nums[p0]];
      p0++;
      p1++;
    } else if (nums[p1] === 2) {
      [nums[p1], nums[p2]] = [nums[p2], nums[p1]];
      p2--;
    } else {
      p1++;
    }
  }
};

console.log(sortColors([2, 0, 2, 1, 1, 0]));
console.log(sortColors([2, 0, 1]));
