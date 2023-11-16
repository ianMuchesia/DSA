class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

const node1 = new Node(1);
const node2 = new Node(2);
const node3 = new Node(3);
const node4 = new Node(4);
const node5 = new Node(5);
const node6 = new Node(6);

node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node5;
node5.next = node6;


function middleNode(head){

    let fast = head;
    let slow = head;
    // console.log(slow)

    while(fast){
        if(fast.next && fast.next.next){
            fast = fast.next.next
            slow =  slow.next
        }else if(fast.next){
            fast = fast.next
            slow = slow.next;
        }else{
            return slow
        }
       
       
    }
  
}


console.log(middleNode(node1))