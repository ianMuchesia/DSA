function removeDuplicates (nums: number[]):number[]{

    let arr:number[] = []
    let fast = 0;
    let slow = 0;

    arr.push(nums[slow])
while(fast < nums.length){
    if(nums[fast] === nums[slow]){
        fast+=1;
       

    }else{
        arr.push(nums[fast])
        slow=fast
        fast+=1;
    }

}

    return arr;
}

console.log(removeDuplicates([1,1,2]))