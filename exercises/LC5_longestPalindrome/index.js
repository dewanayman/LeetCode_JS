//Given a string s, find the longest palindromic substring in s
// --- Example
// longestPalindrome("cbbd") --> "bb"
// longestPalindrome("abba") --> "abba"
// longestPalindrome("a") --> "a"

function longestPalindrome(s) {
    let startIndex = 0;
    let longestPS = 1;

    function expansion(l, r) {
        while(l >= 0 && r < s.length && s[l] === s[r]) {
        let currentLength = r - l + 1;

        if (currentLength > longestPS) {
            longestPS = currentLength;
            startIndex = l;
        }
            l -= 1;
            r += 1;
        }
    }

    for (var i = 0; i < s.length; i++) {
        //odd
        expansion(i-1, i+1);
        //even
        expansion(i, i+1);
    }

    return s.slice(startIndex, startIndex + longestPS);
}

module.exports = longestPalindrome;
