class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let map = {};
        for(let num of nums){
            map[num] = (map[num] || 0) + 1
        }
        
        const buckets = Array.from({length: nums.length+1}, () => []);

        for(const num in map){
            const freq = map[num];
            buckets[freq].push(Number(num));
        }

        let result = [];
        for(let i = buckets.length-1;i>=0;i--){
            for(const num of buckets[i]){
                result.push(num);
                if(result.length === k){
                    return result
                }
            }
        }
    }
}
