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
    maxDepth(root) {
        // top - down approach
        // if(!root) return 0
        // let maxDepth = 0;
        // function traverse(curr, depth){
        //     maxDepth = Math.max(maxDepth, depth);
        //     curr.left && traverse(curr.left, depth + 1)
        //     curr.right && traverse(curr.right, depth + 1)
        // }
        // traverse(root, 1)
        // return maxDepth;

        // bottom -up approach
        if(!root) return 0;
        let left = this.maxDepth(root.left);
        let right = this.maxDepth(root.right);
        return 1 + Math.max(left, right)
    }
}
