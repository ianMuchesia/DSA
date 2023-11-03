import { LinkedListNode } from "./LinkedList";

const nodeA1 = new LinkedListNode(1);
const nodeA2 = new LinkedListNode(9);
const nodeA3 = new LinkedListNode(1);
const nodeA4 = new LinkedListNode(2);
const nodeA5 = new LinkedListNode(4);

nodeA1.next = nodeA2;
nodeA2.next = nodeA3;
nodeA3.next = nodeA4;
nodeA4.next = nodeA5;

const nodeB1 = new LinkedListNode(3);
const nodeB2 = new LinkedListNode(2);
const nodeB3 = new LinkedListNode(4);

nodeB1.next = nodeB2;
nodeB2.next = nodeB3;

function intersectionNode(
  headA: LinkedListNode | null,
  headB: LinkedListNode | null
): LinkedListNode | null {
  let pointerA = headA;
  let pointerB = headB;

  while (pointerA !== pointerB) {
    if (pointerB?.next === null) {
      pointerB.next = headA;
    }
    if (pointerA?.next === null) {
      pointerA.next = headB;
    }

    console.log("pointer A: ", pointerA?.val, "pointer B: ", pointerB?.val);
    if (pointerA && pointerB) {
      pointerA = pointerA?.next;
      pointerB = pointerB?.next;
    }
  }

  return pointerA;
}

function intersectionNodeEFficient(
  headA: LinkedListNode | null,
  headB: LinkedListNode | null
): LinkedListNode | null {
  let current1 = headA;
  let current2 = headB;

  let counterA = 0;
  let counterB = 0;

  while (current1 || current2) {
    if (current1 !== null) {
      current1 = current1.next;
      counterA++;
    }
    if (current2 !== null) {
      current2 = current2.next;
      counterB++;
    }
  }

  console.log("length of A is: ", counterA);
  console.log("length of B is : ", counterB);

  let nodeA = headA;
  let nodeB = headB;
  let length = Math.abs(counterA - counterB);
  let move = 0;

  if (counterA < counterB) {
    while (move < length && nodeB) {
      nodeB = nodeB.next;
      move++;
    }
  } else {
    while (move !== length && nodeA) {
      nodeA = nodeA.next;
      move++;
    }
  }

  while (nodeA && nodeB) {
    if (nodeA.val === nodeB.val) {
      return nodeA;
    }
    nodeA = nodeA?.next;
    nodeB = nodeB?.next;
  }

  return null;
}

function intersectionNodeTwoPointers(
  headA: LinkedListNode | null,
  headB: LinkedListNode
): LinkedListNode | null {
  let pointerA = headA;
  let pointerB = headB;

  while (pointerA?.val !== pointerB.val) {
    if (pointerA?.next === null) {
      pointerA.next = headA;
    }
    if (pointerB.next === null) {
      pointerB.next = headB;
    }
    if (pointerA) pointerA = pointerA?.next;
    if (pointerB) pointerB = pointerB.next;
  }

  return pointerA;
}

console.log(intersectionNodeTwoPointers(nodeA1, nodeB1));
