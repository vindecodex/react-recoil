const winningCombination = (turn) => [
	[turn,turn,turn,0,0,0,0,0,0],
	[0,0,0,turn,turn,turn,0,0,0],
	[0,0,0,0,0,0,turn,turn,turn],

	[turn,0,0,turn,0,0,turn,0,0],
	[0,turn,0,0,turn,0,0,turn,0],
	[0,0,turn,0,0,turn,0,0,turn],

	[turn,0,0,0,turn,0,0,0,turn],
	[0,0,turn,0,turn,0,turn,0,0]
]

/*
 * Make places comparable to winning combinations
 */
const FormatPosition = (places, turn) => {
	return places.map(item => {
		console.log(places)
		console.log(turn)
		if (item === turn)
			return turn;
		return 0
	})
}

export const checkWinner = (places, turn) => {
	const actualPlaces = FormatPosition(places, turn);
	for (let pattern of winningCombination(turn)) {
		if (JSON.stringify(pattern) === JSON.stringify(actualPlaces)) {
			return turn
		}
	}
	return false;
}
