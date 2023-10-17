function validPalindrome(s){


    let newArray = s.split("")

let start = 0;
let end = newArray.length-1;

while(start < end){
    if(newArray[start] !== newArray[end]){
        return false
    }else{
        start++;
        end--;
    }
}

return true;

// while

}


console.log(validPalindrome("amzizma-"))