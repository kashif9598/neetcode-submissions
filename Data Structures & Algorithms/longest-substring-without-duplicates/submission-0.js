class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
         if(s.length === 1){
        return 1;
    }
    if(s.length<1){
        return 0
    };

    let end = 0;
    let start = 0;
    let maxLen = 0;
    const unique = new Set();

    while(end < s.length){
        if(!unique.has(s[end])){
            unique.add(s[end]);
            end++;
            maxLen = Math.max(maxLen, unique.size)
        } else {
            unique.delete(s[start]);
            start++
        }
    }
    return maxLen
    }
}
