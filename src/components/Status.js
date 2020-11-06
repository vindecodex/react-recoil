import { useRecoilValue } from "recoil";
import { useState, useEffect } from "react";
import { Grid } from "react-spinners-css";

import { winner } from "../states/winner";
import { turn } from "../states/turn";
import "./Status.css";

const Status = () => {
	const _winner = useRecoilValue(winner);
	const _turn = useRecoilValue(turn);
	const [message, setMessage] = useState("");
	useEffect(() => {
		if (_winner === "no")
			setMessage(`${_turn} turns`);
		else
			setMessage(`${_winner} wins`);
	},[_winner, _turn])
	return (
		<div className={`status`}>
			{ _turn === "P2" ? 
					(<div>
						<p>Wait for AI...</p>
						<Grid color="#ececec"/>
					</div>)
					: null
			}
			<h2>{ message }</h2>
		</div>
	)
}
export default Status;
