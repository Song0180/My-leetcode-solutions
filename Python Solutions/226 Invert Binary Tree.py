# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right

# recursive solution
# Since each node in the tree is visited only once, the time complexity is O(n)
# where n is the number of nodes in the tree. 
# We cannot do better than that, since at the very least we have to visit each node to invert it.
# Because of recursion, O(h) function calls will be placed on the stack in the worst case, 
# where h is the height of the tree. Because h∈O(n), the space complexity is O(n).
class Solution:
    def invertTree(self, root: TreeNode) -> TreeNode:
        if root == None:
            return root
        
        temp = root.left
        root.left = root.right
        root.right = temp
        
        self.invertTree(root.left)
        self.invertTree(root.right)
        
        return root


# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right

# iterative approach
# Time: O(n)
# Space: O(n) (worst case n, for full binary tree: ceil(n/2))

import queue
class Solution2:
    def invertTree(self, root: TreeNode) -> TreeNode:
        if root == None:
            return root
        
        q = queue.Queue()
        q.put(root)
        
        while not q.empty():
            cur = q.get()
            temp = cur.left
            cur.left = cur.right
            cur.right = temp
            if cur.left is not None:
                q.put(cur.left)
            if cur.right is not None:
                q.put(cur.right)
                
        return root