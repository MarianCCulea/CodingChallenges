/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
    let arr = [];
    nums.sort();
    for (let i = 0; i < nums.length; i++) {
      for (let j = i + 1; j <= nums.length - 1; j++) {
        for (let k = j + 1; k < nums.length - 1; k++) {
          
        }
      }
      if (nums[i] + nums[j] + nums[k] == 0) {
        arr.push([nums[i], nums[j], nums[k]]);
      }
    }
    return arr;
  };
  