/* eslint-disable react/jsx-no-comment-textnodes */
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Navigation from "./components/navigation";
import Accommodationsheet from "./pages/Accommodationsheet";
import Error from "./pages/Error.jsx";
import Footer from "./components/Footer";

function App() {
	return (
		<div>
			<Navigation />
			<main>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/about" element={<About />} />
					<Route path="/accomodationsheet/:id" element={<Accommodationsheet />} />
					/* path="*" fonctionnant si jamais l'url ne correspond à rien de déclaré au dessus */
					<Route path="*" element={<Error />} />
				</Routes>
			</main>
			<Footer />
		</div>
	)
}

export default App