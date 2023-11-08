export class LinkedListNode{
    val:number|null;
    next:LinkedListNode|null;
    constructor(val?:number, next?:LinkedListNode|null){
        this.val = (val=== undefined?null:val);
        this.next = (next===undefined?null:next);
    }



}


export class GlobalLinkedList{
    head:LinkedListNode|null;
    size:number;
    constructor(){
        this.head = null
        this.size = 0;
    }

    isEmpty(){
        return this.size === 0;


    }

    getSize(){
        return this.size;

    }

    prepend(value:number){
        const node = new LinkedListNode(value)
        if(this.isEmpty()){
            this.head = node;
        }else{
            node.next = this.head;
            this.head = node;
        }
        this.size++ 

    }

    append(value:number){
        const node = new LinkedListNode(value)
        if(this.isEmpty()){
            this.head = node;
        }else{
            if(this.head){
            let previous = this.head;
            while(previous.next){
                previous = previous.next
            }
            previous.next = node;
        }
        }
        
        this.size++;

    }
    insert(value:number, index:number){
        if(index<0 || index>this.size){
            console.log("invalid index")
            return;
        }
        if(index === 0){
            this.prepend(value)
        }else{
            const node = new LinkedListNode(value)

            if(this.head){
                let previousPointer = this.head;
            for(let i=0;i<index-1;i++){
                if(previousPointer.next){
                    previousPointer = previousPointer.next;

                }
               
            }
            
            //previousPointer.next here is at the index position
            node.next = previousPointer.next
            previousPointer.next = node;
            
            }

        }
        this.size++;

    }
    search(value:number){

        if(this.isEmpty())
        {
            console.log("the list is empty")
            return -1;
        }else{
            let current = this.head;
            let counter  = 0;

            while(current)
            {
                if(current.val === value)
                {
                    return counter ;
                }
                counter ++
                current = current.next;
            }
            return -1;

            
        }

    }
    removeFrom(index:number){
        if(index<0 || index>=this.size){
            console.log("invalid index")
            return null;

        }
        let removedNode;
        if(index ===0){

            removedNode = this.head;
            if(this.head?.next){
                this.head = this.head.next;
            }else{
                this.head = null;
            }

            
        }else{
            let previousPointer = this.head;

            for(let i=0;i<index-1;i++){
                if(previousPointer)
                previousPointer=previousPointer.next
            }
            if(previousPointer){
                removedNode = previousPointer.next
                if(removedNode?.next){
                    previousPointer.next = removedNode.next
                }else{
                    previousPointer.next = null
                }
               
            }
                
           
           

        }
        this.size--;
        return removedNode?.val;
    }
    reverse(){
        if(this.isEmpty()){
            
            return;
        }else{
            let previous = null;
            let current = this.head;
            

            while(current)
            {
                let next = current.next;
                current.next = previous;
                previous = current;
                current = next
              
            }
   
            this.head = previous;
            
        }
    }

    print(){
       if(this.isEmpty()){
        console.log("the list is empty")
       } else {
        let current = this.head;
        let listValues = ''
        while(current){
            listValues += `${current.val + " " }`;
            current = current.next
        }
        console.log(listValues)
       }
    }
}