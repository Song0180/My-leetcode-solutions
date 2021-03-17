# Definition for a binary tree node.
class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

# recursive approach
# Time: O(n^2)
# Space: O(n) in the worst case, O(logn) on average.


class Solution:
    def buildTree(self, preorder: List[int], inorder: List[int]) -> TreeNode:

        def build(preorder: List[int], preStart: int, preEnd: int,
                  inorder: List[int], inStart: int, inEnd: int) -> TreeNode:
            # base case: when no node to add
            if (preStart > preEnd):
                return None

            # the first item of the preorder list will always be the root of the tree
            rootNum = preorder[preStart]
            inlength = len(inorder)
            index = 0
            # locate the root number in the inorder list
            for i in range(inlength):
                if inorder[i] == rootNum:
                    index = i
                    break
            # the size of the left part of the tree, which is always the index of root number - the start of the inorder list
            leftSize = index - inStart

            root = TreeNode(rootNum)

            # build left part of the tree using the corresponding left part of the lists
            root.left = build(preorder, preStart + 1, preStart + leftSize,
                              inorder, inStart, index - 1)
            # build right part of the tree
            root.right = build(preorder, preStart + leftSize + 1, preEnd,
                               inorder, index + 1, inEnd)
            return root

        return build(preorder, 0, len(preorder) - 1, inorder, 0, len(inorder) - 1)
