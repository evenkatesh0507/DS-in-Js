/**
 * @param {number[]} nums
 * @param {number[]} target
 * @return {number}
 */
var makeSimilar = function(nums, target) {
    let operations = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] < target[i]) {
            nums[i] += 2;
        } else if (nums[i] > target[i]) {
            nums[i] -=2;
        }
        operations += 1;
    }
    return operations;
};