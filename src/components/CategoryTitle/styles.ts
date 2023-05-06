import styled from "styled-components";

export const CategoryTitle = styled.div<{ backgroundColor: string }>`
	color: #fff;
	display: flex;
	align-items: center;

	background-color: #101010;

	width: fit-content;

	h2 {
		display: inline-flex;
		align-items: center;
		justify-content: center;

		width: 204px;
		height: 60px;

		border-radius: 4px;

		background-color: ${({ backgroundColor }) => backgroundColor};
	}
	span {
		font-size: 0.8rem;

		margin-left: 1rem;
		margin-right: 1rem;
	}
`;
