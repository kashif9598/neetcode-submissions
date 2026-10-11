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
     * @return {number}
     */
    maxPathSum(root) {
        let max = -Infinity
        function traverse(curr){
            if(!curr) return 0;
            let maxLeft = Math.max(0, traverse(curr.left))
            let maxRight = Math.max(0, traverse(curr.right))
            let currMax = curr.val + maxLeft + maxRight;
            max = Math.max(currMax, max)

            return curr.val + Math.max(maxLeft, maxRight);
        }
        traverse(root);
        return max;
    }
}
