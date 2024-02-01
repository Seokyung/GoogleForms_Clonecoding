import React from "react";
import QuestionForm from "./QuestionForm";
import styled from "styled-components";
import { IQuestionList } from "../Survey/SurveyForm";

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
						key={item.id}
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
