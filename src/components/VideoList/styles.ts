import styled from "styled-components";

export const VideoList = styled.ul`
	display: flex;

	overflow-x: auto;
`;

export const VideoItem = styled.li<{ background: string }>`
	height: 260px;

	aspect-ratio: 16/9;

	margin-top: 1rem;
	margin-right: 1.5rem;

	border: 4px solid #6bd1ff;
	border-radius: 4px;

	background-image: ${({ background }) => background};
	background-size: cover;
	background-repeat: no-repeat;

	&:last-of-type {
		margin-right: 0;
	}
`;
