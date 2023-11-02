import { GlobalLinkedList, LinkedListNode } from "./LinkedList";

const node1 = new LinkedListNode(3)
const node2 = new LinkedListNode(2)
const node3 = new LinkedListNode(0)
const node4 = new LinkedListNode(-4)


node1.next = node2
node2.next = node3
node3.next = node4
node4.next = node2

function hasCycle(head:LinkedListNode|null, ):boolean{

   let fast = head;
   let slow = head;


   while(fast?.next && slow){
    fast =fast.next.next;
    slow = slow?.next
    if(fast === slow){
        return true;
    }
    // if(fast.next === null){
    //     return false
    // }
   
   }

    return false;
}


console.log(hasCycle(node1))