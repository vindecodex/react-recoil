import { useRecoilState } from "recoil";
import { countState } from "./states";

function Button() {

	const [count, setCount] = useRecoilState(countState);

	const onClick = () => {
		setCount(count + 1);
	}

	return (
		<button onClick={() => onClick}>Count {count}</button>
	);
}

export default Button;
