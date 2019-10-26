function canJump(nums) {
    let possible = new Array(nums.length).fill(false);
    possible[0] = true;

    for (let j = 1; j < nums.length; j++) {
        for (let i = 0; i < j; i++) {
            if (possible[i] && i + nums[i] >= j) {
                possible[j] = true;
                break;
            }
        }
    }
    return possible[nums.length - 1];

}
module.exports = canJump;
