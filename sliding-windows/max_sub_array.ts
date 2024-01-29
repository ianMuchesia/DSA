//using typescript
function max_sub_array(nums: number[]) {
  let maximum = nums[0];

  let currentSum = 0;

  let counter = 0;

  while (counter < nums.length) {
    if (currentSum < 0) {
      currentSum = 0;
    }

    currentSum += nums[counter];

    if (currentSum > maximum) {
      maximum = currentSum;
    }

    counter++;
  }

  return maximum;
}

console.log(max_sub_array([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
