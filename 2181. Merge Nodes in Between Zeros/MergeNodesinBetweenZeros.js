/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var mergeNodes = function(head) {
    let a = head.next; 
    let dummy = new ListNode(0); 
    let current = dummy;
    let sum = 0;

    while (a !== null) {
        if (a.val === 0) {
            current.next = new ListNode(sum); 
            current = current.next; 
            sum = 0; 
        } else {
            sum += a.val; 
        }
        a = a.next;
    }

    return dummy.next; 
};
