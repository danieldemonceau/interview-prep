import { ListNode } from "./classes/ListNode";

const rotateRight = (head: ListNode | null, k: number): ListNode | null => {
  if (!head || k === 0) return head;
  let length = 1;
  let tail: ListNode = head;
  while (tail.next) {
    length++;
    tail = tail.next;
  }
  k = k % length;
  if (k === 0) return head;
  tail.next = head;
  for (let i = 0; i < length - k && tail.next; i++) tail = tail.next;
  head = tail.next;
  tail.next = null;
  return head;
};

console.log(
  rotateRight(
    new ListNode(
      1,
      new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5)))),
    ),
    2,
  ),
);
console.log(rotateRight(new ListNode(0, new ListNode(1, new ListNode(2))), 4));
console.log(rotateRight(new ListNode(0, new ListNode(1, new ListNode(2))), 0));
console.log(rotateRight(new ListNode(0, new ListNode(1, new ListNode(2))), 0));
console.log(rotateRight(null, 0));
console.log(rotateRight(new ListNode(1), 1));
