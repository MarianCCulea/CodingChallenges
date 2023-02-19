/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  nums.sort((a, b) => {
    return a - b;
  });
  let result = [];
  for (let i = 0; i < nums.length - 1; i++) {
    if (!(i > 0 && nums[i] == nums[i - 1])) {
      let left = i + 1;
      let right = nums.length - 1;
      while (left < right) {
        if (nums[left] + nums[right] + nums[i] == 0) {
          result.push([nums[i], nums[left], nums[right]]);
          left++;
          right--;

          while (nums[left] == nums[left - 1] && left < right) {
            left++;
          }
          while (nums[right] == nums[right + 1] && left < right) {
            right--;
          }
        } else if (nums[left] + nums[right] + nums[i] < 0) {
          left++;
        } else {
          right--;
        }
      }
    }
  }
  return result;
};

module.exports = { threeSum };
