import React from "react";
import { IQuestion } from "../../interfaces/IQuestion";
import PreviewQuestion from "./PreviewQuestion";
import styled from "styled-components";

const PreviewQuestionList = () => {
	const questionList = JSON.parse(localStorage.getItem("survey") || '""');

	return (
		<Container>
			{questionList.map((item: IQuestion) => {
				return <PreviewQuestion key={item.qid} question={item} />;
			})}
		</Container>
	);
};

const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 0.75rem;
	width: 100%;
`;

export default PreviewQuestionList;
