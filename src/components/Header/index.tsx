import * as S from "./styles";
import logo from "../../assets/logo.png";
import Button from "../Button";

const Header = () => {
	return (
		<S.Header>
			<img src={logo} alt="Alura Flix logo" className="logo" />
			<Button text="Novo vídeo" />
		</S.Header>
	);
};

export default Header;
