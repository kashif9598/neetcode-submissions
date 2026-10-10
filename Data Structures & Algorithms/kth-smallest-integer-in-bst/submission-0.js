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
     * @param {number} k
     * @return {number}
     */
    kthSmallest(root, k) {
        let ans = null;
        let count = k;
        function traverse(curr){
            if(ans) return;
            curr.left && traverse(curr.left);
            --count;
            if(count === 0){
                ans = curr.val;
            }
            curr.right && traverse(curr.right)
        }
        traverse(root);
        return ans;
    }
}
