import React from "react";
import SurveyForm from "../components/Survey/SurveyForm";
import styled from "styled-components";

const SurveyPage = () => {
	return (
		<Container>
			<SurveyForm />
		</Container>
	);
};

const Container = styled.div`
	display: flex;
	padding: 1rem;
	width: 100%;
`;

export default SurveyPage;
