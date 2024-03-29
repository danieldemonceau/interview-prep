import { TreeNode } from "./classes/TreeNode";

const zigzagLevelOrder = (root: TreeNode | null): number[][] => {
  if (!root) return [];
  let leaves: TreeNode[] = [root];
  const solution: number[][] = [];
  while (leaves.length > 0) {
    const newLeaves: TreeNode[] = [];
    solution.push([]);
    for (const leaf of leaves) {
      solution[solution.length - 1].push(leaf.val);
      if (leaf.left) newLeaves.push(leaf.left);
      if (leaf.right) newLeaves.push(leaf.right);
    }
    leaves = newLeaves;
  }
  return solution;
};

console.log(
  zigzagLevelOrder(
    new TreeNode(
      3,
      new TreeNode(9),
      new TreeNode(20, new TreeNode(15), new TreeNode(7)),
    ),
  ),
);
console.log(zigzagLevelOrder(new TreeNode(1)));
console.log(zigzagLevelOrder(null));
