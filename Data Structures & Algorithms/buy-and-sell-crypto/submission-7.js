class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let profit = 0;
        let min = prices[0]
        for(let i=1;i<prices.length;i++){
            profit = Math.max(prices[i] - min, profit);
            min = Math.min(prices[i], min)
        }
        return profit
    }
}
