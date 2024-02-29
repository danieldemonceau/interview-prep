import { ListNode } from "./classes/ListNode";

const swapPairs = (head: ListNode | null): ListNode | null => {
  const dummyHead = new ListNode(0, head);
  let previousNode: ListNode = dummyHead;
  let currentNode: ListNode | null = head;
  while (currentNode && currentNode.next) {
    const nextCurrentNode: ListNode | null = currentNode.next.next;
    const nextPreviousNode = currentNode.next;

    nextPreviousNode.next = currentNode;
    currentNode.next = nextCurrentNode;
    previousNode.next = nextPreviousNode;

    previousNode = currentNode;
    currentNode = nextCurrentNode;
  }
  return dummyHead.next;
};

console.log(
  swapPairs(new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4))))),
);
console.log(swapPairs(new ListNode()));
console.log(swapPairs(new ListNode(1)));
