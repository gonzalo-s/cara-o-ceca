export default function statsDisplays(state) {
	const userWinsStats = document.createElement('div')
	const machineWinsStats = document.createElement('div')
	const tiesStats = document.createElement('div')
	const roundsStats = document.createElement('div')
	userWinsStats.textContent = 'Player Wins: ' + state.userWins
	machineWinsStats.textContent = 'Machine Wins: ' + state.machineWins
	tiesStats.textContent = 'Ties: ' + state.ties
	roundsStats.textContent = 'Rounds: ' + state.rounds

	app.appendChild(userWinsStats)
	app.appendChild(machineWinsStats)
	app.appendChild(tiesStats)
	app.appendChild(roundsStats)
}
