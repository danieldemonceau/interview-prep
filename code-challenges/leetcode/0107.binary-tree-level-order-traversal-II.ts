import { TreeNode } from "./classes/TreeNode";

const levelOrderBottom = (root: TreeNode | null): number[][] => {
  if (!root) return [];
  const sol: number[][] = [];
  let nodes: TreeNode[] = [root];
  while (nodes.length > 0) {
    const newNodes: TreeNode[] = [];
    sol.push([]);
    for (const node of nodes) {
      sol[sol.length - 1].push(node.val);
      if (node && node.left) newNodes.push(node.left);
      if (node && node.right) newNodes.push(node.right);
    }
    nodes = newNodes;
  }
  return sol.reverse();
};

console.log(
  levelOrderBottom(
    new TreeNode(
      3,
      new TreeNode(9),
      new TreeNode(20, new TreeNode(15), new TreeNode(7)),
    ),
  ),
);
console.log(levelOrderBottom(new TreeNode(1)));
console.log(levelOrderBottom(null));
