import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { rootState } from "../../modules/reducers";
import { addQuestion } from "../../modules/actions/question";
import TitleForm from "../Title/TitleForm";
import QuestionList from "../Question/QuestionList";
import styled from "styled-components";
import { Button } from "@mui/material";
import { AddCircleOutlineOutlined } from "@mui/icons-material";

const SurveyForm = () => {
	const questionList = useSelector((state: rootState) => state.questionReducer);
	const dispatch = useDispatch();

	const onAddQuestion = () => {
		dispatch(addQuestion());
	};

	const onTest = (e: React.MouseEvent<HTMLButtonElement>) => {
		console.log(questionList);
	};

	return (
		<Container>
			<Button onClick={onAddQuestion}>
				<AddCircleOutlineOutlined />
			</Button>
			<Button onClick={onTest}>TEST</Button>
			<TitleForm />
			<QuestionList />
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
