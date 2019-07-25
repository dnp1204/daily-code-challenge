/**
 * Company: Dropbox.
 *
 * Implement an efficient string matching algorithm.
 *
 * That is, given a string of length N and a pattern of length k, write a program that searches for
 * the pattern in the string with less than O(N * k) worst-case time complexity.
 *
 * If the pattern is found, return the start index of its location. If not, return False.
 *
 * Leetcode: https://leetcode.com/problems/implement-strstr/
 */
var strStr = function(haystack, needle) {
    if (!needle.length) return 0;
    if (!haystack.length) return -1;
    
    const table = Array(needle.length).fill(0);
    for (let i = 0, j = i + 1; j < needle.length; j++) {
        if (needle.charAt(i) === needle.charAt(j)) {
            table[j] = i + 1;
            i++;
        } else if (i !== 0) {
            i = table[i - 1];
            j--;
        }
    }
    
    let index1 = 0;
    let index2 = 0;
    
    while (index1 < haystack.length && index2 < needle.length) {
        if (haystack.charAt(index1) === needle.charAt(index2)) {
            index1++;
            index2++;
        } else if (index2 !== 0) {
            index2 = table[index2 - 1];
        } else {
            index1++;
        }
        
        if (index2 === needle.length) return index1 - needle.length;
    }
    
    return -1;
};