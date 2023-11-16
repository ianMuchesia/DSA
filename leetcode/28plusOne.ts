function plusOne(digits: number[]): number[] {


    let counter = digits.length-1;

    while(counter>=0)
    {
        let current = digits[counter];
 
        if(current === 9)
        {
            if(counter === 0){
                digits[counter] = 0;
                digits.unshift(1);
                break;
            }
            digits[counter] = 0;
            counter--;
        }else
        {
          
            digits[counter]  = current + 1;
            break
        }
    }
    


    return digits
};


console.log(plusOne([9,9,9]))