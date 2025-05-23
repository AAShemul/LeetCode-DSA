/**
 * @param { string } s
 * @return { boolean }
 */
const isValid = function (s) {
	const stack = []
	const mapping = { ')': '(', '}': '{', ']': '[' }

	for (const c of s.split('')) {
		if (c in mapping) {
			if (mapping[c] !== (stack.length > 0 ? stack.pop() : '')) return false
		} else {
			stack.push(c)
		}
	}

	return stack.length === 0
}
