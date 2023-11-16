
class LinkedNode {
    value: number;
    next: LinkedNode | null;

    constructor(value: number, next: LinkedNode | null) {
        this.value = value;
        this.next = next;
    }
}

const node1 = new LinkedNode(1, null);
const node2 = new LinkedNode(1, null);
const node3 = new LinkedNode(1, null);
const node4 = new LinkedNode(3, null);
const node5 = new LinkedNode(3, null);

node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node5;

function removeDuplicates(head:LinkedNode | null): LinkedNode | null{

    let slow = head;
    let fast = head;

    while(slow && fast && fast.next)

    {
        if(fast.next.value !== slow?.value )
        {
            slow.next = fast.next;
            slow = slow.next;
       
        }
        if(fast.next.next === null && fast.next.value === slow.value){
           slow.next = null;
       
        }
        fast = fast.next;
    }


    console.log(fast)
    return head

}

console.log(removeDuplicates(node1))

export {};
