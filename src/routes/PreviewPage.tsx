import React from "react";
import { rootState } from "../modules/reducers";
import { useSelector } from "react-redux";
import styled from "styled-components";

const PreviewPage = () => {
	const questionList = useSelector((state: rootState) => state.questionReducer);

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
