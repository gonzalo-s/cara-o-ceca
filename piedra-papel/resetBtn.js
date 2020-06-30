export default function resetBtn(dispatch) {
	const reset = document.createElement('button')
	reset.textContent = 'RESET GAME'
	reset.addEventListener('click', resetHandler)
	function resetHandler() {
		console.log('event')

		dispatch({
			type: 'RESET_GAME',
		})
	}
	return { reset, resetHandler }
}
