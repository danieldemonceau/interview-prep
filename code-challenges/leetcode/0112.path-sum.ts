import { TreeNode } from "./classes/TreeNode";

const hasPathSum = (root: TreeNode | null, targetSum: number): boolean => {
  console.log(root, targetSum);
  return true;
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
console.log(null, 0);
