function findDuplicate(arr: number[]): number {
    let fast = 0;
    let slow = 0;

    // Move both pointers until they meet in a cycle
    do {
        slow = arr[slow]; // Move one step
        fast = arr[arr[fast]]; // Move two steps
    } while (slow !== fast);

    // Reset one of the pointers to the beginning
    slow = 0;

    // Move both pointers until they meet at the start of the cycle
    while (slow !== fast) {
        slow = arr[slow];
        fast = arr[fast];
    }

    // When they meet again, it's at the start of the cycle, which is the duplicate value
    return slow;
}

const numbers = [1, 3, 4, 2, 2];
const duplicate = findDuplicate(numbers);
console.log(`The duplicate number is: ${duplicate}`);
