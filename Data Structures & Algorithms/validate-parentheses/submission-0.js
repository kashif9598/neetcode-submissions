class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        let map = {
            "(": ")",
            "[": "]",
            "{": "}",
        };
        let stack = [];
        for(const char of s){
            if(map[char]){
                stack.push(char)
            } else {
                let top = stack.pop();
                if(map[top] !== char) return false
            }
        }
        return stack.length === 0;
    }
}
