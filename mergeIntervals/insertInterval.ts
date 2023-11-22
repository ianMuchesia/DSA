import { count } from "console";

function insertInterval(nums:number[][],interval:number[]):number[][]{

    let output:number[][] = []


    let counter = 0;

    while(counter<nums.length){
        if(interval[0]> nums[counter][0]){
            output.push(nums[counter]);
        }else{
            let lastOutput = output[output.length-1];
            
            lastOutput[1] = Math.max(nums[counter][1], lastOutput[1]);
            break;
        }
        counter++;
    }
    console.log(output)

    let inserted = false;


    while(counter<nums.length){
  
     
        if(interval[1]<nums[counter][1]  && !inserted){
            console.log(nums[counter][1])
            let lastOutput = output[output.length-1]
            lastOutput[1] = nums[counter][1];
            inserted = true;
        }else if(inserted){
            output.push(nums[counter])
        }

     
        counter++;
    }
    return output;
}


console.log(insertInterval([[1,2],[3,4],[5,8],[9,15]],[2,5]))