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
     * @return {number[]}
     */
    preorderTraversal(root) {
        let ans = [];
        function traverse(curr){
            if(!curr) return;
            ans.push(curr.val);
            traverse(curr.left)
            traverse(curr.right)
        }
        traverse(root);
        return ans;
    }
}
