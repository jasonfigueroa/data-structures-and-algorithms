/**
 * Function that accepts an array of numbers and returns the total count of unique values in the array.
 * 
 * @param {Number[]} nums 
 * @returns Total count of unique values in the array that was passed in.
 */
function countUniqueValues(nums) {
    let totalUniqueValues = 0;
    let currentValue = 0;
    
    for (let i = 0; i < nums.length; i++) {
        const element = nums[i];
        
        if (i === 0 || nums[i] !== currentValue) {
            currentValue = element;
            totalUniqueValues++;
        }
    }

    return totalUniqueValues;
}

export {countUniqueValues};
