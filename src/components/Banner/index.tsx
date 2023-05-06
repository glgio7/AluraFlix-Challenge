import * as S from "./styles";
import { BannerProps } from "./types";

const Banner = ({ videoKey }: BannerProps) => {
	const imageURL = `https://i3.ytimg.com/vi/${videoKey}/maxresdefault.jpg`;

	return <S.Banner background={`url(${imageURL})`}></S.Banner>;
};

export default Banner;
