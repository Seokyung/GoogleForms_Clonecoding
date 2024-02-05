import styled from "styled-components";

export const PreviewBox = styled.div`
	display: flex;
	flex-direction: column;
	width: 700px;
	padding: 1.75rem 2rem;
	border: 1px solid rgba(0, 0, 0, 0.2);
	border-radius: 10px;
	background-color: #fff;
	@media (max-width: 768px) {
		width: 100%;
	}
`;
