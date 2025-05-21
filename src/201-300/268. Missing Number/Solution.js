// More Efficient Solution
/**
 * @param { number[] } nums
 * @return { number }
 */
const missingNumber = function (nums) {
	return ((nums.length * (nums.length + 1)) / 2) - nums.reduce((acc, cur) => acc + cur, 0)
}


// Less Efficient Solution
/**
 * @param { number[] } nums
 * @return { number }
 */
const missingNumber2 = function (nums) {
	let res = nums.length

	for (let i = 0; i < nums.length; i++) {
		res -= nums[i] - i
	}

	return res
}
