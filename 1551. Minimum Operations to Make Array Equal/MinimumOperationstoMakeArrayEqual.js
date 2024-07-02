/**
 * @param {number} n
 * @return {number}
 */
var minOperations = function(n) {
    let operations = 0;
    for (let i = 0; i < n / 2; i++) {
        operations += n - ((2 * i) + 1);
    }
    return operations;
};