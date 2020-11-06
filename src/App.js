import { RecoilRoot } from "recoil";

import Board from "./components/Board";
import Status from "./components/Status";
import RestartButton from "./components/RestartButton";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
	  <RecoilRoot>
		  <h1>React + Recoil</h1>
		  <Status />
		  <Board />
		  <RestartButton />
		  <Footer />
	  </RecoilRoot>
  );
}

export default App;
