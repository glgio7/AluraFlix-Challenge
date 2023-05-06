import React, { useEffect, useState } from "react";
import * as S from "./styles";
import Banner from "../components/Banner";
import { ICategory, ICurrentVideo, IVideo } from "./types";
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
		description:
			"Aprenda responsividade na prática com este tutorial sobre como transformar seu site num layout responsivo através do uso de ferramentas de desenvolvedor do seu navegador, o visual studio code e códigos CSS: media screen, container, propriedades CSS e mais. Comece um teste com seu próprio projeto!",
	},
	{
		key: "ii5Q2fCl8C0",
		title: "Motivação: O Diário de Henry Jones",
		category: "Front End",
		description:
			"O que o diário de Henry Jones (Indiana Jones e a Última Cruzada) tem a ver com minhas atividades de blogueiro, palestrante e agora YouTuber? Quero contar uma história pessoal que se inicia em 1984 e dura até hoje. Não subestime uma criança, você nunca sabe o que pode se tornar uma inspiração que pode durar uma vida inteira.",
	},
	{
		key: "5b9Z8toVaAU",
		title: "O que é Data Science? #HipstersPontoTube",
		category: "Data Science",
		description:
			"Python é o novo Excel? Para que serve o R, Pandas e Jupyter? E qual é, afinal, a diferença entre o Data Science, Business Intelligence e Machine Learning? Descubra no primeiro episódio de Hipsters Ponto Tube! ",
	},
	{
		key: "Iuz_jc96bQk",
		title: "O que é Machine Learning? #HipstersPontoTube",
		category: "Data Science",
		description:
			"Como as máquinas aprendem? Antes disso, temos de nos perguntar como é que nós humanos aprendemos. Assista à explicação dos irmãos Silveira! ",
	},
	{
		key: "MGIs7DSQ-0A",
		title:
			"Desenvolvimento iOS pra iniciantes com Giovanna Moeller | #HipstersPontoTube",
		category: "Mobile",
		description:
			"Por onde começar em iOS? Qual linguagem é importante dominar? Quais ferramentas necessárias para mergulhar no desenvolvimento iOS? 🤔 O @DevSoutinho é o host desse episódio e ele recebeu a Giovanna Moeller para compartilhar dicas incríveis sobre desenvolvimento iOS para quem está começando nessa área. Se você quer dar start no mercado mobile e têm dúvidas, vem conferir o conteúdo.",
	},
	{
		key: "uXA8jLSuPNA",
		title: "Temas e cores no SwiftUI | #AluraMais",
		category: "Mobile",
		description:
			"Tem vídeo novo do Alura+ no ar, pessoal! 🎉 Nesta semana, a Giovanna Moeller, Instrutora da Escola de Mobile da Alura, vai ensinar você a criar temas e estilos de cores no Swift!",
	},
];

const Home: React.FC = () => {
	const [currentVideo, setCurrentVideo] = useState<ICurrentVideo>({
		key: "kyFiT4ofMwk",
		title: "Como deixar o Layout Responsivo no seu site",
		category: "Front End",
		color: "#6BD1FF",
		description:
			"Aprenda responsividade na prática com este tutorial sobre como transformar seu site num layout responsivo através do uso de ferramentas de desenvolvedor do seu navegador, o visual studio code e códigos CSS: media screen, container, propriedades CSS e mais. Comece um teste com seu próprio projeto!",
	});

	useEffect(() => {
		window.scrollTo(0, 0);
	}, [currentVideo]);

	return (
		<S.Home>
			<Banner currentVideo={currentVideo} />
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
							color={item.color}
							setVideo={setCurrentVideo}
						/>
					</S.Wrapper>
				))}
			</S.Container>
		</S.Home>
	);
};

export default Home;
