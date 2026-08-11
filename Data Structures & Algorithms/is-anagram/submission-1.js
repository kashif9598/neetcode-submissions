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
            obj[s[i]] = obj[s[i]] ? obj[s[i]] + 1 : 1;
        }

        for (let j = 0; j < t.length; j++) {
            obj[t[j]] = obj[t[j]] ? obj[t[j]] - 1 : -1;
        }
        let anagram = true
        Object.values(obj).forEach((value) => {
            if(value !== 0){
                anagram = false;
            }
        });
        return anagram;
    }
}
