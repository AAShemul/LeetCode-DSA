class Solution:
    def isValid(self, s: str) -> bool:
        stack = []
        mapping = {')': '(', '}': '{', ']': '['}

        for c in s:
            if c in mapping:
                if mapping[c] != (stack.pop() if stack else ''):
                    return False
            else:
                stack.append(c)

        return not stack
