from typing import List


# More Efficient Solution
class Solution:
    def missingNumber(self, nums: List[int]) -> int:
        return int((len(nums) * (len(nums) + 1)) / 2) - sum(nums)


# Less Efficient Solution
class Solution2:
    def missingNumber(self, nums: List[int]) -> int:
        res = len(nums)

        for i in range(len(nums)):
            res -= nums[i] - i

        return res
