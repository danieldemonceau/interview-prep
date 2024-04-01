const longestConsecutive = (nums: number[]): number => {
  const numsSet = new Set(nums);
  let maxLength = 0;
  for (let num of numsSet) {
    let currentLength = 0;
    if (numsSet.has(num - 1)) continue;
    while (numsSet.has(num++)) currentLength++;
    maxLength = Math.max(maxLength, currentLength);
  }
  return maxLength;
};

console.log(longestConsecutive([100, 4, 200, 1, 3, 2]));
console.log(longestConsecutive([0, 3, 7, 2, 5, 8, 4, 6, 0, 1]));

// [1,1,2,1,2,2]
