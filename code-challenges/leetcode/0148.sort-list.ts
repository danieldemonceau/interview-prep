import { ListNode } from "./classes/ListNode";

const sortList = (head: ListNode | null): ListNode | null => {
  if (!head || !head.next) return head;

  let slow: ListNode | null = head;
  let fast: ListNode | null = head;
  let prev: ListNode | null = null;
  while (fast && fast.next) {
    prev = slow;
    slow = slow?.next ?? null;
    fast = fast.next.next;
  }
  if (prev) prev.next = null;

  const left = sortList(head);
  const right = sortList(slow);

  return merge(left, right);
};

const merge = (l1: ListNode | null, l2: ListNode | null): ListNode | null => {
  const dummy = new ListNode();
  let current = dummy;

  while (l1 && l2) {
    if (l1.val < l2.val) {
      current.next = l1;
      l1 = l1.next;
    } else {
      current.next = l2;
      l2 = l2.next;
    }
    current = current.next;
  }

  if (l1) current.next = l1;
  if (l2) current.next = l2;

  return dummy.next;
};

console.log(
  sortList(new ListNode(4, new ListNode(2, new ListNode(1, new ListNode(3))))),
);
console.log(
  sortList(
    new ListNode(
      -1,
      new ListNode(5, new ListNode(3, new ListNode(4, new ListNode(0)))),
    ),
  ),
);
console.log(sortList(null));
