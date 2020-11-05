const winningCombination = [
	[0,1,2], // - _
	[3,4,5], // - _
	[6,7,8], // - _

	[0,3,6], // - |
	[1,4,7], // - |
	[2,5,8], // - |

	[0,4,8], // - \
	[6,4,2]  // - /
]

export const checkWinner = (places, turn) => {
	for (let pattern of winningCombination) {
		if (
			places[pattern[0]] === turn &&
			places[pattern[1]] === turn &&
			places[pattern[2]] === turn
		) {
			return turn;
		}
	}
	return false;
}
