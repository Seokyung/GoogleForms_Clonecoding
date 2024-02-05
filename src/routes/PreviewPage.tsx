import React, { useEffect } from "react";
import styled from "styled-components";

const PreviewPage = () => {
	const titleData = JSON.parse(localStorage.getItem("title") || '""');
	const surveyData = JSON.parse(localStorage.getItem("survey") || '""');

	useEffect(() => {
		console.log(titleData);
		console.log(surveyData);
	}, []);

	return (
		<Container>
			<h2>Preview</h2>
		</Container>
	);
};

const Container = styled.div`
	display: flex;
	padding: 1rem;
	width: 100%;
`;

export default PreviewPage;
