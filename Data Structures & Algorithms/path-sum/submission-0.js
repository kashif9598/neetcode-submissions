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
     * @param {number} targetSum
     * @return {boolean}
     */
    hasPathSum(root, targetSum) {
        if(!root) return false;
        let ans = false;
        function traverse(curr, currSum){
            let newSum = curr.val + currSum;
            if(!curr.left && !curr.right){
                if(newSum === targetSum){
                    ans = ans || true;
                }
            }
            curr.left && traverse(curr.left, newSum);
            curr.right && traverse(curr.right, newSum);
        }
        traverse(root, 0);
        return ans;
    }
}
