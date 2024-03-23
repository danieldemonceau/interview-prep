import { TreeNode } from "./classes/TreeNode";

const isBalanced = (root: TreeNode | null): boolean => {
  const getHeight = (node: TreeNode | null): number => {
    if (!node) return 0;
    const leftHeight = getHeight(node.left);
    const rightHeight = getHeight(node.right);
    return leftHeight === -1 ||
      rightHeight === -1 ||
      Math.abs(leftHeight - rightHeight) > 1
      ? -1
      : Math.max(leftHeight, rightHeight) + 1;
  };
  return getHeight(root) !== -1;
};

console.log(
  isBalanced(
    new TreeNode(
      3,
      new TreeNode(9),
      new TreeNode(20, new TreeNode(15), new TreeNode(7)),
    ),
  ),
);
console.log(
  isBalanced(
    new TreeNode(
      1,
      new TreeNode(
        2,
        new TreeNode(3, new TreeNode(4), new TreeNode(4)),
        new TreeNode(3),
      ),
      new TreeNode(2),
    ),
  ),
);
console.log(isBalanced(null));
