function twoSum(A, N, X) {
  

    let start = 0;
    let end = N - 1;

    while (start < end) {
        if (A[start] + A[end] === X){
            break;
        }else if(A[start] + A[end] < X){
            start ++;
        }else{
            end--;
        }
    }

    return [ start, end];




}


console.log(twoSum([1, 3, 4, 5, 6, 7, 8, 9], 8, 5))

