/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} head
     * @param {number} n
     * @return {ListNode}
     */
    removeNthFromEnd(head, n) {
        let dummy = new ListNode();
        dummy.next = head;
        let length = 0;
        while (head) {
            length++;
            head = head.next;
        }
        let deletionIndex = length - n;
        let prev = dummy;
        for (let i = 0; i < deletionIndex; i++) {
            prev = prev.next;
        }
        prev.next = prev.next.next;
        return dummy.next;
    }
}
