import { TreeNode } from "./classes/TreeNode";
const inorderTraversal = (
  root: TreeNode | null,
  path: number[] = [],
): number[] => {
  if (root) {
    inorderTraversal(root.left, path);
    path.push(root.val);
    inorderTraversal(root.right, path);
  }
  return path;
};

// const inorderTraversal = (root: TreeNode | null, path: number[] = []): number[] => {
//   if (!root) return path;
//   return [...inorderTraversal(root.left, path), root.val, ...inorderTraversal(root.right, path)];
// };

console.log(
  inorderTraversal(new TreeNode(1, null, new TreeNode(2, new TreeNode(3)))),
);
console.log(inorderTraversal(null));
console.log(inorderTraversal(new TreeNode(1)));
