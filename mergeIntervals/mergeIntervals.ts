function mergeIntervals (nums:number[][]):number[][]{
    let output:number[][] = [];

    output.push(nums[0]);

    for(let i=1;i<nums.length;i++){
        let lastOutput = output[output.length -1];
        if(lastOutput[1] >= nums[i][0]){
            let lastIndex = Math.max(lastOutput[1],nums[i][1])
            lastOutput[1] = lastIndex;
        }else{
            output.push(nums[i])
        }
    }

   

    
    return output;
}


console.log(mergeIntervals([[1,5],[4,6],[6,8],[11,15]]))