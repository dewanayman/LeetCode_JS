function groupAnagrams(strs) {
    let group = {};

    // loop thru every word and sort them into their key
    for (let i = 0; i < strs.length; i++) {
        let word = strs[i];
        let key = word.split('').sort().join('');

        if (!group[key]) {
            group[key] = [];
        }

        group[key].push(word);
    }

    return Object.values(group);
}

module.exports = groupAnagrams;
