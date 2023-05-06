import React from "react";
import * as S from "./styles";
import Banner from "../components/Banner";
import { IPlaylists } from "./types";
import VideoList from "../components/VideoList";

const playlists: IPlaylists = {
	frontend: [
		{
			key: "kyFiT4ofMwk",
			title: "Como deixar o Layout Responsivo no seu site",
			category: "Front End",
		},
		{
			key: "ii5Q2fCl8C0",
			title: "Subindo Aplicações Web em Produção | Aprendendo HEROKU",
			category: "Front End",
		},
		{
			key: "kyFiT4ofMwk",
			title: "Como deixar o Layout Responsivo no seu site",
			category: "Front End",
		},
		{
			key: "ii5Q2fCl8C0",
			title: "Subindo Aplicações Web em Produção | Aprendendo HEROKU",
			category: "Front End",
		},
		{
			key: "kyFiT4ofMwk",
			title: "Como deixar o Layout Responsivo no seu site",
			category: "Front End",
		},
		{
			key: "ii5Q2fCl8C0",
			title: "Subindo Aplicações Web em Produção | Aprendendo HEROKU",
			category: "Front End",
		},
	],
};

const Home: React.FC = () => {
	return (
		<S.Home>
			<Banner videoKey={playlists.frontend[0].key} />
			<S.Container>
				<S.Wrapper backgroundColor="#69953B">
					<h2>{playlists.frontend[0].category}</h2>
					<VideoList list={playlists["frontend"]} />
				</S.Wrapper>
			</S.Container>
		</S.Home>
	);
};

export default Home;
