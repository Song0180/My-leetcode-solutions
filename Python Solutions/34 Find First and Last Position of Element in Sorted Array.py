#complexity: O(logn)
# refert to solution 704 binary search
class Solution:
    def searchRange(self, nums: List[int], target: int) -> List[int]:
        if len(nums) < 1:
            return [-1, -1]

        left = 0
        right = len(nums) - 1
        # first loop to get the left bound
        while (left <= right):
            mid = (left + right) // 2

            if nums[mid] == target:
                right = mid - 1
            elif target < nums[mid]:
                right = mid - 1
            elif target > nums[mid]:
                left = mid + 1

        if left >= len(nums) or nums[left] != target:
            ansleft = -1
        else:
            ansleft = left

        if left == -1:
            left = 0
        right = len(nums) - 1

        # second loop to get the right bound
        while (left <= right):
            mid = (left + right) // 2

            if nums[mid] == target:
                left = mid + 1
            elif target < nums[mid]:
                right = mid - 1
            elif target > nums[mid]:
                left = mid + 1
        if right < 0 or nums[right] != target:
            ansRight = -1
        else:
            ansRight = right
        return [ansleft, ansRight]
