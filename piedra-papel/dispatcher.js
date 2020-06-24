export default function makeDispatch(initialState, reducer, updateUI) {
	let currentState = null

	return function dispatch(action) {
		if (currentState === null) {
			currentState = initialState
		}
		currentState = reducer(currentState, action)
		updateUI({ ...currentState })
	}
}
