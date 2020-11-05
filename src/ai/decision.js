const chosePlace = () => {
	return Math.floor(Math.random() * 9);
}

const validatePlace = (places) => {
	const choice = chosePlace();
	console.log(choice, "think");
	if (
		places[choice] === "unsigned" &&
		(places[choice] !== "P1" || 
		places[choice] !== "P2")
	)
		return choice;
	return false;
}

const chosenPlace = (places) => {
	let found = false;
	while (!found) {
		found = validatePlace(places);
	}
	return found;
}

export const AImove = (places) => {
	return chosenPlace(places);
}
