import styled from "styled-components";

export const Banner = styled.div<{ background: string }>`
	width: 100%;
	height: 809px;

	background-image: ${({ background }) => `${background}`};
	background-size: cover;
	background-repeat: no-repeat;
`;
