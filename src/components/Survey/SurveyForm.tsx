import React, { useState } from "react";
import { nanoid } from "nanoid";
import { IQuestion } from "../../interfaces/IQuestion";
import TitleForm from "../Title/TitleForm";
import QuestionList from "../Question/QuestionList";
import styled from "styled-components";
import { Button } from "@mui/material";
import { AddCircleOutlineOutlined } from "@mui/icons-material";

const SurveyForm = () => {
	const [questionList, setQuestionList] = useState<Array<IQuestion>>([
		{
			qid: nanoid(),
			title: "",
			optionId: 2,
			optionData: {
				options: [{ id: nanoid(), text: "옵션 추가" }],
				isEtcAdded: false,
			},
			isRequired: false,
		},
	]);

	const addQuestion = (e: React.MouseEvent<HTMLButtonElement>) => {
		setQuestionList((questionList) => [
			...questionList,
			{
				qid: nanoid(),
				title: "",
				optionId: 2,
				optionData: {
					options: [{ id: nanoid(), text: "옵션 추가" }],
					isEtcAdded: false,
				},
				isRequired: false,
			},
		]);
	};

	const onTest = (e: React.MouseEvent<HTMLButtonElement>) => {
		console.log(questionList);
	};

	return (
		<Container>
			<Button onClick={addQuestion}>
				<AddCircleOutlineOutlined />
			</Button>
			<Button onClick={onTest}>TEST</Button>
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
