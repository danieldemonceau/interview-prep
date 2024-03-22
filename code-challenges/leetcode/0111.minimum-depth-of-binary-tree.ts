import { TreeNode } from "./classes/TreeNode";

const minDepth = (root: TreeNode | null): number => {
  if (!root) return 0;
  let nodes: (TreeNode | null)[] = [root];
  let depth = 0;
  while (nodes.length > 0) {
    depth++;
    const newNodes: (TreeNode | null)[] = [];
    for (const node of nodes) {
      if (!node!.left && !node!.right) return depth;
      if (node?.left) newNodes.push(node.left);
      if (node?.right) newNodes.push(node.right);
    }
    nodes = newNodes;
  }
  return depth;
};

console.log(
  minDepth(
    new TreeNode(
      3,
      new TreeNode(9),
      new TreeNode(20, new TreeNode(15), new TreeNode(7)),
    ),
  ),
);
console.log(
  minDepth(
    new TreeNode(
      2,
      null,
      new TreeNode(
        3,
        null,
        new TreeNode(4, null, new TreeNode(5, null, new TreeNode(6))),
      ),
    ),
  ),
);
