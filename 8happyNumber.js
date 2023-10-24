function findSum(num) {
    let sum = 0;
    let arrNum = num.toString()

    arrNum.split("").forEach(element => {

        sum += parseInt(element) * parseInt(element)
    });
    return sum;
}



function happyNumber(num) {

    let slow = num;

    let fast = findSum(num);
  

    while(fast !== 1 && fast !== slow){

        fast =findSum(findSum(fast))
       
        slow = findSum(slow)
    
    }


    if(fast === 1){
        return true;
    }else{
        return false;
    }


  

}

console.log(happyNumber(7))