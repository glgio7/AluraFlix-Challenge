import React from "react";
import * as S from "./styles";
import Banner from "../components/Banner";
import { ICategory, IVideo } from "./types";
import VideoList from "../components/VideoList";
import CategoryTitle from "../components/CategoryTitle";

const categories: ICategory[] = [
	{
		title: "Front End",
		color: "#6BD1FF",
		subtitle: "Formação Front End da Alura",
	},
	{
		title: "Data Science",
		color: "#69953B",
		subtitle: "Formação Data Science na Alura",
	},
	{
		title: "Mobile",
		color: "#FFBA05",
		subtitle: "Formação Mobile da Alura",
	},
];

const videos: IVideo[] = [
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

	{
		key: "kyFiT4ofMwk",
		title: "Como deixar o Layout Responsivo no seu site",
		category: "Data Science",
	},
	{
		key: "kyFiT4ofMwk",
		title: "Como deixar o Layout Responsivo no seu site",
		category: "Data Science",
	},
	{
		key: "kyFiT4ofMwk",
		title: "Como deixar o Layout Responsivo no seu site",
		category: "Data Science",
	},
	{
		key: "kyFiT4ofMwk",
		title: "Como deixar o Layout Responsivo no seu site",
		category: "Data Science",
	},
	{
		key: "kyFiT4ofMwk",
		title: "Como deixar o Layout Responsivo no seu site",
		category: "Mobile",
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
];

const Home: React.FC = () => {
	return (
		<S.Home>
			<Banner videoKey={videos[0].key} />
			<S.Container>
				{categories.map((item) => (
					<S.Wrapper key={item.color}>
						<CategoryTitle
							color={item.color}
							text={item.title}
							subtitle={item.subtitle}
						/>
						<VideoList
							list={videos.filter((video) => video.category === item.title)}
						/>
					</S.Wrapper>
				))}
			</S.Container>
		</S.Home>
	);
};

export default Home;
