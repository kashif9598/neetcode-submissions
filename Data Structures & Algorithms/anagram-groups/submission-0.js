class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let map = {};
        for(let i=0;i<strs.length;i++){
            let sortedStr = strs[i].split('').sort().join('');
            map[sortedStr] = map[sortedStr] ? [...map[sortedStr],strs[i]] : [strs[i]]; 
        }
        return Object.values(map)
    }
}
