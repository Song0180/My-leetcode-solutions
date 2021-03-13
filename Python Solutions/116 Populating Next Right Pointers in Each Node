"""
# Definition for a Node.
class Node:
    def __init__(self, val: int = 0, left: 'Node' = None, right: 'Node' = None, next: 'Node' = None):
        self.val = val
        self.left = left
        self.right = right
        self.next = next
"""

# recursive approach
# Time: O(n)
# Space: O(1)
class Solution:
    def connect2Nodes(self, left: 'Node', right: 'Node'):
        if left == None or right == None:
            return

        if left.next:
            return
        left.next = right

        self.connect2Nodes(left.left, left.right)
        self.connect2Nodes(right.left, right.right)
        self.connect2Nodes(left.right, right.left)

    def connect(self, root: 'Node') -> 'Node':
        if root == None:
            return root

        self.connect2Nodes(root.left, root.right)
        return root
