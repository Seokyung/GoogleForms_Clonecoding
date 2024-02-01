import React, { useState } from "react";
import { nanoid } from "nanoid";
import { IQuestionList } from "../../interfaces/IQuestionList";
import TitleForm from "../Title/TitleForm";
import QuestionList from "../Question/QuestionList";
import styled from "styled-components";
import { Button } from "@mui/material";
import { AddCircleOutlineOutlined } from "@mui/icons-material";

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
	align-items: center;
	gap: 0.75rem;
	width: 100%;
`;

export default SurveyForm;
