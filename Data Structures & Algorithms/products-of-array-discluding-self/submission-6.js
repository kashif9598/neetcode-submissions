class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let prefix = new Array(nums.length)
        prefix[0] = 1;
        for(let i=1;i<nums.length;i++){
            prefix[i] = prefix[i-1] * nums[i-1]
        }

        let postfix = new Array(nums.length);
        postfix[postfix.length-1] = 1;
        for(let i=postfix.length-2;i>=0;i--){
            postfix[i] = postfix[i+1] * nums[i+1]
        }
        let res = [];
        for(let i=0;i<nums.length;i++){
            res[i] = prefix[i] * postfix[i]
        }
        return res;
    }
}
