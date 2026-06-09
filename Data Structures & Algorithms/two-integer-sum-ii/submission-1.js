class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        let n = numbers.length;
        let i=0;
        let j=n-1;

        while(j>i){
            if(numbers[i] + numbers[j] > target){
                j--;
            } else if(numbers[i] + numbers[j] < target){
                i++
            } else {
                return [i+1, j+1]
            }
        }
    }
}
