class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let sizes = [];
        let part = [];

        for(let s of strs){
            sizes.push(s.length);
        }
        for(let sz of sizes){
            part.push(String(sz), ',')
        }
        part.push('#');
        for(let s of strs) {
            part.push(s);
        }
        return part.join('')
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        if(str.length === 0) return []
        const hashIndex = str.indexOf('#');

        const sizePart = str.slice(0, hashIndex);
        const stringPart = str.slice(hashIndex+1);

        const sizes = sizePart.split(',').filter(s => s.length > 0).map(Number);

        const result = [];
        let index = 0;
        for(let sz of sizes){
            result.push(stringPart.slice(index, index+sz));
            index+=sz
        }
        return result
    }
}
