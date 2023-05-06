import React from "react";
import Banner from "./components/Banner";
import { IPlaylists } from "./types";

const playlists: IPlaylists = {
	frontend: [
		{
			key: "ii5Q2fCl8C0",
			title: "Subindo Aplicações Web em Produção | Aprendendo HEROKU",
			category: "Front End",
		},
	],
};

const Home: React.FC = () => {
	return (
		<>
			<Banner videoKey={playlists.frontend[0].key} />
		</>
	);
};

export default Home;
