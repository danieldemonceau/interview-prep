import { ListNode } from "./classes/ListNode";

const deleteDuplicates = (head: ListNode | null): ListNode | null => {
  if (!head || !head.next) return head;
  const dummyHead: ListNode | null = new ListNode(-101, head);
  let prevNode = dummyHead;
  let currentNode: ListNode | null = dummyHead.next;
  while (currentNode) {
    while (currentNode.next && currentNode.val === currentNode.next.val)
      currentNode = currentNode.next;
    if (prevNode.next === currentNode) prevNode = prevNode.next;
    else prevNode.next = currentNode?.next;
    currentNode = currentNode?.next;
  }
  return dummyHead.next;
};

console.log(
  deleteDuplicates(
    new ListNode(
      1,
      new ListNode(
        2,
        new ListNode(
          3,
          new ListNode(3, new ListNode(4, new ListNode(4, new ListNode(5)))),
        ),
      ),
    ),
  ),
);
console.log(
  deleteDuplicates(
    new ListNode(
      1,
      new ListNode(1, new ListNode(1, new ListNode(2, new ListNode(3)))),
    ),
  ),
);
