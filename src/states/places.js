import { atom } from "recoil";

export const places = atom({
	key: "places",
	default: Array(9).fill("unsigned")
});

