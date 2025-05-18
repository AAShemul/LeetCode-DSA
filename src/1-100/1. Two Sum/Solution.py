from typing import List


# More Efficient Solution
class Solution:
    @staticmethod
    def twoSum(nums: List[int], target: int) -> List[int]:
        numsMap = {}

        for i in range(len(nums)):
            comp = target - nums[i]

            if comp in numsMap:
                return [numsMap[comp], i]

            numsMap[nums[i]] = i

        return []


# Less Efficient Solution
class Solution2:
    @staticmethod
    def twoSum(nums: List[int], target: int) -> List[int]:
        for i in range(len(nums) - 1):
            for j in range(i + 1, len(nums)):
                if i != j and nums[i] + nums[j] == target:
                    return [i, j]

        return []
