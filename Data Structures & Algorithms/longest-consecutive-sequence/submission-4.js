class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        // add nums in set
        // loop over nums while(i<n)
        //check if nums[i] is the start of sequence i.e nums[i-1] should not bre present in set
        // mark it as start
        // maxLength = Math.max(length, maxLength)
        // add a while loop to check for the next consecutive num
        // while(set.has(curr + 1))

        let set = new Set(nums);
        let maxLength = 0;
        for (let num of nums) {
            let length = 1;
            // let curr;
            if (!set.has(num - 1)) {
               let curr = num;
                // length++

                while (set.has(curr + 1)) {
                    curr = curr + 1;
                    length++;
                }
            }

            maxLength = Math.max(length, maxLength);
        }
        return maxLength
    }
}
