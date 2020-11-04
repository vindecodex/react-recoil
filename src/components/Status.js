import { useRecoilValue } from "recoil";
import { useState, useEffect } from "react";
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
			<h2>{ message }</h2>
		</div>
	)
}
export default Status;
