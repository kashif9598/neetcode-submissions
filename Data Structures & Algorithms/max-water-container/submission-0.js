class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let max = 0;
        let n = heights.length;
        for(let i=0;i<n-1;i++){
            for(let j=i+1;j<n;j++){
                let most = Math.min(heights[i], heights[j]) * (j-i);
                max = Math.max(most, max)
            }
        }
        return max;
    }
}
