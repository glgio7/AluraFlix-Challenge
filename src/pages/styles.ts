import styled from "styled-components";

export const Home = styled.main`
	position: relative;
`;

export const Container = styled.section`
	position: absolute;
	top: 672px;

	padding: 0 2rem;

	max-width: 100%;
	min-height: 400px;
`;

export const Wrapper = styled.div<{ backgroundColor: string }>`
	width: 100%;

	h2 {
		display: inline-flex;
		align-items: center;
		justify-content: center;

		width: 204px;
		height: 60px;

		background-color: ${({ backgroundColor }) => backgroundColor};
		color: #fff;
	}
`;
