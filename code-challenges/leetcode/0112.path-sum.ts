import { TreeNode } from "./classes/TreeNode";

const hasPathSum = (root: TreeNode | null, targetSum: number): boolean => {
  if (!root) return false;
  targetSum -= root.val;
  if (!root.left && !root.right && targetSum === 0) return true;
  return hasPathSum(root.left, targetSum) || hasPathSum(root.right, targetSum);
};

console.log(
  hasPathSum(
    new TreeNode(
      5,
      new TreeNode(4, new TreeNode(11, new TreeNode(7), new TreeNode(2))),
      new TreeNode(8, new TreeNode(13), new TreeNode(4, null, new TreeNode(1))),
    ),
    22,
  ),
);
console.log(hasPathSum(new TreeNode(1, new TreeNode(2), new TreeNode(3)), 5));
console.log(hasPathSum(null, 0));
