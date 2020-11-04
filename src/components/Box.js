import "./Box.css";

import { useRecoilState } from "recoil";
import { checkWinner } from "../validation/checkWinner";
import { places } from "../states/places";
import { winner } from "../states/winner";
import { turn } from "../states/turn";

const Box = ({data}) => {
	// holds the player value and array index
	const { item, index } = data;
	const [_places, setPlaces] = useRecoilState(places);
	const [_turn, setTurn] = useRecoilState(turn);
	const [_winner, setWinner] = useRecoilState(winner);
	const onClick = () => {
		// check if places is already clicked
		if (item !== "unsigned" || _winner !== "no") return
		// get a new copy of state
		const newPlaces = [..._places];
		// replace the specific index with player value
		newPlaces[index] = _turn;
		// updated the state
		setPlaces([...newPlaces]);
		// changing turns
		if (_turn === "P1")
			setTurn("P2");
		else
			setTurn("P1");
		if (checkWinner(newPlaces, _turn)) {
			setWinner(_turn);
		}
	}
	return (
		<div className={`box ${item}`} onClick={() => onClick()}>
		</div>
	)
}

export default Box;
