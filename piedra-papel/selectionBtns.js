export default function selectionBtns(state, dispatch) {
	// [X] crear los botones con sus caracteristicas, cambios de color y estado
	// [X] hacer los appendChild
	// [X] crear event listeners
	// [X] crear funciones de event listeners
	const btnsWrapper = document.createElement('div')
	piedraBtn()
	papelBtn()
	tijeraBtn()

	function piedraBtn() {
		const piedra = document.createElement('button')
		piedra.textContent = 'PIEDRA'
		state.userHand === 'rock'
			? (piedra.style.backgroundColor = '#AA0000')
			: (piedra.style.backgroundColor = '')
		state.value === 'shakingHands'
			? (piedra.disabled = true)
			: (piedra.disabled = false)
		btnsWrapper.appendChild(piedra)
		piedra.addEventListener('click', piedraHandler)
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
	}
	function papelBtn() {
		const papel = document.createElement('button')
		papel.textContent = 'PAPEL'
		state.userHand === 'paper'
			? (papel.style.backgroundColor = '#AA0000')
			: (papel.style.backgroundColor = '')
		state.value === 'shakingHands'
			? (papel.disabled = true)
			: (papel.disabled = false)

		btnsWrapper.appendChild(papel)
		papel.addEventListener('click', papelHandler)
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
	}
	function tijeraBtn() {
		const tijera = document.createElement('button')
		tijera.textContent = 'TIJERA'
		state.userHand === 'scissors'
			? (tijera.style.backgroundColor = '#AA0000')
			: (tijera.style.backgroundColor = '')
		state.value === 'shakingHands'
			? (tijera.disabled = true)
			: (tijera.disabled = false)

		btnsWrapper.appendChild(tijera)
		tijera.addEventListener('click', tijeraHandler)

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
	}

	return btnsWrapper
}
