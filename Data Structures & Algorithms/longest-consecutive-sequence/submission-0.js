class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        let set = new Set(nums);
        let longest = 0;

        for(let n of set){
            if(!set.has(n-1)){
                let curr = n;
                let length = 1;

                while(set.has(curr+1)){
                    curr++;
                    length++
                }
                longest = Math.max(length, longest)
            }
        }
        return longest
    }
}
