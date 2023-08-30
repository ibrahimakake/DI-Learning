function areAnagrams(str1, str2) {
    // Remove whitespace and convert strings to lowercase
    str1 = str1.replace(/\s/g, '').toLowerCase();
    str2 = str2.replace(/\s/g, '').toLowerCase();
    
    // Check if the lengths of the strings are equal
    if (str1.length !== str2.length) {
        return false;
    }
    
    // Convert strings to arrays, sort them, and compare
    const sortedStr1 = str1.split('').sort().join('');
    const sortedStr2 = str2.split('').sort().join('');
    
    return sortedStr1 === sortedStr2;
}

// Test cases
console.log(areAnagrams("Astronomer", "Moon starer")); 
console.log(areAnagrams("School master", "The classroom")); 
console.log(areAnagrams("The Morse Code", "Here come dots")); 
console.log(areAnagrams("hello", "world"));
