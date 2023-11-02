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


function intersectionNode(headA:LinkedListNode|null, headB:LinkedListNode|null):LinkedListNode|null{

    let pointerA = headA;
    let pointerB = headB;


    while(pointerA?.val !== pointerB?.val){
        if(pointerB?.next === null){
            pointerB.next = headA;
        }
        if(pointerA?.next === null){
            pointerA.next = headB;
        }

        console.log("pointer A: ", pointerA?.val, "pointer B: ", pointerB?.val)
        if(pointerA && pointerB){
            pointerA = pointerA?.next;
            pointerB = pointerB?.next
        }
     
       
    }

    return pointerA;
}


console.log(intersectionNode(nodeA1, nodeB1))