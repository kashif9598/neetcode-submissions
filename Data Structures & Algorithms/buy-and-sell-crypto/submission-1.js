class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let n = prices.length;
        let max = 0
        let min = prices[0];
        for(let i=0;i<n;i++){
            let cost = prices[i] - min;
            max = Math.max(max, cost);
            min = Math.min(min, prices[i])
        }
        return max;
    }
}
