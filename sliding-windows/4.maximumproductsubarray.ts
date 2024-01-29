function maxProduct(nums: number[]): number {

    if (!nums.length){
        return 0
    }

    if (nums.length == 1)
    {
        return nums[0]   
    }
    let maxSub = 0

    let currentProduct = 1

    let counter = 0

    while (counter < nums.length)
    {
        if(currentProduct === 0){
            currentProduct = 1
        }
        currentProduct *= nums[counter]

        if (currentProduct > maxSub)
        {
            maxSub = currentProduct
        }

        counter ++
    }

    return maxSub
    
};


console.log(maxProduct([3,-1,4]))