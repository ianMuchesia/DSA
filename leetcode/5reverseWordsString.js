function reverseString(s) {
    let start = 0;
    let end = 0;

    let arr = s.split('')


    console.log(arr.length)
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== ' ' && end !== arr.length - 1) {
            end++;



        } else if (end === arr.length - 1) {
            while (start < end) {
                let temp = arr[end];
                arr[end] = arr[start]
                arr[start] = temp;
                start++;
                end--;

            }
        } else {
            end--;
            while (start < end) {
                let temp = arr[end];
                arr[end] = arr[start]
                arr[start] = temp;
                start++;
                end--;

            }
            //console.log(arr)
            start = i + 1;
            end = i + 1;
            console.log(end)
        }

    }

    return arr.join("");




}



console.log(reverseString("You are amazing"));




function reverseWords(s) {
    let start = 0;
    let end = s.length - 1;
    let reversed = [];

    while (start <= end) {
        // Find the start of the current word
        while (start <= end && s[start] === ' ') {
            start++;
        }

        // Find the end of the current word
        let wordEnd = start;
        while (wordEnd <= end && s[wordEnd] !== ' ') {
            wordEnd++;
        }

        // Extract the current word and reverse it
        let word = s.slice(start, wordEnd);
        reversed.push(word.split('').reverse().join(''));

        // Move pointers to the next word
        start = wordEnd + 1;
    }

    return reversed.join(' ');
}

console.log(reverseWords("You are amazing"));
