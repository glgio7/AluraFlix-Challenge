import * as S from "./styles";

export type CategoryTitleProps = {
	color: string;
	text: string;
	subtitle?: string;
};

const CategoryTitle = ({ color, text, subtitle }: CategoryTitleProps) => {
	return (
		<S.CategoryTitle backgroundColor={color}>
			<h2>{text}</h2>
			<span>{subtitle}</span>
		</S.CategoryTitle>
	);
};

export default CategoryTitle;
