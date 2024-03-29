import { TreeNode } from "./classes/TreeNode";

const buildTree = (preorder: number[], inorder: number[]): TreeNode | null => {
  if (!preorder.length || !inorder.length) return null;

  const mid = inorder.indexOf(preorder[0]);

  return new TreeNode(
    preorder[0],
    buildTree(preorder.slice(1, mid + 1), inorder.slice(0, mid)),
    buildTree(preorder.slice(mid + 1), inorder.slice(mid + 1)),
  );
};

console.log(buildTree([3, 9, 20, 15, 7], [9, 3, 15, 20, 7]));
console.log(buildTree([-1], [-1]));
console.log(buildTree([1, 2, 4, 5, 3, 6, 7], [4, 2, 5, 1, 6, 3, 7]));
