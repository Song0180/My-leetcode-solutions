# O(log n)
class Solution:
    def search(self, nums: List[int], target: int) -> int:
        if len(nums) == 0:
            return -1
        left = 0
        right = len(nums) - 1

        while (left <= right):
            mid = (left + right) // 2
            if nums[mid] == target:
                return mid
            elif target < nums[mid]:
                right = mid - 1
            elif target > nums[mid]:
                left = mid + 1

        return -1

# 补充： 搜索左侧边界
def search_left(self, nums: List[int], target: int) -> int:
        if len(nums) == 0:
            return -1
        left = 0
        right = len(nums) - 1

        while (left <= right):
            mid = (left + right) // 2
            if nums[mid] == target:
                right = mid - 1     #!important
            elif target < nums[mid]:
                right = mid - 1
            elif target > nums[mid]:
                left = mid + 1
        # corner case:
        if left >= len(nums) or nums[left] != target:
            return -1
        return left
# 补充： 搜索右侧边界
def search_right(self, nums: List[int], target: int) -> int:
        if len(nums) == 0:
            return -1
        left = 0
        right = len(nums) - 1

        while (left <= right):
            mid = (left + right) // 2
            if nums[mid] == target:
                left = mid + 1     #!important
            elif target < nums[mid]:
                right = mid - 1
            elif target > nums[mid]:
                left = mid + 1
        # corner case:
        if right < 0 or nums[right] != target:
            return -1
        return right