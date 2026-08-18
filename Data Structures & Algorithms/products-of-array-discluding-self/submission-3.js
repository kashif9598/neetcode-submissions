class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let prefix = new Array(nums.length);
        prefix[0] = nums[0];
        for (let i = 1; i < nums.length; i++) {
            prefix[i] = prefix[i - 1] * nums[i];
        }

        let postfix = new Array(nums.length);
        postfix[postfix.length - 1] = nums[nums.length - 1];
        for (let i = nums.length - 2; i >= 0; i--) {
            postfix[i] = postfix[i + 1] * nums[i];
        }

        let result = [];
        for (let i = 0; i < nums.length; i++) {
            let left = i === 0 ? 1 : prefix[i - 1];
            let right = i === nums.length - 1 ? 1 : postfix[i + 1];
            result[i] = left * right;
        }
        return result;
    }
}
