// Given an array of integers, return an array of indices of the two numbers
// that add up to the target.
// You may assume that each input would have exactly one solution, and
// you may not use the same element twice.
// --- Examples
// twoSum([2,7,11,15], 9) --> [0,1]
// twoSum([3,2,4], 9) --> [1,2]

function twoSum(arr, target) {
    let visited = {};
    let result = [];

    for (let i = 0; i < arr.length; i++) {
        let complement = target - arr[i];

        if (visited[complement] !== undefined) {
            result.push(visited[complement]);
            result.push(i);
            return result;
        }

        visited[arr[i]] = i;
    }

    return result;
}

module.exports = twoSum;
