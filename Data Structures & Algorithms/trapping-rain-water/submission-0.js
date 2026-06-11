class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
        let n = height.length;
        let maxL=[];
        maxL[0] = height[0];
        for(let i=1;i<n;i++){
            maxL[i] = Math.max(maxL[i-1], height[i])
        }

        let maxR = [];
        maxR[n-1] = height[n-1];
        for(let i=n-2;i>=0;i--){
            maxR[i] = Math.max(maxR[i+1], height[i])
        }

        let ans = 0;
        for(let i=0;i<n;i++){
            let water = Math.min(maxL[i], maxR[i]) - height[i];
            ans += Math.max(water, 0)
        }

        return ans;
    }
}
