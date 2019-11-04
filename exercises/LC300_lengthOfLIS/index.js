function lengthOfLIS(nums) {
    if (nums.length === 0) return 0;
    let dpArray = new Array(nums.length).fill(1);
    let max = 1;
    
    for (let j = 1; j < nums.length; j++) {
        for (let i = 0; i < j; i++) {
            if (nums[j] > nums[i]) {
                dpArray[j] = Math.max(dpArray[i] + 1, dpArray[j]);
            }
        }

        max = Math.max(max, dpArray[j]);
    }

    return max;
}

module.exports = lengthOfLIS;
