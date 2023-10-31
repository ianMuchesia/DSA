class LinkNode {
  value: number;
  next: LinkNode | null;
  constructor(value?: number, next?: LinkNode | null) {
    this.value = value === undefined ? 0 : value;
    this.next = next === undefined ? null : next;
  }
}

const node1 = new LinkNode(2);
const node2 = new LinkNode(3);
const node3 = new LinkNode(5);
const node4 = new LinkNode(5);
const node5 = new LinkNode(3);
const node6 = new LinkNode(2);

node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node5;
node5.next = node6;




//console.log(node3)

function linkedListValidPalindrome(list: LinkNode): boolean {
  let fast = list;
  let slow = list;

  while (fast.next?.next && slow.next) {
    fast = fast.next.next;
    slow = slow.next;
    
  }

console.log(fast)
console.log(slow)

let current = slow.next;
let previous = null;
 
while(current)
{
    let next = current.next;

    current.next = previous;
    previous = current;
    current = next;
   

}




while(previous && list.next)
{
    if(previous.value !== list.value)
    {
       
        return false;
    }
    previous = previous.next;
    list = list.next;
}


  return true;
}

console.log(linkedListValidPalindrome(node1));
