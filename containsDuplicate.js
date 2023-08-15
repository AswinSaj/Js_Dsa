var arr = (nums) => {
  for (let i = 0; i <= nums.length - 1; i++) {
    for (let j = 0; j < i; j++) {
      const arr = nums[i] === nums[j];
      if (arr) console.log("duplicate");
    }
  }
};
const nums = [1, 3, 4, 2, 4];
arr(nums);

//using set
// let set = new Set(nums);
// return set.size !== nums.length;
