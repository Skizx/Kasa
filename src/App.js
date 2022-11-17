import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Header from "./components/index.jsx";
import Accommodationsheet from "./pages/Accommodationsheet";
import Error from "./pages/Error.jsx";

function App() {
	return (
		<div>
			<Header />
			<main>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/about" element={<About />} />
					<Route path="/accomodationsheet/:id" element={<Accommodationsheet />} />
					<Route path="*" element={<Error />} />
				</Routes>
			</main>
		</div>
	)
}

export default App