import { LinkedListNode } from "./LinkedList";

const node1 = new LinkedListNode(1);
const node2 = new LinkedListNode(2);
const node3 = new LinkedListNode(3);
const node4 = new LinkedListNode(4);
const node5 = new LinkedListNode(5);

node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node5;

function reverseBetween(
  head: LinkedListNode | null,
  left: number,
  right: number
): LinkedListNode | null {
  if (left === right) {
    return head;
  }

  let dummyNode = new LinkedListNode();
  let dummyNode2 = new LinkedListNode();
  dummyNode2.next = head;

  let current = dummyNode2.next;
  let counter = 1;
  let start = head;
  let end = head;
  

  while (current) {
    if (counter === left) {
      start = dummyNode2;
      dummyNode.next = start.next;
    }
    if (counter === right) {
      end = current.next;
     

     

      break;
    }
    counter++;
    current = current.next;
    if (dummyNode2.next) dummyNode2 = dummyNode2.next;
  }
 
      


  let prev = end;

  if (dummyNode.next) dummyNode = dummyNode.next;

  let currentReverse = dummyNode;
 
  
  while (currentReverse && currentReverse !== end) {
    let tempNode = currentReverse.next;
    currentReverse.next = prev;
    prev = currentReverse;
    if (tempNode) {
      currentReverse = tempNode;
    }else{
      break;
    }
  
  
  }
  // console.log(start)
  // console.log(prev)

  if (start && start.val){
    console.log("hey")
    start.next = prev;
   
  }else if(start)
  {
    start = prev
  }

  return start;
}

console.log(reverseBetween(node1, 3, 4));
