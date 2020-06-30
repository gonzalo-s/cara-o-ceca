import makeDispatch from './dispatcher.js'
import resetBtn from './resetBtn.js'

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
	selectionBtns(state)
	statsDisplays(state)
	resetBtn(dispatch)
	console.log(state)
	if (state.value === 'shakingHands') {
		dispatch({
			type: 'MACHINE_SELECT_HAND',
		})
	} //porque si pongo un console log aca de state muestra un estado distinto al del console log anterior??
}
function selectionBtns(state) {
	app.appendChild(piedraBtn(state))
	app.appendChild(papelBtn(state))
	app.appendChild(tijeraBtn(state))
}
function statsDisplays(state) {
	app.appendChild(userWinsDisplay(state))
	app.appendChild(machineWinsDisplay(state))
	app.appendChild(tiesDisplay(state))
	app.appendChild(roundsDisplay(state))
}

function piedraBtn(state) {
	const piedra = document.createElement('button')
	piedra.textContent = 'PIEDRA'
	state.userHand === 'rock'
		? (piedra.style.backgroundColor = '#AA0000')
		: (piedra.style.backgroundColor = '')
	state.value === 'shakingHands'
		? (piedra.disabled = true)
		: (piedra.disabled = false)
	function piedraHandler() {
		//si esta en Idle y selecciona piedra shakingHands
		// si esta Playing deshabilitar el boton
		if (state.value === 'idle' || state.value === 'result') {
			dispatch({
				type: 'USER_SELECT_HAND',
				hand: 'rock',
			})
		}
	}

	piedra.addEventListener('click', piedraHandler)

	return piedra
}
function papelBtn(state) {
	const papel = document.createElement('button')
	papel.textContent = 'PAPEL'
	state.userHand === 'paper'
		? (papel.style.backgroundColor = '#AA0000')
		: (papel.style.backgroundColor = '')
	state.value === 'shakingHands'
		? (papel.disabled = true)
		: (papel.disabled = false)
	function papelHandler() {
		//si esta en Idle y selecciona papel shakingHands
		// si esta Playing deshabilitar el boton
		if (state.value === 'idle' || state.value === 'result') {
			dispatch({
				type: 'USER_SELECT_HAND',
				hand: 'paper',
			})
		}
	}

	papel.addEventListener('click', papelHandler)

	return papel
}
function tijeraBtn(state) {
	const tijera = document.createElement('button')
	tijera.textContent = 'TIJERA'
	state.userHand === 'scissors'
		? (tijera.style.backgroundColor = '#AA0000')
		: (tijera.style.backgroundColor = '')
	state.value === 'shakingHands'
		? (tijera.disabled = true)
		: (tijera.disabled = false)
	function tijeraHandler() {
		//si esta en Idle y selecciona tijera shakingHands
		// si esta Playing deshabilitar el boton
		if (state.value === 'idle' || state.value === 'result') {
			dispatch({
				type: 'USER_SELECT_HAND',
				hand: 'scissors',
			})
		}
	}

	tijera.addEventListener('click', tijeraHandler)

	return tijera
}
function userWinsDisplay(state) {
	const userWinsStats = document.createElement('div')
	userWinsStats.textContent = 'Player Wins: ' + state.userWins

	return userWinsStats
}
function machineWinsDisplay(state) {
	const machineWinsStats = document.createElement('div')
	machineWinsStats.textContent = 'Machine Wins: ' + state.machineWins

	return machineWinsStats
}
function tiesDisplay(state) {
	const tiesStats = document.createElement('div')
	tiesStats.textContent = 'Ties: ' + state.ties

	return tiesStats
}
function roundsDisplay(state) {
	const roundsStats = document.createElement('div')
	roundsStats.textContent = 'Rounds: ' + state.rounds

	return roundsStats
}

dispatch({ type: '' })
