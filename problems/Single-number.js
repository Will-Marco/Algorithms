function singleNumber(nums) {
  let sum = nums[0];
  for (let i = 1; i < nums.length; i++) {
    sum = sum ^ nums[i];
  }
  return sum;
}

console.log(singleNumber([1]));
