import makeDispatch from './dispatcher.js'

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

					console.log(nextState)
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
			}
		default:
			return state
	}
}

// UI
// ===

const app = document.querySelector('#app')

function updateUI(state) {
	app.innerHTML = ''
	app.appendChild(piedraBtn(state))
	app.appendChild(papelBtn(state))
	app.appendChild(tijeraBtn(state))
	app.appendChild(userWinsDisplay(state))
	app.appendChild(machineWinsDisplay(state))
	app.appendChild(tiesDisplay(state))
	app.appendChild(roundsDisplay(state))

	console.log(state)
	if (state.value === 'shakingHands') {
		dispatch({
			type: 'MACHINE_SELECT_HAND',
		})
	} //porque si pongo un console log aca de state muestra un estado distinto al del console log anterior??
}

const dispatch = makeDispatch(initialState, reducer, updateUI)

function piedraBtn(state) {
	const piedra = document.createElement('button')
	piedra.textContent = 'PIEDRA'
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

/*
			function renderStep(state) {
				const step = document.createElement('button')
				step.textContent = 'Avanzar estado'

				function stepHandler() {
					// Si no está cargando, que inicie el request
					// Si está cargando, puede pasa a success o error aleatoriamente
					// Si está en success o error, empieza a cargar otra vez
					if (state.value === 'idle') {
						dispatch({ type: 'REQUEST_START' })
					} else if (state.value === 'loading') {
						Math.random() >= 0.5
							? dispatch({ type: 'REQUEST_SUCCESS' })
							: dispatch({ type: 'REQUEST_ERROR' })
					} else if (
						state.value === 'success' ||
						state.value === 'error'
					) {
						dispatch({ type: 'REQUEST_RESET' })
					}
				}

				step.addEventListener('click', stepHandler)
				return step
			}

			function renderStateDisplay(state) {
				const stateDisplay = document.createElement('div')

				stateDisplay.textContent = state.value

				if (state.value === 'success') {
					stateDisplay.textContent += ': ' + state.successCounter
				}

				return stateDisplay
			} */

dispatch({ type: '' })
