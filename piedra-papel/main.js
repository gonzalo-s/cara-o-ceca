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
					} //Start game
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
						machineHand: action.hand,
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

					nextState.rounds =
						nextState.userWins +
						nextState.machineWins +
						nextState.ties

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

	//app.appendChild(renderStateDisplay(state))
}

const dispatch = makeDispatch(initialState, reducer, updateUi)

function piedraBtn(state) {
	const piedra = document.createElement('button')
	piedra.textContent = 'PIEDRA'
	piedra.className = 'ppt'
	function piedraHandler() {
		//si esta en Idle y selecciona piedra REQUEST_START
		// si esta Playing deshabilitar el boton
		if (state.value === 'idle') {
			dispatch({ type: 'REQUEST_START' })
		} else if (state.value === 'playing') {
			//disable button
			console.log(document.getElementsByClassName('ppt'))
			document.getElementsByClassName('ppt')

			console.log('playing')
		}
	}

	piedra.addEventListener('click', piedraHandler)

	return piedra
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
