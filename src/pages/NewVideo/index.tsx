import { useContext, useState } from "react";
import { CategoriesContext } from "../../contexts/Categories";
import { Link, useNavigate } from "react-router-dom";
import { VideosContext } from "../../contexts/Videos";
import * as S from "./styles";
import Form from "../../components/Form";
import Footer from "../../components/Footer";
import Header from "../../components/Header";

const NewVideo = () => {
	const { videos, setVideos } = useContext(VideosContext);
	const { categories } = useContext(CategoriesContext);

	const [key, setKey] = useState<string>("");
	const [title, setTitle] = useState<string>("");
	const [category, setCategory] = useState<string>("");
	const [description, setDescription] = useState<string>("");

	const navigate = useNavigate();

	const newVideo = { key, title, category, description };

	const addNewVideo = () => {
		if (
			newVideo.key &&
			newVideo.category &&
			newVideo.title &&
			videos.filter((video) => video.key === newVideo.key).length < 1
		) {
			setVideos(() => [...videos, newVideo]);
			navigate("/");
		} else if (
			videos.filter((video) => video.key === newVideo.key).length >= 1
		) {
			alert(`O vídeo já está na lista de videos em ${newVideo.category}`);
		} else alert("Preencha os campos");
	};

	return (
		<S.NewVideo>
			<Header />
			<div className="container">
				<h3>Novo vídeo</h3>
				<Form>
					<div className="input-container">
						<label htmlFor="title">Titulo</label>
						<input
							id="title"
							onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
								setTitle(event.target.value)
							}
						/>
					</div>
					<div className="input-container">
						<label htmlFor="title">Key do video</label>
						<input
							value={key}
							id="key"
							placeholder="Os 11 dígitos após youtube.com/watch?v="
							onChange={(event) => setKey(event.target.value)}
							required
						/>
					</div>
					<div className="input-container">
						<label>Thumbnail do video</label>
						<input
							value={`https://i3.ytimg.com/vi/${key}/maxresdefault.jpg`}
							readOnly
						/>
					</div>
					<div className="input-container">
						<select
							onChange={(e) => setCategory(e.target.value)}
							value={category}
						>
							<option>Selecione uma categoria</option>
							{categories.map((item) => (
								<option key={item.title} value={item.title}>
									{item.title}
								</option>
							))}
						</select>
					</div>
					<div className="input-container">
						<textarea
							placeholder="Descrição"
							value={description}
							required
							onChange={(event) => setDescription(event.target.value)}
						/>
					</div>
				</Form>
			</div>

			<S.Actions>
				<div className="action-container">
					<button className="action-btn" onClick={() => addNewVideo()}>
						Salvar
					</button>
					<button
						className="action-btn"
						onClick={() => {
							setKey("");
							setTitle("");
							setCategory("");
							setDescription("");
						}}
					>
						Limpar
					</button>
				</div>
				<Link to="/" className="action-btn">
					Nova categoria
				</Link>
			</S.Actions>
			<Footer />
		</S.NewVideo>
	);
};

export default NewVideo;
