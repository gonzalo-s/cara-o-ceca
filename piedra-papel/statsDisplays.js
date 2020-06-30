export default function statsDisplays(state) {
	const displaysWrapper = document.createElement('div')

	displaysWrapper.appendChild(userWins(state))
	displaysWrapper.appendChild(machineWins(state))
	displaysWrapper.appendChild(ties(state))
	displaysWrapper.appendChild(rounds(state))

	return displaysWrapper
}
function userWins(state) {
	const userWinsStats = document.createElement('div')
	userWinsStats.textContent = 'Player Wins: ' + state.userWins
	return userWinsStats
}
function machineWins(state) {
	const machineWinsStats = document.createElement('div')
	machineWinsStats.textContent = 'Machine Wins: ' + state.machineWins
	return machineWinsStats
}
function ties(state) {
	const tiesStats = document.createElement('div')
	tiesStats.textContent = 'Ties: ' + state.ties
	return tiesStats
}
function rounds(state) {
	const roundsStats = document.createElement('div')
	roundsStats.textContent = 'Rounds: ' + state.rounds
	return roundsStats
}
