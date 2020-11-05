export const generatePlace = (places, index, turn) => {
	const newPlaces = [...places];
	newPlaces[index] = turn;
	return newPlaces;
}
