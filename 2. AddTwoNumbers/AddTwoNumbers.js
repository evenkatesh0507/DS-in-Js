/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
    let pointer1 = l1, 
        pointer2 = l2, 
        number1 = 0,   
        number2 = 0, 
        carry = 0,
        solution = new ListNode (0),
        current = solution;

    while (pointer1 || pointer2) {
        number1 = (pointer1) ? pointer1.val : 0;
        number2 = (pointer2) ? pointer2.val : 0;
        if (number1 + number2 + carry > 9) {
            current.next = new ListNode (number1 + number2 + carry - 10);
            current = current.next;
            carry = 1;
        } else {
            current.next = new ListNode (number1 + number2 + carry);
            current = current.next;
            carry = 0;
        }
        if (pointer1) pointer1 = pointer1.next;
        if (pointer2) pointer2 = pointer2.next;
        if (carry) current.next = new ListNode (carry);
    }
    return solution.next;
};