function rob(nums) {
    if (nums.length === 0) return 0;
    if (nums.length === 1) return nums[0];
    if (nums.length === 2) return Math.max(nums[0], nums[1])

    //have an array for max loot at each house, go up to n

    let maxloot = [nums[0], Math.max(nums[0], nums[1])];

    for (let i = 2; i < nums.length; i++) {
        maxloot.push(Math.max(nums[i] + maxloot[i-2], maxloot[i-1]));
    }

    return maxloot[nums.length-1];

}

module.exports = rob;
