function findDuplicate(nums:number[]):number{

    let fast = 0;
    let slow = 0;

    do {
        fast = nums[nums[fast]];
        slow = nums[slow]

    }while(slow !== fast)
    
    slow = 0;

    while(fast !== slow){
        fast = nums[fast]
        slow = nums[slow]
    }

    return slow;
}

console.log(findDuplicate([5, 0, 1, 3, 4, 2]))