import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import GlobalCSS from "./styles/globalcss.ts";
import Home from "./pages/index.tsx";
import Header from "./components/Header/index.tsx";
import Footer from "./components/Footer/index.tsx";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	<BrowserRouter>
		<GlobalCSS />
		<Header />
		<Routes>
			<Route path="/" element={<Home />} />
		</Routes>
		<Footer />
	</BrowserRouter>
);
