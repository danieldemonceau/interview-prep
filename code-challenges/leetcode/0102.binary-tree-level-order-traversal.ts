import { TreeNode } from "./classes/TreeNode";

const zigzagLevelOrder = (root: TreeNode | null): number[][] => {
  if (!root) return [];
  let leaves: TreeNode[] = [root];
  const solution: number[][] = [];
  while (leaves.length > 0) {
    solution.push([]);
    const newLeaves: TreeNode[] = [];
    for (const leaf of leaves) {
      solution[solution.length - 1].push(leaf.val);
      if (leaf.left) newLeaves.push(leaf.left);
      if (leaf.right) newLeaves.push(leaf.right);
    }
    leaves = newLeaves;
    if (solution.length % 2 === 0) solution[solution.length - 1].reverse();
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
