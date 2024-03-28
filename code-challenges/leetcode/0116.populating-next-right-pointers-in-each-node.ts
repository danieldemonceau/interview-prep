import { Node } from "./classes/Node";

const connect = (root: Node | null): Node | null => {
  if (!root) return null;
  let nodes: Node[] = [root];
  while (nodes.length > 0) {
    const newNodes: Node[] = [];
    let prevNode: Node | null = null;
    for (const node of nodes) {
      if (prevNode) prevNode.next = node;
      if (node.left) newNodes.push(node.left);
      if (node.right) newNodes.push(node.right);
      prevNode = node;
    }
    nodes = newNodes;
  }
  return root;
};

console.log(
  connect(
    new Node(
      1,
      new Node(2, new Node(4), new Node(5)),
      new Node(3, new Node(6), new Node(7)),
    ),
  ),
);
console.log(connect(null));
