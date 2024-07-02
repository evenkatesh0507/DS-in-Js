 /*
 * @param {number[]} arr
 * @param {number} index
 * @param {number} count
 * @return {boolean}
 */
 const threeConsecutiveOdds = (arr, index = 0, count = 0) => {
    if (index === arr.length) {
        return false;
    }    
    if (arr[index] % 2 !== 0) {
        count++;
    } else {
        count = 0; 
    }
    if (count === 3) {
        return true;
    }    
    return threeConsecutiveOdds(arr, index + 1, count);
};