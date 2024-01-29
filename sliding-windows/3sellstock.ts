function sellStock(nums: number[]): number {
  let slow = 0;

  let currentDiff = 0;
  let maxDiff = 0;
  for (let i = 1; i < nums.length; i++) {
    currentDiff = nums[i] - nums[slow];

    if (currentDiff > maxDiff) {
      maxDiff = currentDiff;
    }

    if (currentDiff <= 0) {
      slow=i
    }
  }
  console.log(slow);
  return maxDiff;
}

console.log(sellStock([1, 2, 4, 2, 5, 7, 2, 4, 9, 0, 9]));
