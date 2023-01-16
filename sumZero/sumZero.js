/**
 * Function returning first pair of numbers whose sum is equal to zero.
 * Example of input: [-4, -3, -2, -1, 0, 1, 2, 5]
 * 
 * @param {Number[]} nums Sorted array of numbers
 * @returns Array containing two values whose sum is equal to zero or an empty array
 */

function sumZero(nums) {
    let head = 0;
    let tail = nums.length - 1;

    while (head < tail) {
        const sum = nums[head] + nums[tail];
        
        if (sum === 0) {
            return [nums[head], nums[tail]];
        } else if (sum < 0) {
            head++;
        } else {
            tail--;
        }
    }

    return [];
}

export {sumZero};