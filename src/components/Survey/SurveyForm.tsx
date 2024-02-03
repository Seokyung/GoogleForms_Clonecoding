import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { rootState } from "../../modules/reducers";
import { addQuestion } from "../../modules/actions/question";
import { IQuestion } from "../../interfaces/IQuestion";
import TitleForm from "../Title/TitleForm";
import QuestionList from "../Question/QuestionList";
import styled from "styled-components";
import { Button } from "@mui/material";
import { AddCircleOutlineOutlined } from "@mui/icons-material";

const SurveyForm = () => {
	const questionList2 = useSelector((state: rootState) => {
		return state.questionReducer;
	});
	const dispatch = useDispatch();

	const [questionList, setQuestionList] =
		useState<Array<IQuestion>>(questionList2);

	const onAddQuestion = () => {
		dispatch(addQuestion());
		setQuestionList(questionList2);
		console.log(questionList2);
	};

	const onTest = (e: React.MouseEvent<HTMLButtonElement>) => {
		console.log(questionList2);
	};

	return (
		<Container>
			<Button onClick={onAddQuestion}>
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
