var twoSum = function (nums, target) {
  let map = new Map();

  for (let i = 0; i < nums.length; i++) {
    const compliment = target - nums[i];
    if (map.has(compliment)) {
      return [map.get(compliment), i];
    } else {
      map.set(nums[i], i);
    }
  }
  return []; // Return an empty array if no solution is found
};

const nums = [1, 7, 6, 8, 2];
const target = 9;
let ans = twoSum(nums, target);
console.log(ans);
