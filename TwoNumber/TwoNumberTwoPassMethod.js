/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const numberToIndex = {};
    for (let i = 0; i < nums.length; i++) {
        
    }
    for (let i = 0; i < nums.length; i++) {
        const numberNeeded = target - nums[i];
        if (numberToIndex[numberNeeded] != undefined && numberToIndex[numberNeeded] != i) {
            return [i, numberToIndex[numberNeeded]];
        }
    }
};