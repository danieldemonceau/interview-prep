import { ListNode } from "./classes/ListNode";

const addTwoNumbers = (
  l1: ListNode | null,
  l2: ListNode | null,
): ListNode | null => {
  const solutionHead = new ListNode(0);
  let tail: ListNode = solutionHead;
  let l1Digit = l1;
  let l2Digit = l2;
  let carry = 0;
  while (l1Digit !== null || l2Digit !== null || carry > 0) {
    let sum = (l1Digit?.val ?? 0) + (l2Digit?.val ?? 0) + carry;
    carry = Math.floor(sum / 10);
    sum = sum % 10;
    tail.next = new ListNode(sum);
    tail = tail.next;
    l1Digit = l1Digit?.next ?? null;
    l2Digit = l2Digit?.next ?? null;
  }
  return solutionHead.next;
};

console.log(
  addTwoNumbers(
    new ListNode(2, new ListNode(4, new ListNode(3))),
    new ListNode(5, new ListNode(6, new ListNode(4))),
  ),
);

console.log(addTwoNumbers(new ListNode(0), new ListNode(0)));

console.log(
  addTwoNumbers(
    new ListNode(
      9,
      new ListNode(
        9,
        new ListNode(
          9,
          new ListNode(9, new ListNode(9, new ListNode(9, new ListNode(9)))),
        ),
      ),
    ),
    new ListNode(9, new ListNode(9, new ListNode(9, new ListNode(9)))),
  ),
);
