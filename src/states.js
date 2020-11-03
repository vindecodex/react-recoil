import {atom, selector} from "recoil";

export const countState = atom({
	key: "countState",
	default: 0
})

export const _countState = selector({
	key: "_countState",
	get: ({get}) => {
		const count = get(countState);
		return count;
	}
});
