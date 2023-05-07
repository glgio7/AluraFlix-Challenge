import * as S from "./styles";
import logo from "../../assets/logo.svg";

const Footer = () => {
	return (
		<S.Footer>
			<img src={logo} alt="Alura Flix logo" className="logo" />
			<p>
				Site feito por Giovane Azevedo na <strong>#ImersãoReact</strong> da
				<span> Alura</span>{" "}
			</p>
		</S.Footer>
	);
};

export default Footer;
