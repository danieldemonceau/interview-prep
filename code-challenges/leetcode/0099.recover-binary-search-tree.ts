import { TreeNode } from "./classes/TreeNode";

const recoverTree = (root: TreeNode | null): void => {
  let first: TreeNode | null = null;
  let second: TreeNode | null = null;
  let prev: TreeNode | null = null;

  const inorder = (node: TreeNode | null) => {
    if (!node) return;
    inorder(node.left);
    if (prev && prev.val > node.val) {
      if (!first) first = prev;
      second = node;
    }
    prev = node;
    inorder(node.right);
  };

  inorder(root);

  if (first && second) {
    const temp = (first as TreeNode).val;
    (first as TreeNode).val = (second as TreeNode).val;
    (second as TreeNode).val = temp;
  }
};

console.log(
  recoverTree(new TreeNode(1, new TreeNode(3, null, new TreeNode(2)))),
);
console.log(
  recoverTree(
    new TreeNode(2, new TreeNode(1), new TreeNode(4, new TreeNode(3))),
  ),
);
