import { useRecoilState } from "recoil";
import { places } from "../states/places";
import { winner } from "../states/winner";

import "./RestartButton.css";

const RestartButton = () => {
	const [ _places, setPlaces] = useRecoilState(places);
	const [ _winner, setWinner] = useRecoilState(winner);
	const onClick = () => {
		setPlaces(new Array(9).fill("unsigned"));
		setWinner("no");
	}
	return (
		<div className="restart-button" onClick={() => onClick()}>
			Resart
		</div>
	)
}

export default RestartButton;
