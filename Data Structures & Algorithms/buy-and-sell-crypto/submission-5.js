class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let maxProfit = 0;
        let buy = 0;
        let sell = 1;

        while(sell < prices.length){
            if(prices[buy] < prices[sell]){
                let profit = prices[sell] - prices[buy];
                maxProfit = Math.max(profit, maxProfit);
            } else {
                buy = sell;
            }
            sell++;
        }
        return maxProfit;
    }
}
