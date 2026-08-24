class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s, t) {
        if (t.length > s.length) return '';
        let countT = {};
        let window = {};
        let minLength = Infinity;
        let resultStart = 0;
        for (const char of t) {
            countT[char] = (countT[char] || 0) + 1;
        }

        let have = 0;
        let need = Object.keys(countT).length;
        let left = 0;
        for (let right = 0; right < s.length; right++) {
            const char = s[right];
            window[char] = (window[char] || 0) + 1;

            if (countT[char] && window[char] === countT[char]) {
                have++
            }

            while (have === need) {
                const length = right - left + 1;
                if (length < minLength) {
                    minLength = length;
                    resultStart = left;
                }

                let leftChar = s[left];
                window[leftChar]--;

                if (countT[leftChar] && window[leftChar] < countT[leftChar]) {
                    have--
                }
                left++
            }
        }
        return minLength === Infinity ? "" : s.slice(resultStart, resultStart + minLength)
    }
}
