import { RecoilRoot } from "recoil";

import Board from "./components/Board";
import Status from "./components/Status";
import RestartButton from "./components/RestartButton";
import "./App.css";

function App() {
  return (
	  <RecoilRoot>
		  <h1>React + Recoil</h1>
		  <Status />
		  <Board />
		  <RestartButton />
	  </RecoilRoot>
  );
}

export default App;
