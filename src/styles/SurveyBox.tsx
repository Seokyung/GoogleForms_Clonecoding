import styled from "styled-components";

export const SurveyBox = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	min-width: 700px;
	padding: 1.5rem;
	border: 1px solid rgba(0, 0, 0, 0.2);
	border-radius: 10px;
	background-color: #fff;
	@media (max-width: 768px) {
		min-width: 350px;
	}
`;
