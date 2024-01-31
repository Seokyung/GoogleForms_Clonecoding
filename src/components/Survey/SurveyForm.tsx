import React from "react";
import TitleForm from "../Title/TitleForm";
import QuestionForm from "../Question/QuestionForm";
import styled from "styled-components";

const SurveyForm = () => {
	return (
		<Container>
			<TitleForm />
			<QuestionForm />
		</Container>
	);
};

const Container = styled.div`
	display: flex;
	flex-direction: column;
	gap: 0.75rem;
`;

export default SurveyForm;
