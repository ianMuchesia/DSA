class LinkNode{
    value:number;
    next:LinkNode|null;
    constructor(value:number, next?:LinkNode|null){
        this.value = value;
        this.next = (next === undefined?null: next);

    }
}


const node1 = new LinkNode(1);

console.log(node1)


function linkedListValidPalindrome():void{

}