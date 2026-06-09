class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let n = nums.length;
        let prefix = new Array(n).fill(1)
        let postfix = new Array(n).fill(1)

        for(let i=1; i<n;i++){
            prefix[i] = prefix[i-1] * nums[i-1];
        }

        for(let i=n-2;i>=0;i--){
            postfix[i]=postfix[i+1] * nums[i+1];
        }

        const res = [];
        for(let i=0;i<n;i++){
            res[i] = prefix[i]*postfix[i]
        }
        return res;
    }
}
