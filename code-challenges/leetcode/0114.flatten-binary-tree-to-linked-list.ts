import { TreeNode } from "./classes/TreeNode";

const flatten = (root: TreeNode | null): void => {
  if (!root) return;

  flatten(root.right);
  flatten(root.left);

  const temp = root.right;
  root.right = root.left;
  root.left = null;

  let node = root;
  while (node.right) node = node.right;

  node.right = temp;
};

console.log(
  flatten(
    new TreeNode(
      1,
      new TreeNode(2, new TreeNode(3), new TreeNode(4)),
      new TreeNode(5, null, new TreeNode(6)),
    ),
  ),
);

console.log(flatten(null));
console.log(flatten(new TreeNode(0)));
