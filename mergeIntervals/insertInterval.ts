
// function insertInterval(nums:number[][],interval:number[]):number[][]{

//     let output:number[][] = []


//     let counter = 0;
//     let inserted = false;
//     while(counter<nums.length){
//         if(interval[0]> nums[counter][0]){
//             output.push(nums[counter]);
//         }else{

//             let lastOutput :number[];
//             if(output.length){
              
//                 lastOutput = output[output.length-1]
//                 if(interval[0]>lastOutput[1] && interval[1]<nums[counter][0]){
//                    output.push(interval);
//                    inserted= true;
//                    break; 
//                 }
//                 lastOutput[1] = Math.max(interval[1], lastOutput[1]);
//                 inserted = true
//             }else{
//                 output.push(nums[counter]);
//             }
            
           
//             break;
//         }
//         counter++;
//     }
   
//     if(counter === nums.length){
//         output.push(interval);
//         inserted = true;
//     }




//     while(counter<nums.length){
//         if(interval[1]<nums[counter][1]  && !inserted){
//             console.log(nums[counter][1])
//             let lastOutput = output[output.length-1]
//             lastOutput[1] = nums[counter][1];
//             inserted = true;
//         }else if(inserted){
//             output.push(nums[counter])
//         }

     
//         counter++;
//     }

//     if(!inserted){
//         output[output.length-1][1] = interval[1];
//     }
  
//     return output;
// }



function insertInterval(intervals:number[][],newInterval:number[]):number[][]{

    let output:number[][] = []


    let counter = 0;

    while(counter<intervals.length){

        if(newInterval[0] > intervals[counter][0]){
            output.push(intervals[counter]);
        }else{
            let lastInterval = output[output.length - 1];
            if(output.length && lastInterval[1] > newInterval[0]){
              
                lastInterval[1] = Math.max(lastInterval[1], newInterval[1]);
            }else{
                output.push(newInterval)
            }
            break;
        }

        counter ++;
        

    }

     console.log(output)
    // console.log(counter)

    while(counter<intervals.length)
    {
     
       let lastInterval = output[output.length -1];

       if(lastInterval[1] >= intervals[counter][0]){
        
        lastInterval[1] = intervals[counter][1];
        console.log(intervals[counter][1])
       }else{
        output.push(intervals[counter]);
       }
       counter++;
    }


return output
}

console.log(insertInterval([[1,2],[3,5],[6,7],[8,10],[12,16]]
    ,[4,8]))


    function insert(intervals: number[][], newInterval: number[]): number[][] {
 
        let output: number[][] = [];
        let counter = 0;
    
        // Insert intervals that come before the newInterval
        while (counter < intervals.length && newInterval[0] > intervals[counter][1]) {
            output.push(intervals[counter]);
            counter++;
        }
    
        // Merge or insert the newInterval
        while (counter < intervals.length && newInterval[1] >= intervals[counter][0]) {
            newInterval[0] = Math.min(newInterval[0], intervals[counter][0]);
            newInterval[1] = Math.max(newInterval[1], intervals[counter][1]);
            counter++;
        }
        output.push(newInterval);
    
        // Merge or insert intervals that come after the newInterval
        while (counter < intervals.length) {
            let lastInterval = output[output.length - 1];
            if (lastInterval[1] >= intervals[counter][0]) {
                lastInterval[1] = Math.max(lastInterval[1], intervals[counter][1]);
            } else {
                output.push(intervals[counter]);
            }
            counter++;
        }
    
        return output;
    
    };