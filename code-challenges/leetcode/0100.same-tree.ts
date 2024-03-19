import { TreeNode } from "./classes/TreeNode";

const isSameTree = (p: TreeNode | null, q: TreeNode | null): boolean => {
  if (!p && !q) return true;
  if (!p || !q || p?.val !== q?.val) return false;
  return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
};

console.log(
  isSameTree(
    new TreeNode(1, new TreeNode(2, new TreeNode(3))),
    new TreeNode(1, new TreeNode(2, new TreeNode(3))),
  ),
);
console.log(
  isSameTree(
    new TreeNode(1, new TreeNode(2)),
    new TreeNode(1, null, new TreeNode(2)),
  ),
);
console.log(
  isSameTree(
    new TreeNode(1, new TreeNode(2, new TreeNode(1))),
    new TreeNode(1, new TreeNode(1, new TreeNode(2))),
  ),
);
