import React from "react";
import styled from "styled-components";
import PreviewSurvey from "../components/preview/PreviewSurvey";

const PreviewPage = () => {
	return (
		<Container>
			<PreviewSurvey />
		</Container>
	);
};

const Container = styled.div`
	display: flex;
	padding: 1rem;
	width: 100%;
`;

export default PreviewPage;
