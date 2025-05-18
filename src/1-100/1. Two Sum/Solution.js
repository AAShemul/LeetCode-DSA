// More Efficient Solution
/**
 * @param { number[] } nums
 * @param { number } target
 * @return { number[] }
 */
const twoSum = function (nums, target) {
	const numsMap = new Map()

	for (let i = 0; i < nums.length; i++) {
		let comp = target - nums[i]

		if (numsMap.has(comp)) return [ numsMap.get(comp), i ]
		numsMap.set(nums[i], i)
	}

	return []
}


// Less Efficient Solution
/**
 * @param { number[] } nums
 * @param { number } target
 * @return { number[] }
 */
const twoSum2 = function (nums, target) {
	for (let i = 0; i < nums.length - 1; i++) {
		for (let j = i + 1; j < nums.length; j++) {
			if (i !== j && nums[i] + nums[j] === target) {
				return [ i, j ]
			}
		}
	}

	return []
}
