import makeDispatch from './dispatcher.js'
import resetBtn from './resetBtn.js'
import selectionBtns from './selectionBtns.js'
import statsDisplays from './statsDisplays.js'

// State management
// ===
let initialState = {
	userWins: 0,
	machineWins: 0,
	ties: 0,
	rounds: 0, // userWins + machineWins + ties
	userHand: null,
	machineHand: null,
	value: 'idle',
}

function reducer(state, action) {
	// idle => [USER_SELECT_HAND]
	// shakingHands => [MACHINE_SELECT_HAND]
	// result => [USER_SELECT_HAND]

	switch (state.value) {
		case 'idle':
			switch (action.type) {
				case 'USER_SELECT_HAND':
					return {
						...state,
						value: 'shakingHands',
						userHand: action.hand,
					}
			}
		case 'shakingHands':
			switch (action.type) {
				case 'MACHINE_SELECT_HAND':
					// rock le gana a scissors
					// scissors le gana a paper
					// paper le gana a rock
					// si son iguales empatan (tie)

					let nextState = {
						...state,
						value: 'result',
					}
					//random select hand for machine
					let randomNum = Math.random()

					if (randomNum <= 0.33) {
						nextState.machineHand = 'rock'
					} else if (randomNum > 0.66) {
						nextState.machineHand = 'paper'
					} else {
						nextState.machineHand = 'scissors'
					}

					if (state.userHand === nextState.machineHand) {
						nextState.ties = nextState.ties + 1
					} else if (
						(state.userHand === 'rock' &&
							nextState.machineHand === 'scissors') ||
						(state.userHand === 'scissors' &&
							nextState.machineHand === 'paper') ||
						(state.userHand === 'paper' &&
							nextState.machineHand === 'rock')
					) {
						nextState.userWins = nextState.userWins + 1
					} else {
						nextState.machineWins = nextState.machineWins + 1
					}
					console.log(nextState)

					nextState.rounds =
						nextState.userWins +
						nextState.machineWins +
						nextState.ties
					nextState.userHand = null
					nextState.machineHand = null

					return nextState
			}
		case 'result':
			switch (action.type) {
				case 'USER_SELECT_HAND':
					return {
						...state,
						value: 'shakingHands',
						userHand: action.hand,
					}
				case 'RESET_GAME':
					return initialState
			}
		default:
			return state
	}
}

// UI
// ===

const app = document.querySelector('#app')
const dispatch = makeDispatch(initialState, reducer, updateUI)

function updateUI(state) {
	app.innerHTML = ''
	selectionBtns(state, dispatch)
	statsDisplays(state)
	resetBtn(dispatch)
	console.log(state)
	if (state.value === 'shakingHands') {
		dispatch({
			type: 'MACHINE_SELECT_HAND',
		})
	} //porque si pongo un console log aca de state muestra un estado distinto al del console log anterior??
}

dispatch({ type: '' })
