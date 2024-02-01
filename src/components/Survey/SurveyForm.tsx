import React, { useState } from "react";
import TitleForm from "../Title/TitleForm";
import styled from "styled-components";
import { Button } from "@mui/material";
import { AddCircleOutlineOutlined } from "@mui/icons-material";
import QuestionList from "../Question/QuestionList";
import { nanoid } from "nanoid";

export interface IQuestionList {
	qid: string;
	title: string;
	optionId: number;
	optionData?: object;
	isRequired: boolean;
}

const SurveyForm = () => {
	const [questionList, setQuestionList] = useState<Array<IQuestionList>>([
		{ qid: nanoid(), title: "", optionId: 2, isRequired: false },
	]);

	const addQuestion = (e: React.MouseEvent<HTMLButtonElement>) => {
		setQuestionList((questionList) => [
			...questionList,
			{
				qid: nanoid(),
				title: "",
				optionId: 2,
				isRequired: false,
			},
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
