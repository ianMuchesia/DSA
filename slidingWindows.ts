function maximumSubArray(nums:number[],k:number, sum:number):number[]
{

    let first = 0;
    let second = 1;
    let third = 2;

    let result:number[] = [];
    let arrSum = 0;

    arrSum = nums[0] + nums[1] + nums[k-1]
  
    if(arrSum == sum){
        result.push(nums[0] , nums[1] , nums[k-1])
    }


    for(let i=k; i<nums.length; i++)
    {
        arrSum -= nums[i-k];
        
        arrSum +=nums[i];
      
        if(arrSum === sum){
            result.push(nums[i-2], nums[i-1], nums[i])
        }


    }

    return result;
}



console.log(maximumSubArray([1, 4, 20, 3, 10, 5],3,33))