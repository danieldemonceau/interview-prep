import { ListNode } from "./classes/ListNode";

const deleteDuplicates = (head: ListNode | null): ListNode | null => {
  if (!head || !head.next) return head;
  let currentNode: ListNode = head;
  let nextNode: ListNode | null = currentNode.next;
  while (nextNode) {
    while (nextNode && currentNode.val === nextNode.val)
      nextNode = nextNode.next;
    currentNode.next = nextNode;
    currentNode = currentNode.next!;
    nextNode = nextNode?.next ?? null;
  }
  return head;
};

console.log(
  deleteDuplicates(new ListNode(1, new ListNode(1, new ListNode(2)))),
);
console.log(
  deleteDuplicates(
    new ListNode(
      1,
      new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(3)))),
    ),
  ),
);
