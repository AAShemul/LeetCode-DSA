/**
 * @param { string } s
 * @return { boolean }
 */
const isPalindrome = function (s) {
	const rev = s.replace(/[^a-z0-9]/gi, '').toLowerCase()
	return rev === rev.split('').reverse().join('')
}
