class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let map = {};
        for(let i=0;i<nums.length;i++){
            map[nums[i]] = map[nums[i]] ? map[nums[i]] + 1 : 1;
        }

        const sorted = Object.keys(map).sort((a,b) => map[b] - map[a]);
        return sorted.slice(0,k).map(Number)
    }
}
