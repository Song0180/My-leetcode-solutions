# Definition for a binary tree node.
class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

# recursive approach
# Time: O(n*n) (the function is called n times in total, and each time it needs n loops to find the max val in the worst case (sorted num list))
# Space: O(n) in worst case. O(logn) on average.
# 空间复杂度就是开了多少空间
# i j那些都是o1可以忽略
# 主要就是看申明了什么多长的list
# 递归的话就看递归的深度

class Solution1:
    def constructMaximumBinaryTree(self, nums: List[int]) -> TreeNode:
        if len(nums) < 1:
            return None
        maxNum = 0
        maxIndex = 0
        listLen = len(nums)
        for i in range(listLen):
            if nums[i] > maxNum:
                maxNum = nums[i]
                maxIndex = i
        root = TreeNode(maxNum)

        root.left = self.constructMaximumBinaryTree(nums[0:maxIndex])
        root.right = self.constructMaximumBinaryTree(
            nums[maxIndex + 1:listLen])

        return root
