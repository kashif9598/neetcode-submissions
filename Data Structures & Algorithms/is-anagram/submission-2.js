class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if (s.length !== t.length) return false;

        let obj = {};

        for (let i = 0; i < s.length; i++) {
            obj[s[i]] = (obj[s[i]] || 0) + 1;
        }

        for (let j = 0; j < t.length; j++) {
            if (!obj[t[j]]) {
                return false;
            }
            obj[t[j]]--;
        }

        return true;
    }
}
