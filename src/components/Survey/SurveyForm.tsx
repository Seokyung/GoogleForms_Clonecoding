import React from "react";
import TitleForm from "../Title/TitleForm";
import QuestionList from "../Question/QuestionList";
import Menu from "../Menu/Menu";
import styled from "styled-components";

const SurveyForm = () => {
	return (
		<Container>
			<SurveyContainer>
				<Menu />
				<TitleForm />
				<QuestionList />
			</SurveyContainer>
		</Container>
	);
};

const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 100%;
`;

const SurveyContainer = styled.div`
	position: relative;
	display: flex;
	flex-direction: column;
	align-items: end;
	gap: 0.75rem;
	margin-top: -104px;
	width: auto;
	height: auto;
`;

export default SurveyForm;
