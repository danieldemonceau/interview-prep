import { TreeNode } from "./classes/TreeNode";

const preorderTraversal = (root: TreeNode | null): number[] => {
  if (!root) return [];
  if (!root.left && !root.right) return [root?.val];
  return [
    root.val,
    ...preorderTraversal(root.left),
    ...preorderTraversal(root.right),
  ];
};

console.log(
  preorderTraversal(new TreeNode(1, null, new TreeNode(2, new TreeNode(3)))),
);
console.log(preorderTraversal(null));
console.log(preorderTraversal(new TreeNode(1)));
