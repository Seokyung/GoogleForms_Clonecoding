import React, { useState } from "react";
import TitleForm from "../Title/TitleForm";
import styled from "styled-components";
import { Button } from "@mui/material";
import { AddCircleOutlineOutlined } from "@mui/icons-material";
import QuestionList from "../Question/QuestionList";

export interface IQListProps {
	id: number;
	optionId: number;
}

const SurveyForm = () => {
	const [questionList, setQuestionList] = useState<Array<IQListProps>>([
		{ id: 0, optionId: 2 },
	]);

	const addQuestion = (e: React.MouseEvent<HTMLButtonElement>) => {
		setQuestionList((questionList) => [
			...questionList,
			{ id: questionList.length, optionId: 2 },
		]);
		console.log(questionList);
	};

	return (
		<Container>
			<Button onClick={addQuestion}>
				<AddCircleOutlineOutlined />
			</Button>
			<TitleForm />
			<QuestionList
				questionList={questionList}
				setQuestionList={setQuestionList}
			/>
		</Container>
	);
};

const Container = styled.div`
	display: flex;
	flex-direction: column;
	gap: 0.75rem;
`;

export default SurveyForm;
