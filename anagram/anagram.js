// Modules are in strict mode by default

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
