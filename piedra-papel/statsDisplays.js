export default function statsDisplays(state) {
	const displaysWrapper = document.createElement('div')
	userWins()
	machineWins()
	ties()
	rounds()

	function userWins() {
		const userWinsStats = document.createElement('div')
		userWinsStats.textContent = 'Player Wins: ' + state.userWins
		displaysWrapper.appendChild(userWinsStats)
	}
	function machineWins() {
		const machineWinsStats = document.createElement('div')
		machineWinsStats.textContent = 'Machine Wins: ' + state.machineWins
		displaysWrapper.appendChild(machineWinsStats)
	}
	function ties() {
		const tiesStats = document.createElement('div')
		tiesStats.textContent = 'Ties: ' + state.ties
		displaysWrapper.appendChild(tiesStats)
	}
	function rounds() {
		const roundsStats = document.createElement('div')
		roundsStats.textContent = 'Rounds: ' + state.rounds
		displaysWrapper.appendChild(roundsStats)
	}

	return displaysWrapper
}
