class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}


class LinkedList{
    constructor(){
        this.size =0;
        this.head = null;
    }

    isEmpty(){
        return this.size===0;
    }


    removeNth(index){
        if(index<0 || index>=this.size){
            return
        }
        
        let right = this.head.next;
        let left = this.head

        while(right.next){
            right=right.next;
            left=left.next;
        }

        


    }


    append(value){
        if(this.isEmpty()){
            const node = new Node(value)
            this.head = node;
            this.size++;
        }else{
            const node = new Node(value)
            let previous = this.head;

            while(previous.next){
                previous = previous.next 
            }
            previous.next = node;
            this.size++

        }

    }


}