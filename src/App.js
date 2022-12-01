/* eslint-disable react/jsx-no-comment-textnodes */
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Navigation from "./components/navigation";
import Error from "./pages/Error.jsx";
import Footer from "./components/Footer";
import FicheLogement from "./pages/FicheLogement";

function App() {
	return (
		<div>
			<Navigation />
			<main>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/about" element={<About />} />
					<Route path="/FicheLogement/:id" element={<FicheLogement />} />
					/* path="*" fonctionnant si jamais l'url ne correspond à rien de déclaré au dessus */
					<Route path="*" element={<Error />} />
				</Routes>
			</main>
			<footer>
			<Footer />
			</footer>
		</div>
	)
}

export default App