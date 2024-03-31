import { TreeNode } from "./classes/TreeNode";

const sumNumbers = (root: TreeNode | null, sum: number = 0): number => {
  if (!root) return sum;
  sum = sum * 10 + root.val;
  return !root.left && !root.right
    ? sum
    : sumNumbers(root.left, sum) + sumNumbers(root.right, sum);
};

console.log(sumNumbers(new TreeNode(1, new TreeNode(2), new TreeNode(3))));
console.log(
  sumNumbers(
    new TreeNode(
      4,
      new TreeNode(9, new TreeNode(5), new TreeNode(1)),
      new TreeNode(0),
    ),
  ),
);
