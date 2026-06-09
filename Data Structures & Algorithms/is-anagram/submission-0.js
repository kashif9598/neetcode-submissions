class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        const map = {};

        for(let i=0;i<s.length;i++){
            map[s[i]] = map[s[i]] ? map[s[i]] + 1 : 1
        }
        for(let i=0;i<t.length;i++){
            map[t[i]] = map[t[i]] ? map[t[i]] - 1 : -1
        }

        // Object.keys(map).forEach(key => {
        //     if(map[key] !== 0){
        //         return false
        //     }
        // })

        for(const [key, value] of Object.entries(map)){
            if(value !== 0){
                return false
            }
        }
        return true;
    }
}
