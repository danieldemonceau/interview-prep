import { TreeNode } from "./classes/TreeNode";

const maxDepth = (root: TreeNode | null): number => {
  if (!root) return 0;
  let maxDepth = 0;
  let nodes: (TreeNode | null)[] = [root];
  while (nodes.length > 0) {
    maxDepth++;
    const newNodes: (TreeNode | null)[] = [];
    for (const node of nodes) {
      node?.left && newNodes.push(node.left);
      node?.right && newNodes.push(node.right);
    }
    nodes = newNodes;
  }
  return maxDepth;
};

// console.log(maxDepth(new TreeNode(3, new TreeNode(9), new TreeNode(20, new TreeNode(15), new TreeNode(7)))));
// console.log(maxDepth(new TreeNode(1, null, new TreeNode(2))));
console.log(maxDepth(null));
