import { ListNode } from "./classes/ListNode";

const hasCycle = (head: ListNode | null): boolean => {
  if (!head || !head.next || !head.next.next) return false;
  let slowNode: ListNode | null = head.next;
  let fastNode: ListNode | null = head.next.next;
  while (fastNode) {
    if (slowNode === fastNode) return true;
    slowNode = slowNode?.next ?? null;
    fastNode = fastNode?.next?.next ?? null;
  }
  return false;
};

// console.log(hasCycle([3, 2, 0, -4]));
// console.log(hasCycle([1, 2]));
// console.log(hasCycle([1]));
