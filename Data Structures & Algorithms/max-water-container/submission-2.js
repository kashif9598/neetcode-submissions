class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(height) {
        let i = 0;
    let j= height.length-1;
    let amount = 0;
    while(i<j){
        let max = Math.min(height[i], height[j]) * (j-i);
        amount = Math.max(max, amount);
        if(height[i] > height[j]){
            j--
        } else {
            i++
        }
    }
    return amount;
    }
}
