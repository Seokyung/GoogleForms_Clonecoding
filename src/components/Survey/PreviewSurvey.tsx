import React from "react";
import styled from "styled-components";
import PreviewTitle from "../Title/PreviewTitle";

const PreviewSurvey = () => {
	return (
		<Container>
			<SurveyContainer>
				<PreviewTitle />
			</SurveyContainer>
		</Container>
	);
};

export default PreviewSurvey;

const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 100%;
`;

const SurveyContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: end;
	gap: 0.75rem;
	width: auto;
	height: auto;
`;
