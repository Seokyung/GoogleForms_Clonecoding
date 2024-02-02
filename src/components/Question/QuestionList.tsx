import React from "react";
import QuestionForm from "./QuestionForm";
import { IQuestion } from "../../interfaces/IQuestion";
import styled from "styled-components";

interface IQList {
	questionList: IQuestion[];
	setQuestionList: React.Dispatch<React.SetStateAction<IQuestion[]>>;
}

const QuestionList = (props: IQList) => {
	return (
		<Container>
			{props.questionList.map((item, idx) => {
				return (
					<QuestionForm
						key={item.qid}
						question={item}
						questionIdx={idx}
						questionList={props.questionList}
						setQuestionList={props.setQuestionList}
					/>
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
