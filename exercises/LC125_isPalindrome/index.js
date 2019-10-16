function isPalindrome(s) {
    //Sanitize the string
    s = s.toLowerCase().replace(/[\W_]/g, "");

    var left = 0;
    var right = s.length - 1;

    while (left < right) {
        if (s[left] !== s[right]) {
            return false;
        } else {
            left++;
            right--;
        }
    }

    return true;
}

module.exports = isPalindrome;
