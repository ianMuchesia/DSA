function advancedPalindrome(s){

    const arr = s.split("")

    let start = 0;
     let end = arr.length -1;
     let counter = 0;

     while(start<end){
        if(arr[start] === arr[end]){
            start++;
            end--;
        }else if(counter <1){
            if(arr[start+1] === arr[end]){
                counter ++
                start++
            
            }else if(arr[end-1] === arr[start]){
                counter++;
                end--
                
            }else{
                return false;
            }
        }else if(end - start === 1){
            return true
        }else{
            return false
        }
     }
     return true
}


console.log(advancedPalindrome("eeccccbebaeeabebcccceea"))