class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

const list1 = new ListNode(1);
list1.next = new ListNode(2);
list1.next.next = new ListNode(4);

const list2 = new ListNode(1);
list2.next = new ListNode(3);
list2.next.next = new ListNode(4);

function mergeTwoSortedLists(
  list1: ListNode | null,
  list2: ListNode | null
): ListNode | null {
  if (list1 === null && list2 === null) {
    return null;
  }

  let node = new ListNode();

  let mergedList = node;

  while (list1 && list2) {
    if (list1.val > list2.val) {
        node.next = list2;
        node = node.next;
        list2 = list2.next;
    } else {
        node.next = list1;
        node = node.next;
        list1 = list1.next;
    }
}

  node.next = list1 || list2;
  return mergedList.next;
}

console.log(mergeTwoSortedLists(list1, list2));
