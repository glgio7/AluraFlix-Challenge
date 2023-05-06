import styled from "styled-components";

export const Banner = styled.div<{ background: string }>`
	width: 100%;
	height: 809px;

	position: relative;

	z-index: 5;

	background-color: #000;

	border-bottom: 4px solid #6bd1ff;

	padding: 0 2rem;
	padding-top: 170px;

	.background {
		position: absolute;
		top: 0;
		left: 0;

		z-index: -1;

		opacity: 0.25;

		height: 100%;
		width: 100%;

		background-image: ${({ background }) => `${background}`};
		background-size: cover;
		background-repeat: no-repeat;
	}

	.container {
		width: 100%;
		height: 200px;

		display: flex;
		justify-content: space-between;
	}

	.container__info {
		display: flex;
		flex-direction: column;

		color: #fff;

		width: 60%;
	}

	h3 {
		margin-top: 3rem;

		font-size: 3rem;
		line-height: 54px;
	}

	p {
		font-size: 1rem;

		margin-top: 9px;
	}

	.thumbnail {
		height: 336px;

		aspect-ratio: 16/9;

		border: 4px solid #6bd1ff;
		border-radius: 4px;
	}
`;
