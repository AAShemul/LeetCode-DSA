from typing import List


# Less Efficient Solution
class Solution:
    @staticmethod
    def twoSum(nums: List[int], target: int) -> List[int]:
        for i in range(len(nums) - 1):
            for j in range(i + 1, len(nums)):
                if i != j and nums[i] + nums[j] == target:
                    return [i, j]

        return []
