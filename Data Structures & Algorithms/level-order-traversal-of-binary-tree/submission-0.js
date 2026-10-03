/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} root
     * @return {number[][]}
     */
    levelOrder(root) {
        if(!root) return []
        let q = [root];
        let ans = [];

        while(q.length){
            let levelArr = [];
            let levelSize = q.length;

            for(let i=0;i<levelSize;i++){
                let curr = q.shift();

                curr.left && q.push(curr.left)
                curr.right && q.push(curr.right)

                levelArr.push(curr.val);
            }
            ans.push(levelArr)
        }
        return ans;
    }
}
