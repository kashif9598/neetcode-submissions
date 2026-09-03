class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        // area = (j-i) * Math.min(heights[i], heights[j])
        /* if(nums[i] < nums[j]){
            i++
            } else {
            j--;
            }
        */
        let i=0;
        let j=heights.length-1;
        let maxArea = 0
        while(i<j){
            let area = (j-i) * Math.min(heights[i], heights[j]);
            maxArea = Math.max(area, maxArea);
            if(heights[i] < heights[j]){
                i++
            } else {
                j--
            }
        }
        return maxArea;
    }
}
