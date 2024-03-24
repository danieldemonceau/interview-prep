import { TreeNode } from "./classes/TreeNode";

const isValidBST = (
  root: TreeNode | null,
  min: number = -Infinity,
  max: number = Infinity,
): boolean => {
  if (!root) return true;
  if (root.val <= min || root.val >= max) return false;
  return (
    isValidBST(root.left, min, root.val) &&
    isValidBST(root.right, root.val, max)
  );
};

console.log(isValidBST(new TreeNode(2, new TreeNode(1), new TreeNode(3))));
console.log(
  isValidBST(
    new TreeNode(
      5,
      new TreeNode(1),
      new TreeNode(4, new TreeNode(3), new TreeNode(6)),
    ),
  ),
);
