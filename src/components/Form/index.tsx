import React from "react";
import * as S from "./styles";

type FormProps = {
	children: React.ReactNode;
};

const Form = ({ children }: FormProps) => {
	return <S.Form>{children}</S.Form>;
};

export default Form;
