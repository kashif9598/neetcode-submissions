class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let max = 0;
        let j = heights.length-1;
        let i = 0;
        while(i<j){
            let most = Math.min(heights[i], heights[j]) * (j-i);
            max = Math.max(most, max)
            if(heights[i] < heights[j]){
                i++;
            } else {
                j--;
            }
        }
        return max;
    }
}
