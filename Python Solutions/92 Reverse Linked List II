# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next

# recursive method, not very efficient in space
# O(n) for both time(execute right - left times) & space(right - left nodes created in the recursion stack)
class Solution1:
    successor = None

    def reverseFirstN(self, head: ListNode, n: int) -> ListNode:
        if n == 1:
            self.successor = head.next
            return head

        last = self.reverseFirstN(head.next, n - 1)

        head.next.next = head
        head.next = self.successor

        return last

    def reverseBetween(self, head: ListNode, left: int, right: int) -> ListNode:
        if left == right:
            return head
        if left == 1:
            return self.reverseFirstN(head, right)

        head.next = self.reverseBetween(head.next, left - 1, right - 1)
        return head

# iterative approach,
# O(n) for time (move to left, and loop for right - left times); O(1) for space


class Solution2:
    def reverseBetween(self, head: ListNode, left: int, right: int) -> ListNode:
        dummy = ListNode()
        dummy.next = head
        prev, cur = dummy, head

        # 前进到left需要range(left - 1), prev指着的是left前一个node, cur指着的是left第一个node.
        for i in range(left - 1):
            prev = prev.next
            cur = cur.next

        # reverse nodes from left to right
        for i in range(right - left):
            # 每次都把cur node的下一个提到prev指的下一个node，即reverse list的第一个node
            # e.g. 1-2-3-4-5-6, 1是prev, 2是cur, => 1-3-2-4-5-6 => 1-4-3-2-5-6 => 1-5-4-3-2-6 => 1-6-5-4-3-2
            # prev每次指着temp是为了更新reverse list的第一个，prev本身位置没有变
            temp = cur.next
            cur.next = temp.next
            temp.next = prev.next
            prev.next = temp

        return dummy.next
