import { TreeNode } from "./classes/TreeNode";

const sortedArrayToBST = (
  nums: number[],
  start: number = 0,
  end: number = nums.length - 1,
): TreeNode | null => {
  if (start > end) return null;
  const mid = Math.floor((start + end) / 2);
  return new TreeNode(
    nums[mid],
    sortedArrayToBST(nums, start, mid - 1),
    sortedArrayToBST(nums, mid + 1, end),
  );
};

console.log(sortedArrayToBST([-10, -3, 0, 5, 9]));
// console.log(sortedArrayToBST([1, 3]));
