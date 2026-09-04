class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        /* 
            take a set;
            maxLen = 0;
            take 2 pointers i, j = 0;
            while(j<s.length){
            if(!set.has(s[j])){
                set.add(s[j]);
                j++
                maxLen = Math.max(maxLen, set.size)
            } else {
                set.delete(s[i]);
                i++
            }
            }
        */
        let set = new Set();
        let maxLen = 0;
        let l = 0;
        for (let r = 0; r < s.length; r++) {
            while (set.has(s[r])) {
                set.delete(s[l]);
                l++;
            }
            set.add(s[r]);
            maxLen = Math.max(maxLen, r - l + 1);
        }
        return maxLen;
    }
}
