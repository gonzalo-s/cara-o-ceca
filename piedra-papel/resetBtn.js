export default function reset(dispatch) {
	const resetWrapper = document.createElement('div')

	resetWrapper.appendChild(resetBtn(dispatch))

	return resetWrapper
}

function resetBtn(dispatch) {
	const reset = document.createElement('button')
	reset.textContent = 'RESET GAME'
	reset.addEventListener('click', resetHandler)
	function resetHandler() {
		dispatch({
			type: 'RESET_GAME',
		})
	}
	return reset
}
