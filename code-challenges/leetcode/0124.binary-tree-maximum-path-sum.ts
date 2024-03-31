import { TreeNode } from "./classes/TreeNode";

const maxPathSum = (root: TreeNode | null): number => {
  const maxPathSumHelper = (root: TreeNode | null): [number, number] => {
    if (!root) return [-Infinity, -Infinity];
    const [leftMaxSum, leftMaxRoot] = maxPathSumHelper(root.left);
    const [rightMaxSum, rightMaxRoot] = maxPathSumHelper(root.right);
    const maxRoot = root.val + Math.max(0, leftMaxRoot, rightMaxRoot);
    const maxSum = Math.max(
      leftMaxSum,
      rightMaxSum,
      leftMaxRoot + root.val + rightMaxRoot,
      maxRoot,
    );
    return [maxSum, maxRoot];
  };
  return maxPathSumHelper(root)[0];
};

console.log(maxPathSum(new TreeNode(1, new TreeNode(2), new TreeNode(3))));
console.log(
  maxPathSum(
    new TreeNode(
      -10,
      new TreeNode(9),
      new TreeNode(20, new TreeNode(15), new TreeNode(7)),
    ),
  ),
);
console.log(maxPathSum(new TreeNode(2, new TreeNode(-1))));
