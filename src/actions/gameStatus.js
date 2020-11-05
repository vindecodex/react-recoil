export const playable = (item, winner) => {
	if (item !== "unsigned" || winner !== "no") return false;
	return true;
}
