// function threeSum(nums, target){
//     nums.sort((a,b)=>a-b)

//     for(let i = 0; i<nums.length-2;i++){
      
//             let left = i+1;
//             let right = nums.length -1;
//             while (left<right){
//                 let total = nums[i] + nums[right] + nums[left];
//                 console.log(total)

//                 if(total === target){
//                     return true;
//                 }else if(total<target){
//                     left++;
//                 }else{
//                     right--;
//                 }
//             }
        
//     }

//     return false
// }

//console.log(threeSum([-1,2,1,-4,5,-3], -8))

function threeSum(nums, target) {
    nums.sort((a, b) => a - b);
    const result = [];

    for (let i = 0; i < nums.length - 2; i++) {
        if (i === 0 || (i > 0 && nums[i] !== nums[i - 1])) {
            let left = i + 1;
            let right = nums.length - 1;

            while (left < right) {
                const sum = nums[i] + nums[left] + nums[right];

                if (sum === target) {
                    result.push([nums[i], nums[left], nums[right]]);
                    while (left < right && nums[left] === nums[left + 1]) left++;
                    while (left < right && nums[right] === nums[right - 1]) right--;
                    left++;
                    right--;
                } else if (sum < target) {
                    left++;
                } else {
                    right--;
                }
            }
        }
    }

    return result;
}

console.log(threeSum([2,2,2], 6));
