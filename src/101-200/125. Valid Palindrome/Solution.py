import re


class Solution:
    @staticmethod
    def isPalindrome(s: str) -> bool:
        processed_s = re.sub(r'[^a-z0-9]', '', s.lower())
        return processed_s == processed_s[::-1]
