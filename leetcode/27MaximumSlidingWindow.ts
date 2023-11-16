


function maximumNumberInAWindow(nums:number[], w:number):number[]
{

    let deque:number[] = [nums[0]];

    let output:number[] = [];
  
    for(let i = 1;i<w;i++){
        while(deque.length > 0 && nums[i] > deque[deque.length-1]){
           
            deque.pop()
       
        }
            deque.push(nums[i])
        
    
    }

    // console.log(deque)

    output.push(deque[0])
  

   
    let right = w;
    let left = 1;
    while(right<nums.length){
        console.log("deque1 ",deque)
        if(right-left===w){
            
            deque.shift();
            left++;
        }
        
        console.log(deque)
        while(deque.length>0 && nums[right]>deque[deque.length-1])
        {
            deque.pop();
        }

        deque.push(nums[right]);
        output.push(deque[0]);
        right++;
     
        
    }

     

    //console.log(nums[right-1])


    return output;
}


// console.log(maximumNumberInAWindow([1,2,3,4,5,6,7,8,9,10],3))
console.log(maximumNumberInAWindow([1,3,-1,10,5,3,6,7],3))