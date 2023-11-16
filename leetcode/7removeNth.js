class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}


class LinkedList{
    constructor(){
        this.head = null;
        this.size = 0;
    }

    isEmpty(){
        return this.size === 0;
    }

    append(value){
        const node = new Node(value)

        if(this.isEmpty()){
            this.head = node;
        }else{
            let previous = this.head

            while(previous.next){
                previous =previous.next
            }
            previous.next = node
        
        }
        this.size++
    }

    remove(index){
        if(this.isEmpty()){
            return null;
        }
        if(index<0 || index>=this.size){
            return null;
        }

      
        let left = this.head
        let right = left.next;

       for(let i = 0;i<index-1;i++){
        right = right.next;
        left = left.next
       }

       left.next = right.next

    //    console.log(left)
    //    console.log(right)
    }

    print(){
        if(this.isEmpty()){
         console.log("the list is empty")
        } else {
         let current = this.head;
         let listValues = ''
         while(current){
             listValues += `${current.value + " " }`;
             current = current.next
         }
         console.log(listValues)
        }
     }


}


const list = new LinkedList()

list.append(10)
list.append(20)
list.append(30)
list.append(40)
list.append(50)
list.append(60)
list.append(70)
list.remove(3)
list.print()