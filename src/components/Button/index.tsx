import * as S from "./styles";
import { ButtonProps } from "./types";

const Button = ({ text }: ButtonProps) => {
	return <S.Button>{text}</S.Button>;
};

export default Button;
