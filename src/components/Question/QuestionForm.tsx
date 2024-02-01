import React from "react";
import QuestionHeader from "./QuestionHeader";
import QuestionContent from "./QuestionContent";
import { IQuestionList } from "../../interfaces/IQuestionList";
import { SurveyBox } from "../../styles/SurveyBox";
import { Divider } from "@mui/material";
import QuestionFooter from "./QuestionFooter";
import { nanoid } from "nanoid";

interface IQForm {
	question: IQuestionList;
	questionIdx: number;
	questionList: IQuestionList[];
	setQuestionList: React.Dispatch<React.SetStateAction<IQuestionList[]>>;
}

const QuestionForm = (props: IQForm) => {
	const deleteQuestion = () => {
		props.setQuestionList(
			props.questionList.filter((el) => el.qid !== props.question.qid)
		);
	};

	const copyQuestion = () => {
		props.setQuestionList([
			...props.questionList.slice(0, props.questionIdx + 1),
			{
				...props.question,
				qid: nanoid(),
			},
			...props.questionList.slice(
				props.questionIdx + 2,
				props.questionList.length
			),
		]);
	};

	return (
		<SurveyBox>
			<QuestionHeader
				question={props.question}
				questionIdx={props.questionIdx}
				questionList={props.questionList}
				setQuestionList={props.setQuestionList}
			/>
			<QuestionContent question={props.question} />
			<Divider sx={{ margin: "1rem 0" }} />
			<QuestionFooter onCopy={copyQuestion} onDelete={deleteQuestion} />
		</SurveyBox>
	);
};

export default QuestionForm;
