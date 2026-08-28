class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if(s.length !== t.length) return false
        let map = {};

        for (const char of s) {
            map[char] = (map[char] || 0) + 1;
        }
        for (const char of t) {
            map[char] = (map[char] || 0) - 1;
        }

        for (const key in map) {
            if (map[key] > 0) {
                return false;
            }
        }
        return true;
    }
}
