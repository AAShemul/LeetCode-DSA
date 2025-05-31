// More Efficient Solution
/**
 * @param { number[] } nums
 * @return { boolean }
 */
const containsDuplicate = function (nums) {
	const nums_set = new Set()

	for (const n of nums) {
		if (nums_set.has(n)) {
			return true
		}

		nums_set.add(n)
	}

	return false
}


// Less Efficient Solution
/**
 * @param { number[] } nums
 * @return { boolean }
 */
const containsDuplicate2 = function (nums) {
	return (new Set(nums)).size !== nums.length
}
