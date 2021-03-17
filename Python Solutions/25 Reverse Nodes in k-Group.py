# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next

# recursive approach
# O(n) in both time and space
class Solution:
    # reverse nodes from start to end
    def reverse(self, start: ListNode, end: ListNode) -> ListNode:
        pre = None
        cur = start
        nxt = start

        while cur != end:
            # find next node
            nxt = cur.next
            # reverse the pointer
            cur.next = pre
            # move pre and cur to the next position
            pre = cur
            cur = nxt
        # new head is pre
        return pre

    def reverseKGroup(self, head: ListNode, k: int) -> ListNode:
        # corner case
        if head == None or k == 1:
            return head
        # start and end both starting from head, end node will move to the k position
        start = end = head

        # move end node to the k position
        for i in range(k):
            # the length of the rest of the nodes is less than k, then don't need to reverse, just return
            if end == None:
                return head
            # move forward
            end = end.next

        # if able to reverse, reverse the nodes from start to end
        newHead = self.reverse(start, end)
        # reverse the sub list(from end to next k); connect the new tail (start) to the head of the sublist
        start.next = self.reverseKGroup(end, k)
        return newHead
