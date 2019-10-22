// Given a string, return the length of the longest substring without
// repeating characters.
// --- Example
// lengthOfLongestSubstring("abcabcbb") --> 3 since length of "abc"
// lengthOfLongestSubstring("bbbbb") --> 1 since length of "b"

function lengthOfLongestSubstring(s) {
    let chars = {};
    let windowStart = 0;
    let max = 0;

    //end of window will be a for loop
    for (let i = 0; i < s.length; i++) {
        let endChar = s[i];

        if (chars[endChar] >= windowStart) {
            windowStart = chars[endChar] + 1;
        }   

        chars[endChar] = i;

        max = Math.max(max, i - windowStart + 1);
    }

    return max;
}

module.exports = lengthOfLongestSubstring;
