import { TreeNode } from "./classes/TreeNode";

const pathSum = (
  root: TreeNode | null,
  targetSum: number,
  path: number[] = [],
): number[][] => {
  if (!root) return [];
  targetSum -= root.val;
  const sol: number[][] = [];
  path.push(root.val);
  if (!root.left && !root.right && targetSum === 0) {
    sol.push([...path]);
  } else {
    sol.push(...pathSum(root.left, targetSum, path));
    sol.push(...pathSum(root.right, targetSum, path));
  }
  path.pop();
  return sol;
};

console.log(
  pathSum(
    new TreeNode(
      5,
      new TreeNode(4, new TreeNode(11, new TreeNode(7), new TreeNode(2))),
      new TreeNode(
        8,
        new TreeNode(13),
        new TreeNode(4, new TreeNode(5), new TreeNode(1)),
      ),
    ),
    22,
  ),
);
console.log(pathSum(new TreeNode(1, new TreeNode(2), new TreeNode(3)), 5));
console.log(pathSum(new TreeNode(1, new TreeNode(2)), 5));
