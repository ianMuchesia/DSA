function circularArray(arr) {
    let slow = 0;
    let fast = 0;

    do {
        slow = getNextIndex(slow, arr);
        fast = getNextIndex(fast, arr);
        fast = getNextIndex(fast, arr); // Move fast pointer two steps at a time
    } while (slow !== fast);

    // Now we've found a cycle, but we need to check if it's a valid cycle
    if (slow === -1) {
        return false; // If we encountered 0, it's not a valid cycle
    }

    // If we reached here, it's a valid cycle
    return true;
}

function getNextIndex(index, arr) {
    const nextIndex = (index + arr[index]) % arr.length;

    // Check for negative values and wrap around
    return nextIndex >= 0 ? nextIndex : nextIndex + arr.length;
}

console.log(circularArray([1, 2, 3, -1])); // This will return true
