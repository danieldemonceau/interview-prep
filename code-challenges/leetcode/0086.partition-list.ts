import { ListNode } from "./classes/ListNode";

const partition = (head: ListNode | null, x: number): ListNode | null => {
  const beforeXHead: ListNode | null = new ListNode(0);
  let beforeX = beforeXHead;
  const afterXHead: ListNode | null = new ListNode(0);
  let afterX = afterXHead;

  while (head) {
    if (head.val < x) {
      beforeX.next = head;
      beforeX = beforeX.next;
    } else {
      afterX.next = head;
      afterX = afterX.next;
    }
    head = head.next;
  }
  afterX.next = null;
  beforeX.next = afterXHead.next;
  return beforeXHead.next;
};

console.log(
  partition(
    new ListNode(
      1,
      new ListNode(
        4,
        new ListNode(3, new ListNode(2, new ListNode(5, new ListNode(2)))),
      ),
    ),
    3,
  ),
);
console.log(partition(new ListNode(2, new ListNode(1)), 2));
