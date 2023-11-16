class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}





function hasCycle(head){
  
     let fast = head;
     let slow = head;

     while(slow){
        slow = slow.next
        if(fast.next.next){
        fast = fast.next.next

    }else{
        return false
    }
        if(slow === fast){
            return true
        }
     }

     return false


}




const node1 = new Node(1);
const node2 = new Node(2);
const node3 = new Node(3);
const node4 = new Node(4);

node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = null;

console.log(hasCycle(node1))