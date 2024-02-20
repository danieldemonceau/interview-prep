import { ListNode } from "./classes/ListNode";

const mergeTwoLists = (list1: ListNode | null, list2: ListNode | null): ListNode | null => {
  let head = new ListNode();
  let current = head;
  while (list1 && list2) {
    if (list1.val <= list2.val) {
      current.next = list1;
      list1 = list1?.next ?? null;
    } else {
      current.next = list2;
      list2 = list2?.next ?? null;
    }
    current = current.next!;
  }
  if (list1) current.next = list1;
  if (list2) current.next = list2;
  return head.next;
};

console.log(mergeTwoLists(new ListNode(1, new ListNode(2, new ListNode(4))), new ListNode(1, new ListNode(3, new ListNode(4)))));
console.log(mergeTwoLists(null, new ListNode(0)));