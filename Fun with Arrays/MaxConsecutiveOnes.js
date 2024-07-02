/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
    const numberoftimes = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] == nums[i + 1]) {
            numberoftimes++;
        } else {
            numberoftimes = 0;
        }
    }
    return numberoftimes;
};