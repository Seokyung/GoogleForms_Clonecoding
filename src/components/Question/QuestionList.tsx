import React from "react";
import QuestionForm from "./QuestionForm";
import { IQuestionList } from "../../interfaces/IQuestionList";
import styled from "styled-components";

interface IQList {
	questionList: IQuestionList[];
	setQuestionList: React.Dispatch<React.SetStateAction<IQuestionList[]>>;
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
	gap: 0.75rem;
`;

export default QuestionList;
