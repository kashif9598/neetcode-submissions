class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s, t) {
        let countT = {}
        let window = {};
        let left = 0;
        let maxLen = Infinity;
        let resStart = 0;
        let have = 0;
        for(let c of t){
            countT[c] = (countT[c] || 0) + 1;
        }
        let need = Object.keys(countT).length;

        for(let right = 0;right<s.length;right++){
            let char = s[right]
            window[char] = (window[char]||0)+1;

            if(countT[char] && window[char] === countT[char]){
                have++
            }

            while(have === need){
                let length = right-left+1;
                if(length<maxLen){
                    maxLen = length;
                    resStart = left
                }

                let leftChar = s[left];
                window[leftChar]--;

                if(countT[leftChar] && window[leftChar] < countT[leftChar]){
                    have--
                };
                left++
            }
        }
        return maxLen === Infinity ? "" : s.slice(resStart, resStart+maxLen)
    }
}
