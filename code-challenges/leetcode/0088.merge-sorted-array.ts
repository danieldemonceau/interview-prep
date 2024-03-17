const merge = (
  nums1: number[],
  m: number,
  nums2: number[],
  n: number,
): void => {
  let i = m - 1;
  let j = n - 1;
  let k = m + n - 1;

  while (i > -1 && j > -1) {
    if (nums1[i] > nums2[j]) nums1[k--] = nums1[i--];
    else nums1[k--] = nums2[j--];
  }

  while (j > -1) nums1[k--] = nums2[j--];
};

console.log(merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3));
console.log(merge([1], 1, [], 0));
console.log(merge([0], 0, [1], 1));
