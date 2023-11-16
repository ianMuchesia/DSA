function removeElement(nums: number[], val: number): number[] {

    let left = 0;
    let k= 0;

    let right = nums.length-1;
for(let i = 0; i<nums.length;i++){
    if(nums[right] === val){
        console.log("hey")
        right--;
    }else if(nums[i] === val){
       
        let temp = nums[right]
        nums[right] = nums[left]
        nums[left] = temp;
        right--
    }else{
     
        k++
    }
    console.log(nums)
    console.log(right)

}
console.log(k)

return nums
};


console.log(removeElement([0,1,2,2,3,0,4,2],2))