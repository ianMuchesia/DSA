function sortColors(nums){

    let red = 0;
    let white  = 0;
    let blue = nums.length -1;


    while (white<=blue){
        if(nums[white] === 0){
            let temp = nums[red]
            nums[red] = nums[white]
            nums[white] = temp
            //console.log(nums)
            red++;
            white++;
        }else if(nums[white] === 2){
            let temp = nums[white];
            nums[white] = nums[blue];
         
            nums[blue] = temp;
            
            blue--;
        
        }else{
            white ++;
        }
    }
    
return nums


    
}


console.log(sortColors([2, 0, 2, 1, 1, 0]))