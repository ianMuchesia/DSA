import { LinkedListNode } from "./LinkedList";

const node1 = new LinkedListNode(1);
const node2 = new LinkedListNode(2);
const node3 = new LinkedListNode(3);
const node4 = new LinkedListNode(4);
const node5 = new LinkedListNode(5);

// node1.next = node2;
// node2.next = node3;
// node3.next = node4;
// node4.next = node5;
function reverseList(head: LinkedListNode| null): LinkedListNode | null {
    
    let current = head;
    let prev = null;


    while(current?.next)
    {
        let temp = current.next;
        current.next = prev;
        prev = current;
        current = temp;


    }

    if(current){
        current.next = prev
    }

    
    return current;
    
};


console.log(reverseList(node1))