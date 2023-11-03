import { LinkedListNode } from "./LinkedList";




const node1 = new LinkedListNode(1);
const node2 = new LinkedListNode(2);
const node3 = new LinkedListNode(6);
const node4 = new LinkedListNode(3);
const node5 = new LinkedListNode(4);
const node6 = new LinkedListNode(5);
const node7 = new LinkedListNode(6);

node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node5;
node5.next = node6;
node6.next = node7;


function removeElements(head: LinkedListNode | null, val: number): LinkedListNode | null {


    

    let prev = head;
    let current = head?.next;
   
    let node = prev;

    while(current){
        
        if (current.next && current.next.val === val) {
            console.log(current.next.val)
            if (prev) prev.next = current.next.next;
            current = current.next
          }

          if(current)current = current.next
          if (prev) prev = prev.next;
    
        
    }

    console.log(prev)

    return node
    
};

console.log(removeElements(node1,6))
