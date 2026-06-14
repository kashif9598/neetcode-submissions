class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        if(s.length === 1) return 1;

        if(s.length< 1) return 0;

        let start=0;
        let end = 0;
        let max = 0
        let set = new Set();

        while(end < s.length){
            if(!set.has(s[end])){
                set.add(s[end]);
                end++;
                max = Math.max(set.size, max);
            } else {
                set.delete(s[start]);
                start++
            }
        }
        return max;
    }
}
