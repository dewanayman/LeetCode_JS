function isAnagram(s, t) {
    if (s.length !== t.length) {
        return false;
    }

    let sChar = {};

    // insert count of each char in s
    for (let i = 0; i < s.length; i++) {
        let char = s[i];

        sChar[char] = sChar[char] + 1 || 1;
    }

    for (let k = 0; k < t.length; k++) {
        let tChar = t[k];
        if (!sChar[tChar]) {
            return false;
        } else {
            sChar[tChar]--;
        }
    }

    return true;

}

module.exports = isAnagram;
