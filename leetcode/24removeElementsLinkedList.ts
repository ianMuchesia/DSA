import { LinkedListNode } from "./LinkedList";

const node1 = new LinkedListNode(1);
const node2 = new LinkedListNode(2);
const node3 = new LinkedListNode(2);
const node4 = new LinkedListNode(1);
// const node5 = new LinkedListNode(4);
// const node6 = new LinkedListNode(5);
// const node7 = new LinkedListNode(6);

node1.next = node2;
node2.next = node3;
node3.next = node4;
// node4.next = node5;
// node5.next = node6;
// node6.next = node7;

function removeElements(
  head: LinkedListNode | null,
  val: number
): LinkedListNode | null {
  // console.log(prev)

  while (head && head.val === val) {
    head = head.next;
  }

  let current = head;
  let prev: LinkedListNode | null = null;

  while (current) {
    if (current.val === val) {
      if (prev) {
        prev.next = current.next;
      }
    } else {
      prev = current;
    }
    current = current.next;
  }
 

  console.log(prev)
  return head;
}

console.log(removeElements(node1, 2));
