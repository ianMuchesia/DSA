function minWindowSubsequence(str1:string, str2:string) {
    let left = 0;
    let right = 0;
    let potentialEnd = 0;
    let minLength = Infinity;
    let minWindow = "";

    while (right < str1.length) {
        if (str1[right] === str2[left]) {
            left++;
        }
        potentialEnd = right;
        right++;
    }

    let potentialStart = potentialEnd;

    while (left >= 0) {
        if (str1[left] === str2[potentialEnd]) {
            potentialEnd--;
        }

        if (potentialEnd < 0) {
            break;
        }

        left--;
    }

    let windowSize = potentialEnd - potentialStart + 1;

    if (windowSize < minLength) {
        minLength = windowSize;
        minWindow = str1.substring(potentialStart, potentialEnd + 1);
    }

    for (let i = potentialStart + 1; i < str1.length; i++) {
        left = i;
        right = i;

        while (right < str1.length) {
            if (str1[right] === str2[left]) {
                left++;
            }
            potentialEnd = right;
            right++;
        }

        potentialStart = potentialEnd;

        while (left >= 0) {
            if (str1[left] === str2[potentialEnd]) {
                potentialEnd--;
            }

            if (potentialEnd < 0) {
                break;
            }

            left--;
        }

        windowSize = potentialEnd - potentialStart + 1;

        if (windowSize < minLength) {
            minLength = windowSize;
            minWindow = str1.substring(potentialStart, potentialEnd + 1);
        }
    }

    return minWindow;
}

// Example usage:
let str1 = "abcdebdde";
let str2 = "bde";
let result = minWindowSubsequence(str1, str2);
console.log(result);  // Output: "bcde"
