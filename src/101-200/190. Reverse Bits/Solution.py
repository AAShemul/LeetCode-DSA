class Solution:
    @staticmethod
    def reverseBits(n: int) -> int:
        return int((bin(n)[2:]).zfill(32)[::-1], 2)
