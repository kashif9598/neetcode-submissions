class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let map = {};
        for(let i=0;i<strs.length;i++){
            const sortedStr = strs[i].split('').sort().join('');
            if(map[sortedStr]){
                map[sortedStr].push(strs[i])
            } else {
                map[sortedStr] = [strs[i]];
            }
        }
        return Object.values(map)
    }
}
