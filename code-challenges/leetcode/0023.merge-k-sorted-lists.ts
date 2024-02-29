import { ListNode } from "./classes/ListNode";

const mergeKLists = (lists: Array<ListNode | null>): ListNode | null => {
  const head = new ListNode();
  while (true) {
    let smallestNode: ListNode;
    for (let i = 0; i < lists.length; i++) {}
  }
  return head.next;
};

console.log(
  mergeKLists([
    new ListNode(1, new ListNode(4, new ListNode(5))),
    new ListNode(1, new ListNode(3, new ListNode(4))),
    new ListNode(2, new ListNode(6)),
  ]),
);
console.log(mergeKLists([]));
console.log(mergeKLists([new ListNode()]));
