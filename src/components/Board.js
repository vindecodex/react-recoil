import "./Board.css";
import Box from "./Box";
import { useRecoilValue } from "recoil";
import { places } from "../states/places";

const Board = () => {
	const _places = useRecoilValue(places);
	return (
		<div className="board">
			{_places.map((val, index) => {
				return <Box key={index} data={{item: val, index}}/>
			})}
		</div>
	);
}

export default Board;
