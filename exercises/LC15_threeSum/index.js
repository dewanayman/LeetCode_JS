const threeSum = nums => {
    nums.sort((a,b) => a - b);
    let result = [];

    for (let i = 0; i < nums.length; i++) {   
        let num = nums[i];
        const complement = 0 - num;
        let left = i + 1;
        let right = nums.length - 1;
        
        if (i > 0 && nums[i] === nums[i-1]) {
            continue;
        } 

        while (left < right) {
            if (nums[left] + nums[right] === complement) {
                result.push([num, nums[left], nums[right]]);
                left++;     
                while (nums[left] === nums[left - 1]) {
                    left++;
                }          
            } else if (nums[left] + nums[right] < complement) {
                left++;
            } else {
                right--;
            }
        } 
    }

    return result;
};

module.exports = threeSum;
