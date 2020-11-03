import { useRecoilValue } from "recoil";
import { _countState } from "./states";

function Label() {
	const count = useRecoilValue(_countState);

	return (
		<h3>{count}</h3>
	)
}

export default Label;
