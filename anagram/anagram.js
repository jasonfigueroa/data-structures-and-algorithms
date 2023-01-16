// Modules are in strict mode by default

/**
 * A function that checks if a string is a valid anagram of another string.
 * 
 * @param {String} str1 String containing only lowercase letters a-z or blank string 
 * @param {String} str2 String containing only lowercase letters a-z or blank string
 * @returns true if the second string is a valid anagram of the first string, otherwise it returns false
 */
function validAnagram (str1, str2) {
    if (str1.length !== str2.length) {
        return false;
    }
    
    const frequencyCounter1 = {};
    const frequencyCounter2 = {};

    for (const index in str1) {
        const char = str1.charAt(index);
        frequencyCounter1[char] = (frequencyCounter1[char] || 0) + 1;
    }

    for (const index in str2) {
        const char = str2.charAt(index);
        if (!(char in frequencyCounter1)) {
            return false;
        }
        
        frequencyCounter2[char] = (frequencyCounter2[char] || 0) + 1;

        if (frequencyCounter1[char] < frequencyCounter2[char]) {
            return false;
        }
    }

    return true;
}

export { validAnagram };
