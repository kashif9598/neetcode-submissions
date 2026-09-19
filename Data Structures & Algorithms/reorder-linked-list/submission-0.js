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
     * @return {void}
     */
    reorderList(head) {
        //find middle
        let slow = head;
        let fast = head.next;
        while(fast && fast.next){
            slow = slow.next;
            fast = fast.next.next;
        }

        let second = slow.next;
        slow.next = null;

        // reverse 2nd half
        let prev = null;
        let curr = second;
        while(curr){
            let temp = curr.next;
            curr.next = prev;
            prev = curr;
            curr = temp;
        }

        // merge;
        let first = head;
        second = prev;
        while(second){
            let firstNext = first.next;
            let secondNext = second.next;

            first.next = second;
            second.next = firstNext;

            first = firstNext;
            second = secondNext;
        }
    }
}
