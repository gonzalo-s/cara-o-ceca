export default function reset(dispatch) {
	const resetWrapper = document.createElement('div')

	resetBtn()

	function resetBtn() {
		const reset = document.createElement('button')
		reset.textContent = 'RESET GAME'
		reset.addEventListener('click', resetHandler)
		resetWrapper.appendChild(reset)
		function resetHandler() {
			dispatch({
				type: 'RESET_GAME',
			})
		}
	}
	return resetWrapper
}
