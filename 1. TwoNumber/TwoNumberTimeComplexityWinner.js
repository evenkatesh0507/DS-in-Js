/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    const map = {};
    for (let i = 0; i < nums.length; i++) {
        const difference = target - nums[i];
        if (difference in map) 
        {
            return [i, map[difference]];
        }
        map[nums[i]] = i
    }
 }