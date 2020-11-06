import "./Box.css";

import { useRecoilState } from "recoil";
import { checkWinner } from "../validation/checkWinner";
import { places } from "../states/places";
import { winner } from "../states/winner";
import { turn } from "../states/turn";
import { AImove } from "../ai/decision";

import { playable } from "../actions/gameStatus";
import { generatePlace } from "../actions/setPlaces";


const Box = ({data}) => {
	// holds the player value and array index
	const { item, index } = data;
	const [_places, setPlaces] = useRecoilState(places);
	const [_turn, setTurn] = useRecoilState(turn);
	const [_winner, setWinner] = useRecoilState(winner);

	const onClick = () => {
		if (!playable(item,_winner)) return
		let newPlaces = generatePlace(_places,index,_turn);
		setPlaces(newPlaces)
		if (_turn === "P1") {
			setTurn("P2");
			setTimeout(() => {
				if (!playable(item,_winner)) return
				newPlaces = generatePlace(newPlaces,AImove(newPlaces),"P2");
				setPlaces(newPlaces)
				setTurn("P1");
			}, 2000);
		}
		else {
			setTurn("P1");
		}
		if (checkWinner(newPlaces, _turn)) {
			setWinner(_turn);
			setTurn("P1");
		}
	}
	return (
		<div className={`box ${item}`} onClick={() => onClick()}>
		</div>
	)
}

export default Box;
