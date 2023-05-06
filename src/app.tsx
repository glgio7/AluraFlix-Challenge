import GlobalCSS from "./styles/globalcss";
import Header from "./components/Header";
import { Route, Routes } from "react-router-dom";
import Home from "./pages";
import NewVideo from "./pages/NewVideo";

const App = () => {
	return (
		<>
			<GlobalCSS />
			<Header />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/newvideo" element={<NewVideo />} />
			</Routes>
		</>
	);
};

export default App;
