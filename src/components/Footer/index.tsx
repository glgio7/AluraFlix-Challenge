import * as S from "./styles";
import logo from "../../assets/logo.svg";

const Footer = () => {
	return (
		<S.Footer>
			<img src={logo} alt="Alura Flix logo" className="logo" />
		</S.Footer>
	);
};

export default Footer;
