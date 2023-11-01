function maxSubArray(nums:number[], k:number):number[]{

    let first = 0;
    let last = k-1;

    let arr = [];
    let sum = 0;

 while(last<nums.length)
 {
    sum = nums[first] + nums[first + 1]  + nums[last]
    console.log("nums first "+nums[first] + "nums second" + nums[first+1] + " nums third " + nums[last]);
    arr.push(sum)
    first++
    last++
 }


    return arr;
}


console.log(maxSubArray([1,2,3,4,5,6],3))