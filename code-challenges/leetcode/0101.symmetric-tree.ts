import { TreeNode } from "./classes/TreeNode";

const isSymmetric = (root: TreeNode | null): boolean => {
  if (!root) return true;
  const isSymmetricHelper = (
    leftRoot: TreeNode | null,
    rightRoot: TreeNode | null,
  ): boolean => {
    if (!leftRoot && !rightRoot) return true;
    if (!leftRoot || !rightRoot || leftRoot.val !== rightRoot.val) return false;
    return (
      isSymmetricHelper(leftRoot.left, rightRoot.right) &&
      isSymmetricHelper(leftRoot.right, rightRoot.left)
    );
  };
  return isSymmetricHelper(root.left, root.right);
};

console.log(
  isSymmetric(
    new TreeNode(
      1,
      new TreeNode(2, new TreeNode(3), new TreeNode(4)),
      new TreeNode(2, new TreeNode(4), new TreeNode(3)),
    ),
  ),
);
console.log(
  isSymmetric(
    new TreeNode(
      1,
      new TreeNode(2, null, new TreeNode(3)),
      new TreeNode(2, null, new TreeNode(3)),
    ),
  ),
);
