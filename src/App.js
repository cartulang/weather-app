import "./App.css";
import "./css/bootstrap.css";

//components
import SearchLocation from "./components/SearchLocation";
import Weather from "./components/Weather";

import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<SearchLocation />} />
					<Route path="/current" element={<Weather />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
