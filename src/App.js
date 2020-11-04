import { RecoilRoot } from "recoil";

import Board from "./components/Board";
import Status from "./components/Status";
import "./App.css";

function App() {
  return (
	  <RecoilRoot>
		  <h1>React + Recoil</h1>
		  <Status />
		  <Board />
	  </RecoilRoot>
  );
}

export default App;
