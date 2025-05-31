from typing import List


# More Efficient Solution
class Solution:
    @staticmethod
    def containsDuplicate(nums: List[int]) -> bool:
        num_set = set()

        for n in nums:
            if n in num_set:
                return True

            num_set.add(n)

        return False


# Less Efficient Solution
class Solution2:
    @staticmethod
    def containsDuplicate(nums: List[int]) -> bool:
        return len(set(nums)) != len(nums)
