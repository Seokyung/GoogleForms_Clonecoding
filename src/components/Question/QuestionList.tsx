import React from "react";
import { useSelector } from "react-redux";
import { rootState } from "../../modules/reducers";
import QuestionForm from "./QuestionForm";
import styled from "styled-components";

const QuestionList = () => {
	const questionList = useSelector((state: rootState) => state.questionReducer);

	return (
		<Container>
			{questionList.map((item, idx) => {
				return (
					<QuestionForm key={item.qid} question={item} questionIdx={idx} />
				);
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

export default QuestionList;
